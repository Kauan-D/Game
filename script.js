let numSec = Math.floor(Math.random() * 10) + 1;
console.log(numSec);

let acerto = document.getElementById("acertou");
let erro = document.getElementById("erro");
let alarm = document.getElementById("alarm")

function start() {
 
    document.getElementById("batata").innerText = "Aguardando resultado...";
    document.getElementById("mine").src = "https://i.gifer.com/ZKZg.gif";
    alarm.currentTime = 0;
    alarm.play();

    setTimeout(verificarResultado, 20000);
    
}

function reset() {
    window.location.reload();
}

function verificarResultado() {

let palpite = parseInt(document.getElementById("palpite").value);

if(numSec == palpite){
    document.getElementById("batata").innerText = "Parabens você NÂO errou :>";
    document.getElementById("mine").src = "https://img.freepik.com/fotos-premium/silhueta-de-um-homem-vencedor-segurando-o-premio-da-taca-do-trofeu-de-ouro_10139-262.jpg?semt=ais_hybrid&w=740&q=80";
    acertou.currentTime = 0;
    acertou.play();
} else{
    document.getElementById("batata").innerText = "Oh não, vocè NÃO acertou";
    document.getElementById("mine").src = "https://media.tenor.com/YFrCvyOskn8AAAAC/mario-mario-depressed.gif";
    erro.currentTime = 0;
    erro.play()
}
}