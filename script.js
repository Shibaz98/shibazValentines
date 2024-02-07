const yesButton = document.querySelector('.button_yes');
const noButton = document.querySelector('.button_no');

document.querySelector('.yes_cat').hidden = true; 

yesButton.onclick = function(){
    document.querySelector('.cat_image').hidden = true; 
    document.querySelector('.yes_cat').hidden = false; 
}



