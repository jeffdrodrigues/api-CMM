const HorseService = require("../services/HorseService");

exports.get = async (req, res, next) => {
  try {
    const horses = await HorseService.getAllHorses();
    if (!horses) {
      return res.status(404).json("There are no horses published yet!");
    }
    res.json(horses);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getById = async (req, res, next) => {
  let id = req.params.id;

  try {
    const horse = await HorseService.getHorseById(id);
    res.json(horse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getByName = async (req, res, next) => {
  let name = req.params.name;

  try {
    const horses = await HorseService.getHorsesByName(name);
    if (!horses) {
      return res.status(404).json("There are no horses published yet!");
    }
    res.json(horses);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.post = async (req, res, next) => {
  try {
    const createdHorse = await HorseService.createHorse(req.body);
    res.status(201).json(createdHorse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.delete = async (req, res, next) => {
  let id = req.params.id;

  try {
    const deleteResponse = await HorseService.deleteHorse(id);
    res.json(deleteResponse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getByParents = async (req, res, next) => {

  let name = req.params.name;
  let limit = parseInt(req.query.limit || 50);
  let offset = parseInt(req.query.offset || 0);

  //valida os parâmetros de paginação
  if (limit < 10 || limit > 50)
    return res.status(400).json("O valor para o parâmetro 'limit' deve estar entre 10 e 50!");

  if (offset < 0)
    return res.status(400).json("O valor para o parâmetro 'offset' não pode ser menor que zero!");

  try {
    const horses = await HorseService.getHorsesByParents(name, limit, offset);
    if (!horses) {
      return res.status(404).json("This horse has no published children!");
    }
    res.json(horses);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.put = async (req, res, next) => {
  let id = req.params.id;

  try {
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
      return res.status(404).json({});
    }

    res.json(updatedHorse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};