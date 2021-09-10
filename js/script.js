const input = document.querySelector('.age_checker');
const button = document.querySelector('.send');
let text = document.querySelector('.acces_text');
let image = document.querySelector('.acces_img');
let link = document.querySelector('a');

button.addEventListener('click', acces);
function acces(){
    let Value = input.value;
    if (+Value){
        if (+Value >= 18){
            text.innerText = 
            'Перевірку пройдено!';
            image.src = 
            'img/check.svg';
            link.className = 'a_active';
        } else{
            text.innerText = 
            'Перевірку не пройдено!';
            image.src = 
            'img/close.svg';
            link.className = '';
        }
        input.value = '';
    } else{
        text.innerText = 
        'Введіть число!';
        input.value = '';
        image.src = 
        'img/close.svg';
        link.className = '';
    }
}