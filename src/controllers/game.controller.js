import GameModel from "../models/game.model.js";

class GameController {                               
  // GET / jogos
  async getAllGames(req, res) {
    try {
      const games = await GameModel.findAll();
      return res.status(200).json(games);
    } catch (error) {
      console.errpr("Error fiding games:", error);
      return res.status(500).json({ message: "Error finding games", error });
    }
  }

  // POST / jogos
  async createGame(req, res) {
    try {
      const {name, platform} = req.body;

      // Validação básica
      if (!name || !platform) {
        return res
          .status(400)
          .json({ error: "Name and platform fields are required" });
      }

      const data = {
        name,
        platform,
      };

      const newGame = await GameModel.create(data);

      return res.status(201)
        .json({ 
          message: "Game created successfully", 
          game: newGame });
    } catch (error) {
      console.error("Error creating game:", error);
      return res.status(500).json({ message: "Error creating game", error });
    }
  }
}

//
export default new GameController();
