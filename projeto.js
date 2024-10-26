

const abrigos = [
    {
        nomeAbrigo: "Lar de Caridade",
        enderecoAbrigo: "Rua Lisboa nº120",
        telefoneAbrigo: 35728599,
        capacidadeAbrigo: 35,
        cidade: "São Leopoldo"
    },
    {
        nomeAbrigo: "União",
        enderecoAbrigo: "Rua America nº50",
        telefoneAbrigo: 35684588,
        capacidadeAbrigo: 40,
        cidade: "Novo Hamburgo"
    },
    {
        nomeAbrigo: "Abraço de Jesus",
        enderecoAbrigo: "Rua Independência nº355",
        telefoneAbrigo: 35729877,
        capacidadeAbrigo: 50,
        cidade: "Canoas"
    },
    {
        nomeAbrigo: "Lar da Esperança",
        enderecoAbrigo: "Rua Catedral nº420",
        telefoneAbrigo: 35723125,
        capacidadeAbrigo: 45,
        cidade: "Porto Alegre"
    },
]

function menu () {
    const opcaoMenu = Number(prompt(`Digite o número da opção desejada:
        1- Cadastrar Abrigo.
        2- Listar Abrigos.
        3- Procurar Abrigo.
        4- Sair.`))


        if (opcaoMenu === 1){
            cadastrarAbrigo ()

        } else if (opcaoMenu === 2) {
            listaAbrigo()
            
        } else if (opcaoMenu === 3) {
            procurarAbrigo()

        } else if (opcaoMenu === 4) {
            const confirmar = prompt("Tem certeza que deseja sair ? Sim ( S ) ou Não ( N ) ")
            }
            return
        }
        menu()
}

    function cadastrarAbrigo () {
        const novo = []
        novo.nomeAbrigo = prompt("Qual é o nome do seu abrigo ?")
        novo.enderecoAbrigo = prompt("Qual é a cidade que reside seu abrigo ?")
        novo.telefoneAbrigo = Number(prompt("Qual é o número do telefone do abrigo ?"))
        novo.capacidadeAbrigo = Number(prompt("Qual é a capacidade de lotação do seu abrigo ?"))
        abrigos.push(novo)
        alert ("Abrigo cadastrado com sucesso")
    
        console.log(abrigos)
    }

    function listaAbrigo () {
        console.log('--------------------')
        console.log('LISTAGEM DE ABRIGOS:')
        console.log('--------------------')
        console.log('CÓDIGO|  NOME  |    ENDEREÇO     |  TELEFONE  | CAPACIDADE | CIDADE')
        for (let i = 0; i < abrigos.length; i++ ) {
            console.log(i+1,abrigos[i].nomeAbrigo,abrigos[i].enderecoAbrigo,abrigos[i].telefoneAbrigo,abrigos[i].capacidadeAbrigo,abrigos[i].cidade)
        }


    }

    function procurarAbrigo () {
        let cidadeUsuario = prompt("Qual cidade você está ?")
        console.log('--------------------')
        console.log('LISTAGEM DE ABRIGOS:')
        console.log('--------------------')
        console.log('CÓDIGO|  NOME  |    ENDEREÇO     |  TELEFONE  | CAPACIDADE | CIDADE')
        for (let i = 0; i < abrigos.length; i++) {
            if (cidadeUsuario.toLowerCase() === abrigos[i].cidade.toLowerCase()) {
                console.log(i+1,abrigos[i].nomeAbrigo,abrigos[i].enderecoAbrigo,abrigos[i].telefoneAbrigo,abrigos[i].capacidadeAbrigo,abrigos[i].cidade)
            }
        }
        
    }


menu()

