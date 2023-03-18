let procurar = document.querySelector('#procurar');

procurar.addEventListener('input',() => {
    let names = document.querySelectorAll('.nomeDoPokemon');
    let procura = new RegExp(procurar.value , 'i')
   names.forEach(element => {
    if(!procura.test(element.innerHTML)){
        element.parentElement.style.display = 'none';
    }
    else{
        element.parentElement.style.display = 'flex';
    }
   });
})