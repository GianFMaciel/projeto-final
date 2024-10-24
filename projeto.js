let nomeUsuario = prompt("Qual é seu nome ?")
let cidadeUsuario = prompt("Qual cidade você está ?")
let opcaoMenu = Number(prompt("Digite o número da opção desejada: 1-Cadastrar Abrigo. 2- Listar Abrigos. 3- Procurar Abrigo. 4- Sair."))

let listaAbrigo = ""

let abrigos = [
    {
        codigoAbrigo: 1,
        nomeAbrigo: "Lar de Caridade",
        enderecoAbrigo: "São Leopoldo",
        telefoneAbrigo: 35728599,
        capacidadeAbrigo: 35
    },
    {
        codigoAbrigo: 2,
        nomeAbrigo: "União",
        enderecoAbrigo: "Novo Hamburgo",
        telefoneAbrigo: 35684588,
        capacidadeAbrigo: 40
    },
    {
        codigoAbrigo: 3,
        nomeAbrigo: "Abraço de Jesus",
        enderecoAbrigo: "Canoas",
        telefoneAbrigo: 35729877,
        capacidadeAbrigo: 50
    },
    {
        codigoAbrigo: 4,
        nomeAbrigo: "Lar da Esperança",
        enderecoAbrigo: "Porto Alegre",
        telefoneAbrigo: 35723125,
        capacidadeAbrigo: 45
    },
]

const cadastrarAbrigo = (cadastramento) => {
    if (opcaoMenu === 1){
        for (let i = 0; i < abrigos.codigoAbrigo; i++){
            codigoAbrigo = i + 1
            abrigos.push(codigoAbrigo) 
        }
        let nomeAbrigo = prompt("Qual é o nome do seu abrigo ?")
        abrigos.push(nomeAbrigo)
        let enderecoAbrigo = prompt("Qual é a cidade que reside seu abrigo ?")
        abrigos.push(enderecoAbrigo)
        let telefoneAbrigo = Number(prompt("Qual é o número do telefone do abrigo ?"))
        abrigos.push(telefoneAbrigo)
        let capacidadeAbrigo = Number(prompt("Qual é a capacidade de lotação do seu abrigo ?"))
        abrigos.push(capacidadeAbrigo)
        cadastramento = abrigos
        console.log(abrigos.length)
    }
    else if (opcaoMenu === 2) {
        for (let i = 0; i < abrigos.length; i++ ) {
            listaAbrigo = i.length
            console.log(listaAbrigo)
        }

    }
    return 
    
}


