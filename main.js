const screen1 = document.querySelector(".screen1");
const screen2 =  document.querySelector(".screen2");
let card = document.querySelector('.card');
const openCookie = document.querySelector("#openCookie");
const openAnotherCookie = document.querySelector("#openAnotherCookie");

document.addEventListener('keydown', function(enter) {
    if(enter.key == 'Enter' && screen1.classList.contains('hide')) {
        toggleScreen()
    }
})

openCookie.addEventListener('click', function (event) {
    toggleScreen()
    event.preventDefault(screen2.classList.remove('hide'));

    const messages = [
        `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`,
        `Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.`,
        `A maior barreira para o sucesso é o medo do fracasso.`,
        `Realize o óbvio, pense no improvável e conquiste o impossível.`,
        `Sem o fogo do entusiasmo, não há o calor da vitória.`,
        `A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.`,
        `A maior de todas as torres começa no solo.`,
        `Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.`,
        `O insucesso é apenas uma oportunidade para recomeçar de novo com mais inteligência.`,
    ];

    const randomIndex = messages[Math.floor(Math.random() * messages.length)];
    let fortuneMessages = randomIndex;
    document.querySelector('.card');
    card.innerHTML = `<p>${fortuneMessages}</p>`;
    
})

openAnotherCookie.addEventListener('click', function() {
    toggleScreen()
})


function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}
