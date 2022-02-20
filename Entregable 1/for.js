console.log('Entregable 1: Ciclos');


let palabra = ''

for (let i =0; i<3; i=i+1){
    palabra = prompt('Adivine la palabra: P _ _ _ ')
    
    if (i<=2 && palabra=='POSE'){
        alert('Adivinaste!')
        break;
    }
    else if (i == 2){
        alert('Perdiste! La palabra es POSE');
        break;
    }  
}