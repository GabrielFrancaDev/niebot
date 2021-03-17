module.exports = async (client, msg) =>{
    var infos ={
        0: ["gay","sente atração pelo mesmo genero"],
        1: ["lesbica","sente atração por mulheres"],
        2: ["pan","sente atração por continentes"],
        3: ["assexual","sente atração pela letra 'a'"],
        4: ["fluido","sente atração por coca cola 2 litro"],
        5: ["pony","sente atração por poneys/cavalos"],
        6: ["otaku","sente atração por desenho"],
        7: ["hetero","sente atração por homens"],
        8: ["trans","sente atração por transformers"]
    }
    /*
    var generos = ['gay', 'lesbica', 'pan', 'assexual', 'fluido', 'pony', 'otaku', 'hetero', 'trans']
    var descricoes = {
        "gay": "sente atração pelo mesmo genero",
        "hetero": "sente atração pelo sexo oposto",
        "lesbica": "sente atração por mulheres",
        "pan": "sente atração por continentes",
        "assexual": "sentre atração pela letra 'a'",
        "fluido": "sente atração por coca cola 2 litro",
        "pony": "sentre atração por poneys/cavalos",
        "otaku": "sente atração por desenho",
        "trans": "sentre atração por transformers"
    }
    var num = msg.author.id.split('')[3];
    var genero = generos[num];
    var bandeira = "./imagens/bandeiras/"+genero+".png";

    msg.channel.send(descricoes[genero])
    msg.channel.send({files: [bandeira]})
    */
    var num = msg.author.id.split('')[3];
    var genero = infos[num][0];
    var bandeira = "./imagens/bandeiras/"+genero+".png";

    msg.channel.send(infos[num][1])
    msg.channel.send({files: [bandeira]})
    
}