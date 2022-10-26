let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let pontos = 0 
let placar = 0 


let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')


let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')


let articleQuestoes = document.querySelector('.questoes')

let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : " What is artificial intelligence ?",
    alternativaA : " Intelligent behavior shown by machines",
    alternativaB : " The ability to view the world in three dimensions",
    alternativaC : " Related to the ability to control body movements",
    correta      : " Intelligent behavior shown by machines",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "What year was the first chatbot invented ?",
    alternativaA : "1960",
    alternativaB : "1961",
    alternativaC : "1997",
    correta      : "1961",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : " Which area is not linked to artificial intelligence ?",
    alternativaA : "Healthcare",
    alternativaB : "Education",
    alternativaC : "Mining",
    correta      : "Mining",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "What types of challenges artificial intelligence faces?",
    alternativaA : "Perform restricted tasks",
    alternativaB : "Improvement of self-driving cars",
    alternativaC : "Digitization of textbooks",
    correta      : "Perform restricted tasks",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "How does artificial intelligence work?",
    alternativaA : "They work by merging large interactive and intelligent processing algorithms",
    alternativaB : "Through graphs",
    alternativaC : "Through data flow analysis",
    correta      : "They work by merging large interactive and intelligent processing algorithms",
}


const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes


numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC


a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')


function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
   

    let certa = questoes[numeroDaQuestao].correta
    console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        
        pontos += 10 
    } else {
       
    }

  
    placar = pontos
    instrucoes.textContent = "Points " + placar

   
    bloquearAlternativas()

    setTimeout(function() {
       
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Game Over!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Game Over!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'points' : pont = 'points'

    pergunta.textContent   = "You Got " + pontos + " " + pont

    aviso.textContent = "You Got " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

   
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        location.reload();
    }, 2000)
}
