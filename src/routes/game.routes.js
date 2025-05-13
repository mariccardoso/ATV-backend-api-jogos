import express from 'express';
import GameController from '../controllers/game.controller.js';

const gameRouter = express.Router();

// Rotas de Jogos
// GET /jogos - Listar todos os Jogos
gameRouter.get('/', GameController.getAllGames);

export default gameRouter;