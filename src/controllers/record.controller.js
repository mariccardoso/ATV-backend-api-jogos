import RecordModel from "../models/record.model.js";

class RecordController {                               
  // GET / jogos
  async getAllRecords(req, res) {
    try {
      const records = await RecordModel.findAll();
      return res.status(200).json(records);
    } catch (error) {
      console.errpr("Error fiding records:", error);
      return res.status(500).json({ message: "Error finding records", error });
    }
  }

  // POST / jogos
  async createRecord(req, res) {
    try {
      const {userId, gameId, score, screenshot} = req.body;

      // Validação básica
      if (!userId || !gameId || !score || !screenshot) {
        return res
          .status(400)
          .json({ error: "All fields are required" });
      }

      const data = {
        userId,
        gameId,
        score,
        screenshot,
      };

      const newRecord = await RecordModel.create(data);

      return res.status(201)
        .json({ 
          message: "Record created successfully", 
          record: newRecord });
    } catch (error) {
      console.error("Error creating record:", error);
      return res.status(500).json({ message: "Error creating record", error });
    }
  }
}

//
export default new RecordController();
