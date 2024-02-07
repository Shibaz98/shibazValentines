const yesButton = document.querySelector('.button_yes');
const noButton = document.querySelector('.button_no');
const noButton2 = document.querySelector('.button_no_2')


noButton2.hidden = true; 
document.querySelector('.yes_cat').hidden = true; 
document.querySelector('.no_cat').hidden = true; 
document.querySelector('.final_cat').hidden = true; 
document.getElementsByClassName('responses')[0].hidden = true;
document.getElementsByClassName('responses')[1].hidden = true;
document.getElementsByClassName('responses')[2].hidden = true;


yesButton.onclick = function(){
    document.querySelector('.cat_image').hidden = true; 
    document.querySelector('.yes_cat').hidden = false; 
    document.querySelector('.no_cat').hidden = true; 
    document.querySelector('.final_cat').hidden = true; 
    document.getElementsByClassName('responses')[0].hidden = false;
    document.getElementsByClassName('responses')[1].hidden = true;
    document.getElementsByClassName('responses')[2].hidden = true;
    noButton2.hidden = true; 
    noButton.hidden = false; 
     

}

noButton.onclick = function(){
    document.querySelector('.cat_image').hidden= true;
    document.querySelector('.no_cat').hidden = false;
    document.querySelector('.yes_cat').hidden = true;
    document.querySelector('.final_cat').hidden = true; 
    document.getElementsByClassName('responses')[0].hidden = true;
    document.getElementsByClassName('responses')[1].hidden = false;
    document.getElementsByClassName('responses')[2].hidden = true;
    noButton2.hidden = false;
    noButton.hidden = true; 
}

noButton2.onclick = function(){
    document.getElementsByClassName('responses')[2].hidden = false;
    document.getElementsByClassName('responses')[1].hidden = true;
    document.querySelector('.final_cat').hidden = false; 
    document.querySelector('.no_cat').hidden = true; 
    
}


