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
        nome: "Sobrancheila",
        imagem: "../IMG/IMG PETS/pet1.jpg",
        idade: "2 meses",
        raca: "SRD",
        cor: "Branca",
        personalidade: "Fofa e expressiva",
        canil: "Canil Amor Animal"
    },
    2: {
        nome: "Chupetão",
        imagem: "../IMG/IMG PETS/pet2.jpg",
        idade: "3 anos",
        raca: "Pastor Alemão",
        cor: "Bicolor",
        personalidade: "Brincalhão e Dengoso",
        canil: "Canil Vida Pet"
    },
    3: {
        nome: "Belle",
        imagem: "../IMG/IMG PETS/pet3.jpg",
        idade: "4 anos",
        raca: "SRD",
        cor: "Caramelo",
        personalidade: "Calma e carinhosa",
        canil: "Canil Patinhas Felizes"
    },
    4: {
        nome: "Django ",
        imagem: "../IMG/IMG PETS/pet4.jpg",
        idade: "13 anos",
        raca: "SRD",
        cor: "Cinza",
        personalidade: "Brincalhão e sorridente",
        canil: "Canil Guardiões Pet"
    },
    5: {
        nome: "Tabby",
        imagem: "../IMG/IMG PETS/pet5.png",
        idade: "1 mês",
        raca: "SRD",
        cor: "Laranja",
        personalidade: "Dramatico",
        canil: "Canil Pequenos Amigos"
    },
    6: {
        nome: "Salada",
        imagem: "../IMG/IMG PETS/pet6.jpg",
        idade: "12 anos",
        raca: "SRD",
        cor: "Branco",
        personalidade: "Tímido, dócil e antissocial com visitas",
        canil: "Canil Amor Animal"
    },
    7: {
        nome: "Encarador",
        imagem: "../IMG/IMG PETS/pet7.jpg",
        idade: "4 anos",
        raca: "SRD",
        cor: "Rajado",
        personalidade: "Ativo e desconfiado",
        canil: "Canil Vida Pet"
    },
    8: {
        nome: "Milka",
        imagem: "../IMG/IMG PETS/pet8.jpg",
        idade: "2 meses",
        raca: "SRD",
        cor: "Preta",
        personalidade: "Calma e desastrada",
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
