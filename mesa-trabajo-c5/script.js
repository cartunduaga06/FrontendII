
let h2 = document.querySelector("h2");
let item1 = document.getElementsByClassName("item");


if(window.confirm("¿Quieres que la pagina sea oscura?")){
    
    document.body.classList.add("bodydark");
    h2.classList.add("a");
    for(item of item1){
        item.classList.add("b");
        item.classList.add("c");
    }
    
    
}

