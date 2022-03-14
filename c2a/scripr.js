//alert("esta es una alerta")

//console.log(confirm("esta es una confirmacion"))

//let confirmacion =  confirm("¿estas seguro de aceptar esta confirmación")


//prompt("ingresa tu nombre completo")
//confirm("esta es una confirmacion")
/*
let a = parseInt("22");
let b = parseInt(prompt("Ingrese edad"));
let c = parseInt("22"+"150");
let d = parseInt(22+150)
let e = parseInt(22+parseInt("150"));
let f = parseInt(22.55);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


let nombre = prompt("ingresa nombre")
alert("bienvenido "+nombre);
let n1 = parseInt(prompt("ingresa numero 1"));
let n2 = parseInt(prompt("ingresa numero 2"));
let n3 = parseInt(prompt("ingresa numero 3"));
let promedio = (n1+n2+n3)/3;
*/
// juego piedra papel  tijera


/*
if(opcionUsario== 1){
    if(opcionMaquina==1){
        alert("empate");
    }
    else if(opcionMaquina==2){
        alert("perdiste");
    }
    else{
        alert("ganaste");
    }
} else if(opcionUsario==2){
    if(opcionMaquina==1){
        alert("ganaste");
    }
    else if(opcionMaquina==2){
        alert("empate");
    }
    else{
        alert("perdiste");
    }
} else if(opcionUsario==3){
    if(opcionMaquina==1){
        alert("perdiste");
    }
    else if(opcionMaquina==2){
        alert("ganaste");
    }
    else{
        alert("empate");
    }
} else{ 
    alert("opcion invalida");
}
*/
// piedra papel tijera



let acumuladorausuario = 0
let acumuladoramaquina = 0

do  {  
let opcionUsario = parseInt(prompt("ingresa opcion (piedra(1), papel(2) o tijera(3))"));
let opcionMaquina = Math.floor(Math.random()*3)+1;
    
switch (opcionUsario) {
    case 1:
        if(opcionMaquina==1){
            alert("empate");
        } else if(opcionMaquina==2){
            alert("perdiste");
            acumuladoramaquina++;
        } 
        else if(opcionMaquina==3){
            alert("ganaste");
            acumuladorausuario++;}
           
        
        break;
        case 2: 
            if(opcionMaquina==2){
                alert("empate");} else if (opcionMaquina==1){
                    alert("perdiste");
                acumuladoramaquina++;
                } else if(opcionMaquina==3){
                        alert("ganaste");
                    acumuladorausuario++;}
        break;

        case 3: 
            if(opcionMaquina==3){
                alert("empate");}       
                else if (opcionMaquina==1){
                    alert("perdiste");
                    acumuladoramaquina++;
                } else if(opcionMaquina==2){
                        alert("ganaste");
                    acumuladorausuario++;}
    default:
        break;
} console.log(acumuladoramaquina+ " "+ acumuladorausuario)} while (acumuladorausuario<3 && acumuladoramaquina<3) 


console.log("usuario: "+acumuladorausuario);
if(acumuladorausuario==3){
    alert("en este juego ganaste");
    
} else if(acumuladoramaquina==3){
    alert("en este juego perdiste");
}  