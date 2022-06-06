import { Router } from "express";
import { InserirAnime } from "../repository/AnimeRepository";
const server = Router();

server.post('/anime', async (req, resp) => {
    const adicione = req.body;
     const resp = await InserirAnime(adicione)
     return resp;
})
server.get('/anime', async (req, resp) =>{
    const anime = req.params
    const resposta = Consultar(anime)
    return resposta;
})
