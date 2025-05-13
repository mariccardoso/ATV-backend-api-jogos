import express from 'express';
import GameController from '../controllers/game.controller.js';

const gameRouter = express.Router();

// Rotas de Jogos
// GET /jogos - Listar todos os Jogos
gameRouter.get('/', GameController.getAllGames);

// GET /jogos/:id - Obter um Jogo pelo ID
// gameRouter.get('/:id', GameController.getGameById);

// POST /jogos - Criar um novo Jogo
gameRouter.post('/', GameController.createGame);


export default gameRouter;