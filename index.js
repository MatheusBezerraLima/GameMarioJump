
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const nuvem = document.querySelector('.nuvens')
const lua = document.querySelector('.lua')
const sol = document.querySelector('.sol')
const fundo = document.querySelector('.container') 
var Teste = 0

const Pular = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')

    }, 500);
}

document.addEventListener('keydown', Pular)

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const positionClouds =  nuvem.offsetLeft
    const positionSol =  sol.offsetLeft
    const positionLua =  lua.offsetLeft
    const backFundo = window.getComputedStyle(fundo).background


    if(pipePosition <= 120 && marioPosition < 100 && pipePosition > 0){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'img/game-over.png'
        mario.style.width = '60px'
        mario.style.left = '50px'
        
        nuvem.style.animation = 'none'
        nuvem.style.left  = `${positionClouds}px`

        sol.style.animation = 'none'
        sol.style.left = `${positionSol}px`

        lua.style.animation = 'none'
        lua.style.left = `${positionLua}px`

        fundo.style.background = `${backFundo}`
        fundo.style.animation = 'none'
        
        Teste = 1
    }

}, 10)
console.log(loop)

const moverSol = () => {

    if(Teste === 0){
    sol.style.visibility = 'visible';
    sol.classList.add('sol-move');
    fundo.classList.remove('fundo-noite')
    fundo.classList.add('fundo-dia')

    lua.style.visibility = 'hidden';
    lua.classList.remove('aparecer');
  
    setTimeout(() => {
      sol.style.visibility = 'hidden';
      sol.classList.remove('sol-move');

      lua.style.visibility = 'visible';
      lua.classList.add('aparecer');

      fundo.classList.remove('fundo-dia')
      fundo.classList.add('fundo-noite')

  
      setTimeout(moverSol, 90000);
    }, 90000);
    }

  };
  
  moverSol(); // inicializa o loop
