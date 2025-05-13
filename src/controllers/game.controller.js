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
}
export default new GameController();
