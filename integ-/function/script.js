const select= document.querySelector('select');
const paragraphe=document.querySelector('p');

select.addEventListener('change', setsection);
function setsection(e){
    
    const reponse= e.target.value;;

    if(reponse==='sambava'){
        paragraphe.textContent="ici c'est sambava";
    }else if(reponse==='andapa'){
        paragraphe.textContent="ici c'est andapa";
    }else if(reponse==='antalaha'){
        paragraphe.textContent="ici c'est antalaha";
    }else if(reponse==='vohemara'){
        paragraphe.textContent="ici c'est vohemara";
    }else{
        paragraphe.textContent="Tu n'es qu'une pute";
    }
}
