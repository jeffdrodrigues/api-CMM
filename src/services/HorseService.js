const Horse = require("../models/Horse");

module.exports = class HorseService{
    static async getAllHorses(){
        try{
            const allHorses = await Horse.findAll();
            return allHorses;            
        } catch (error){
            console.log(`Could not fetch horses ${error}`);
        }
    }
}