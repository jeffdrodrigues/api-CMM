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