

let letras = ["a", "e", "i", "o", "u"];
let encript = ["enter", "imes", "ai", "ober", "ufat"];
let u=0;


function cambio() {
    let resultadoCompletado = document.getElementById('resultado-completado');
    let resultadoVacio = document.getElementById('resultado-vacio');

    if (resultadoCompletado.style.display === 'none' || resultadoCompletado.style.display === '') {
        resultadoCompletado.style.display = 'block'; // Muestra el div de resultado completado
        resultadoVacio.style.display = 'none'; // Oculta el div de resultado vacío
    } else {
        resultadoCompletado.style.display = 'none'; // Oculta el div de resultado completado
        resultadoVacio.style.display = 'block'; // Muestra el div de resultado vacío
    }
}


function mostrar(texto) {
    let parrafo = document.getElementById('textoResultado');
 
    parrafo.innerHTML = texto;
    
}

function limpiar(){
    let palabra=document.getElementById('valorUsuario');
    let parrafo = document.getElementById('textoResultado');
    palabra.value='';//para input o textarea
    parrafo.innerHTML='';
    cambio(); 
}

function encriptar(){
    let palabra = [];
    let valor = document.getElementById('valorUsuario').value;
console.log('Valor ingresado:', valor);
console.log('Valor ingresado:', valor);
    for (let i = 0; i < valor.length; i++) {
        let reemplazo=false;
        while (u<letras.length){
            if(valor[i]===letras[u]){
                palabra.push(encript[u]);
                reemplazo=true;
            break;
            }
            u++;
        
        }
        if(reemplazo!=true){
             palabra.push(valor[i]);
        }
        u=0;
  }    

console.log('Texto encriptado:', palabra.join(''));
  cambio();   
  mostrar(palabra.join(''));
}
   
function desencriptar(){
    let palabra = [];
    let valor = document.getElementById('valorUsuario').value;
console.log('Valor ingresado:', valor);
    for (let i = 0; i < valor.length; i++) {
        let reemplazo=false;
        while (u<encript.length){

            if(valor.substring(i, i + encript[u].length) === encript[u]){ 
                palabra.push(letras[u]);
                i += encript[u].length - 1; 
                reemplazo=true;
            break;
            }
            u++;
        
        }
        if(reemplazo!=true){
             palabra.push(valor[i]);
        }
        u=0;
  }    
  cambio();   
  mostrar(palabra);
  
}

function copiarTexto(idElemento){
    const textoElemento = document.getElementById(idElemento);

    navigator.clipboard.writeText(texto.Elemento.textContent)
    .catch(function(err){
        console.error('Error al copiar el texto:',err);
    });
}
 








