import {con} from "connection.js"

export async function InserirAnime(anime) {
    const comando = 
    `
    nm_anime,   nome ?

       
    `
    const [resposta] = await con.query(comando, [anime])
    return resposta;
}
export async function Consultar() {
    const comando = 
    `
    select id_anime,    id

       
    `
    const [resposta] = await con.query(comando)
    return resposta;
}


