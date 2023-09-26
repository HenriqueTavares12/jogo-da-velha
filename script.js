let buttons = document.querySelectorAll('.buttons');
let boxes = document.querySelectorAll('.box');
let x = document.querySelector('.x');
let o = document.querySelector('.o');
let containerMensagem = document.querySelector('#container-mensagem');
let textoMensagem = document.querySelector('#container-mensagem p');
// contador de jogadas
let jogador1 = 0;
let jogador2 = 0;


// evendo de clique nas boxes
for(let i = 0; i < boxes.length; i++ ){
    boxes[i].addEventListener('click', function(){

        let elemento = checarJogada(jogador1, jogador2);

        if(this.childNodes.length == 0){
            let clonarElemento = elemento.cloneNode(true);
            this.appendChild(clonarElemento);

            if(jogador1 == jogador2){
                jogador1++;
            }else{
                jogador2++;
            }
           
            verificarGanhador();
        }
       
    });
}

/* iniciar o jogo*/
for(let i = 0; i < buttons.length; i++){
       buttons[i].addEventListener("click", function(){

        setTimeout(function (){
            let cerquilha = document.querySelector("#cerquilha");
            cerquilha.classList.remove('hide');
        },500)

       });

}


// verifica de quem é a jogada atual
function checarJogada(jogador1, jogador2){
    if(jogador1 == jogador2){
        elemento = x;
    }else{
        elemento = o;
    }
    return elemento;
}

function verificarGanhador(){
    let box1 = document.querySelector('#box-1');
    let box2 = document.querySelector('#box-2');
    let box3 = document.querySelector('#box-3');
    let box4 = document.querySelector('#box-4');
    let box5 = document.querySelector('#box-5');
    let box6 = document.querySelector('#box-6');
    let box7 = document.querySelector('#box-7');
    let box8 = document.querySelector('#box-8');
    let box9 = document.querySelector('#box-9');

    /* verifica 1 linha horizontal */
    if(box1.childNodes.length > 0 && box2.childNodes.length > 0 && box3.childNodes.length > 0){

        if(box1.childNodes[0].className == 'x' && box2.childNodes[0].className == 'x' && box3.childNodes[0].className == 'x'){
            declararGanhador('x');
        }else if(box1.childNodes[0].className == 'o' && box2.childNodes[0].className == 'o' && box3.childNodes[0].className == 'o'){
            declararGanhador('o');
        }        
    }

    /* verifica 2 linha horizontal*/
    if(box4.childNodes.length > 0 && box5.childNodes.length > 0 && box6.childNodes.length > 0){

        if(box4.childNodes[0].className == 'x' && box5.childNodes[0].className == 'x' && box6.childNodes[0].className == 'x'){
            declararGanhador('x');
        }else if(box4.childNodes[0].className == 'o' && box5.childNodes[0].className == 'o' && box6.childNodes[0].className == 'o'){
            declararGanhador('o');
        }        
    }

    /* verifica 3 linha horizontal*/
    if(box7.childNodes.length > 0 && box8.childNodes.length > 0 && box9.childNodes.length > 0){

        if(box7.childNodes[0].className == 'x' && box8.childNodes[0].className == 'x' && box9.childNodes[0].className == 'x'){
            declararGanhador('x');
        }else if(box7.childNodes[0].className == 'o' && box8.childNodes[0].className == 'o' && box9.childNodes[0].className == 'o'){
            declararGanhador('o');
        }        
    }

    /* verifica 1 fileira vertical*/
    if(box1.childNodes.length > 0 && box4.childNodes.length > 0 && box7.childNodes.length > 0){

        if(box1.childNodes[0].className == 'x' && box4.childNodes[0].className == 'x' && box7.childNodes[0].className == 'x'){
            declararGanhador('x');
        }else if(box1.childNodes[0].className == 'o' && box4.childNodes[0].className == 'o' && box7.childNodes[0].className == 'o'){
            declararGanhador('o');
        }        
    }

    /* verifica 2 fileira vertical*/
    if(box2.childNodes.length > 0 && box5.childNodes.length > 0 && box8.childNodes.length > 0){

        if(box2.childNodes[0].className == 'x' && box5.childNodes[0].className == 'x' && box8.childNodes[0].className == 'x'){
            declararGanhador('x');
        }else if(box2.childNodes[0].className == 'o' && box5.childNodes[0].className == 'o' && box8.childNodes[0].className == 'o'){
            declararGanhador('o');
        }        
    }

    /* verifica 3 fileira vertical*/
    if(box3.childNodes.length > 0 && box6.childNodes.length > 0 && box9.childNodes.length > 0){

        if(box3.childNodes[0].className == 'x' && box6.childNodes[0].className == 'x' && box9.childNodes[0].className == 'x'){
            declararGanhador('x');
        }else if(box3.childNodes[0].className == 'o' && box6.childNodes[0].className == 'o' && box9.childNodes[0].className == 'o'){
            declararGanhador('o');
        }        
    }

    /* verifica diagonal 1*/
    if(box1.childNodes.length > 0 && box5.childNodes.length > 0 && box9.childNodes.length > 0){

        if(box1.childNodes[0].className == 'x' && box5.childNodes[0].className == 'x' && box9.childNodes[0].className == 'x'){
            declararGanhador('x');
        }else if(box1.childNodes[0].className == 'o' && box5.childNodes[0].className == 'o' && box9.childNodes[0].className == 'o'){
            declararGanhador('o');
        }        
    }

     /* verifica diagonal 2*/
     if(box3.childNodes.length > 0 && box5.childNodes.length > 0 && box7.childNodes.length > 0){

        if(box3.childNodes[0].className == 'x' && box5.childNodes[0].className == 'x' && box7.childNodes[0].className == 'x'){
            declararGanhador('x');
        }else if(box3.childNodes[0].className == 'o' && box5.childNodes[0].className == 'o' && box7.childNodes[0].className == 'o'){
            declararGanhador('o');
        }        
    }

    /* deu velha*/
    let contador = 0;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            contador++;
        } 

        if(contador == 9){
            declararGanhador('Deu Velha');
        }

    }
}

/** Limpa o jogo e declara o vencedor e atualiza o placar */
function declararGanhador(ganhador){

    let pontuacaoX = document.querySelector('#pontuacao-jogador-x');
    let pontuacaoO = document.querySelector('#pontuacao-jogador-o');
    let msg = ''
    if(ganhador == 'x'){
        msg = "Jogador X venceu!";
        pontuacaoX.textContent = parseInt(pontuacaoX.textContent) + 1;
    }else if(ganhador == 'o'){
        msg = "Jogador O venceu!";
        pontuacaoO.textContent = parseInt(pontuacaoO.textContent) + 1;
    }else{
        msg = "Deu velha!";
    }

    /** Exibe a mensagem */
    textoMensagem.innerHTML = msg;
    containerMensagem.setAttribute("data-animation","aparecer");
    containerMensagem.classList.remove('hide');

    setTimeout(function(){
        containerMensagem.classList.add('hide');
    },2500);

    // zerar jogadas
    jogador1 = 0;
    jogador2 = 0;

    // remover icones X e O do jogo
    let boxesToRemove = document.querySelectorAll('.box div');
    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}







