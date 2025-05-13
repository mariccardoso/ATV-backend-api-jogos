import express from "express";
import RecordController from "../controllers/record.controller.js";

const recordRouter = express.Router();

// Rotas de Cartas
// GET /cartas - Listar todas as Cartas
recordRouter.get("/", RecordController.getAllRecords);

// POST /cartas - Criar uma nova Carta
recordRouter.post("/", RecordController.createRecord);


export default recordRouter;
