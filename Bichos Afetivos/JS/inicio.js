// Função responsável por mostrar ou esconder o menu lateral
function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    menu.classList.toggle("hidden");
}

// Redireciona para a página com todos os pets disponíveis
function verMais() {
    window.location.href = "PETS/pets.html";
}

// Redireciona para a página de detalhes de um pet
function abrirPet() {
    window.location.href = "PETS/pet.html";
}

// Redireciona para o formulário de adoção
function adotar() {
    window.location.href = "form.html";
}

function abrirPet(id) {
    window.location.href = "PETS/pet.html?id=" + id;
}


// pega os parâmetros da URL (ex: ?id=1)
const params = new URLSearchParams(window.location.search);

// pega o id
const id = params.get("id");

// elementos do HTML
const nome = document.getElementById("nome");
const imagem = document.getElementById("imagem");
const descricao = document.getElementById("descricao");
const canil = document.getElementById("canil");

// "banco de dados" dos pets
const pets = {
    1: {
        nome: "Daisy",
        imagem: "IMG/dog.png",
        idade: "3 anos",
        raca: "SRD",
        cor: "Preto",
        personalidade: "Fofa e teimosa",
        canil: "Canil Amor Animal"
    },
    2: {
        nome: "Max",
        imagem: "IMG/dog.png",
        idade: "2 anos",
        raca: "SRD",
        cor: "Marrom",
        personalidade: "Brincalhão e energético",
        canil: "Canil Vida Pet"
    },
    3: {
        nome: "Luna",
        imagem: "IMG/dog.png",
        idade: "4 anos",
        raca: "SRD",
        cor: "Branco",
        personalidade: "Calma e carinhosa",
        canil: "Canil Patinhas Felizes"
    },
    4: {
        nome: "Thor",
        imagem: "IMG/dog.png",
        idade: "5 anos",
        raca: "SRD",
        cor: "Cinza",
        personalidade: "Protetor e forte",
        canil: "Canil Guardiões Pet"
    },
    5: {
        nome: "Leoncio Matolonio",
        imagem: "../IMG/IMG PETS/pet5.png",
        idade: "1 mês",
        raca: "SRD",
        cor: "Bege",
        personalidade: "Pequeno e curioso",
        canil: "Canil Pequenos Amigos"
    },
    6: {
        nome: "Bob",
        imagem: "../IMG/IMG PETS/pet6.png",
        idade: "3 anos",
        raca: "SRD",
        cor: "Preto e branco",
        personalidade: "Alegre e amigável",
        canil: "Canil Amor Animal"
    },
    7: {
        nome: "Nina",
        imagem: "../IMG/IMG PETS/pet7.png",
        idade: "2 anos",
        raca: "SRD",
        cor: "Caramelo",
        personalidade: "Carinhosa e dócil",
        canil: "Canil Vida Pet"
    },
    8: {
        nome: "Luke",
        imagem: "../IMG/IMG PETS/pet8.png",
        idade: "4 anos",
        raca: "SRD",
        cor: "Marrom escuro",
        personalidade: "Inteligente e curioso",
        canil: "Canil Patinhas Felizes"
    }
};

// pega o pet pelo id
const pet = pets[id];

// verifica se existe
if (pet && nome && imagem && descricao && canil) {

    nome.innerText = pet.nome;
    imagem.src = pet.imagem;

    descricao.innerText =
        "Idade: " + pet.idade + "\n" +
        "Raça: " + pet.raca + "\n" +
        "Cor: " + pet.cor + "\n" +
        "Personalidade: " + pet.personalidade;

    canil.innerText = "Canil Responsável: " + pet.canil;

} else if (nome) {
    nome.innerText = "Pet não encontrado";
}