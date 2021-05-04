const Horse = require("../models/Horse");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = class HorseService {
  static async getAllHorses() {
    try {
      const allHorses = await Horse.findAndCountAll();
      return allHorses;
    } catch (error) {
      console.log(`Could not fetch horses ${error}`);
    }
  }

  static async getHorseById(horseId) {
    try {
      const horse = await Horse.findByPk(horseId);
      return horse;
    } catch (error) {
      console.log(`Horse not found ${error}`);
    }
  }

  static async getHorsesByName(horseName) {
    try {

      const allHorses = await Horse.findAndCountAll({
        where: {
          name: {
            [Op.iLike]: '%' + horseName + '%'
          }
        }
      });
      return allHorses;
    } catch (error) {
      console.log(`Could not fetch horses ${error}`);
    }
  }

  static async createHorse(data) {
    try {
      const response = await new Horse(data);
      return response.save();
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteHorse(horseId) {
    try {
      const deletedResponse = await Horse.destroy({ where: { id: horseId } });
      return deletedResponse;
    } catch (error) {
      console.log(`Could not delete todo ${error}`);
    }
  }

  static async getHorsesByParents(parentName, limit, offset) {
    try {
      const horses = await Horse.findAndCountAll({
        where: {
          [Op.or]: [
            {
              father: parentName
            },
            {
              mother: parentName
            }
          ]
        },
        order: [
          ['id', 'ASC']
        ],
        limit: limit,
        offset: offset
      });
      return horses;
    } catch (error) {
      console.log(`Could not fetch horses ${error}`);
    }
  }

  static async updateHorse(id, horse) {
    try {
      const updateResponse = await Horse.update(horse, { where: { id: id } });

      return updateResponse;
    } catch (error) {
      console.log(`Could not update Horse ${error}`);
    }
  }

}