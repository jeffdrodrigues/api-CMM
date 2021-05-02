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