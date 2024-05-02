function salvarProfessor() {
    localStorage.nome = document.getElementById('nome').value
    localStorage.img = document.getElementById('img').value
    localStorage.numero = document.getElementById('whatsapp').value
    localStorage.biografia = document.getElementById('biografia').value
    localStorage.materia = document.getElementById('materia').value
    localStorage.dinheiro = document.getElementById('dinheiro').value
    localStorage.semana = document.getElementById('semana').value
    localStorage.timeComeco = document.getElementById('timeComeco').value
    localStorage.timeFim = document.getElementById('timeFim').value

    const novoProfessor = `<div class="profs">
    <div class="parteFotoENome">
        <img src="${localStorage.img}" alt="${localStorage.nome}" class="fotoProfs">
        <div class="profsNome">
            <h2 class="nomeDoProfs">${localStorage.nome}</h2>
            <p class="materiaDoProfs">${localStorage.materia}</p>
        </div>
    </div>
    <div class="parteTexto">
        <p class="texto1">${localStorage.biografia}</p>
        
    </div>
    <div class="parteBotaoEPreco">
        <div class="parteDoPrecoPorHora">
            <p class="precoHora">Preço/hora</p>
            <p class="preco">${localStorage.dinheiro}</p>
        </div>
        <button class="botao"><img src="/img/Whatsapp.png" alt="Whatsapp"> Entrar em contato</button>
    </div>
</div>`;
document.getElementById('main').innerHTML += novoProfessor;
}
const novoProfessor = `<div class="profs">
    <div class="parteFotoENome">
        <img src="${localStorage.img}" alt="${localStorage.nome}" class="fotoProfs">
        <div class="profsNome">
            <h2 class="nomeDoProfs">${localStorage.nome}</h2>
            <p class="materiaDoProfs">${localStorage.materia}</p>
        </div>
    </div>
    <div class="parteTexto">
        <p class="texto1">${localStorage.biografia}</p>
        
    </div>
    <div class="parteBotaoEPreco">
        <div class="parteDoPrecoPorHora">
            <p class="precoHora">Preço/hora</p>
            <p class="preco">${localStorage.dinheiro}</p>
        </div>
        <button class="botao"><img src="/img/Whatsapp.png" alt="Whatsapp"> Entrar em contato</button>
    </div>
</div>`;



document.getElementById('main').innerHTML += novoProfessor;


const profs1 = {
    foto: '/img/Mayk.png',
    nome: 'Mayk Brito',
    materia: 'Educação Física',
    texto1: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.',
    texto2: 'Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"',
    preco: 'R$ 360,00'
};

const profs2 = {
    foto: '/img/Diego.png', 
    nome: 'Diego Fernandes',
    materia: 'Química',
    texto1: 'Entusiasta das melhores tecnologias de química avançada.',
    texto2: 'Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    preco: 'R$ 20,00'
};

const profs3 = {
    foto: '/img/Euzasso.png',
    nome: 'Tiago Luchtenberg',
    materia: 'Geografia',
    texto1: 'As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.',
    texto2: 'Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.',
    preco: 'R$ 360,00'
};

 const todosOsProfs = [profs1, profs2, profs3];

 for (let i = 0; i < todosOsProfs.length; i++){
    const parteDosProfs = 
        `
        <div class="profs">
        <div class="parteFotoENome">
            <img src="${todosOsProfs[i].foto}" alt="${todosOsProfs[i].nome}" class="fotoProfs">
            <div class="profsNome">
                <h2 class="nomeDoProfs">${todosOsProfs[i].nome}</h2>
                <p class="materiaDoProfs">${todosOsProfs[i].materia}</p>
            </div>
        </div>
        <div class="parteTexto">
            <p class="texto1">${todosOsProfs[i].texto1}</p>
            <p class="texto2">${todosOsProfs[i].texto2}</p>
        </div>
        <div class="parteBotaoEPreco">
            <div class="parteDoPrecoPorHora">
                <p class="precoHora">Preço/hora</p>
                <p class="preco">${todosOsProfs[i].preco}</p>
            </div>
            <button class="botao"><img src="/img/Whatsapp.png" alt="Whatsapp"> Entrar em contato</button>
        </div>
    </div>`;

    document.getElementById('main').innerHTML += parteDosProfs;
 }