export async function InserirAnime(anime) {
    const comando = 
    `

    `
    const [resposta] = await con.query(comando, [nm.anime])
    return resposta;
}

