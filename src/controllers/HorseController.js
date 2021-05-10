const HorseService = require("../services/HorseService");
const security = require("../security/authorization");

exports.get = async (req, res, next) => {
  try {
    const horses = await HorseService.getAllHorses();
    if (!horses) {
      return res.status(404).json("Horse not found!");
    }

    res.status(200).json(horses);

  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const horse = await HorseService.getHorseById(id);
    if (!horse) {
      return res.status(404).json("Horse not found!");
    }

    res.status(200).json(horse);

  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getByName = async (req, res, next) => {
  const name = req.params.name;

  try {
    const horses = await HorseService.getHorsesByName(name);
    if (!horses) {
      return res.status(404).json("Horse not found!");
    }
    res.status(200).json(horses);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.post = async (req, res, next) => {
  const profile = req.decoded.profile;

  try {  
    const authorized = await security.authorization(profile);

    if (!authorized){
      return res.status(403).json({ error: "Unauthorized user!"});
    }

    const createdHorse = await HorseService.createHorse(req.body);
    res.status(201).json(createdHorse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  const profile = req.decoded.profile;    

  try {
    const authorized = await security.authorization(profile);

    if (!authorized){
      return res.status(403).json({ error: "Unauthorized user!"});
    }

    const deleteResponse = await HorseService.deleteHorse(id);
    res.status(200).json({'Deleted records': deleteResponse});
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getByParents = async (req, res, next) => {

  const name = req.params.name;
  const limit = parseInt(req.query.limit || 50);
  const offset = parseInt(req.query.offset || 0);

  //valida os parâmetros de paginação
  if (limit < 10 || limit > 50)
    return res.status(400).json("The value for the 'limit' parameter must be between 10 and 50!");

  if (offset < 0)
    return res.status(400).json("The value for the 'offset' parameter cannot be less than zero!");

  try {
    const horses = await HorseService.getHorsesByParents(name, limit, offset);
    if (!horses) {
      return res.status(404).json("Horse not found!");
    }
    res.status(200).json(horses);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.put = async (req, res, next) => {
  const id = req.params.id;
  const profile = req.decoded.profile;

  try {
    const authorized = await security.authorization(profile);

    if (!authorized){
      return res.status(403).json({ error: "Unauthorized user!"});
    }
    
    const horse = {};
    horse.name = req.body.name;
    horse.father = req.body.father;
    horse.mother = req.body.mother;
    horse.gender = req.body.gender;
    horse.coat = req.body.coat;
    horse.birth = req.body.birth;
    horse.owner = req.body.owner;
    horse.book = req.body.book;
    horse.register = req.body.register;
    horse.alive = req.body.alive;
    horse.blocked = req.body.blocked;

    const updatedHorse = await HorseService.updateHorse(id, horse);

    if (updatedHorse.nModified === 0) {
      return res.status(404).json({error: 'Horse not found!'});
    }

    res.status(200).json({'updated records': updatedHorse});

  } catch (error) {
    res.status(500).json({ error: error });
  }
};