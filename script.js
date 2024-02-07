const yesButton = document.getElementsByClassName('button_yes')[0];
const noButton = document.getElementsByClassName('button_no')[0];

document.getElementsByClassName('yes')[0].hidden = true; 

yesButton.onclick = function(){
    document.getElementsByClassName('cat_image')[0].hidden = true; 
    document.getElementsByClassName('yes')[0].hidden = false; 
}



