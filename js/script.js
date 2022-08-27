const nom = document.getElementById('nombre');
const apel = document.getElementById('apellido');
const tel = document.getElementById('telefono');
const cdl = document.getElementById('cedula');
const mont = document.getElementById('monto');
const cam = document.getElementById('cambio');
const dolar = document.getElementById('dolar');
const pago = document.getElementById('pago');
const vuelto = document.getElementById('vuelto');

facturas = [];



  
const validarMonto = () => {
    if(mont.value.length >= 8){
        document.getElementById('id').style.display = 'block';
    }else{
        document.getElementById('id').style.display = 'none';
    }
}

const valorMaximo = () => {
    let maximo = 0;
    for(let index of facturas){
        if(index.monto > maximo){
            maximo = index.monto;
            console.log("valor maximo: "+ maximo);
            console.log(typeof(maximo));
        }
    }

    return maximo;

}

const valoresTotales = () => {
    let most = '';
    let totalDolar = 0;
    let totalPeso = 0;
    let maximo = valorMaximo();
    for(let indece of facturas){
        totalDolar += indece.cambio;
        totalPeso += indece.monto;
        if(indece.monto == maximo){
            most = ` <div id="valores">
                        <ul class="list-group mb-1 mt-5" id="valores">
                        <li class="list-group-item active " aria-current="true">Transaccion</li>
                        <li class="list-group-item">Nombre: ${indece.nombre}</li>
                        <li class="list-group-item">Rut: ${indece.cedula}</li>
                        <li class="list-group-item">Cambio: $ ${indece.cambio}</li>
                        <li class="list-group-item active">VALORES TOTALES</li>
                        <li class="list-group-item">Total Dolar: $ ${totalDolar.toFixed(2)}</li>
                        <li class="list-group-item">Total Pesos: $ ${totalPeso}</li>
                        <li class="list-group-item" id="contador">Total Ventas: </li>
                        </ul>
                 </div>`;

            
        }
    }

    document.getElementById('valores').innerHTML = most;

}

   



const addFactura = () => {
    if(nom.value != '' && apel.value != '' && tel.value != '' && cdl.value != '' &&
    mont.value != '' && cam.value != '' && dolar.value != '' && pago.value != '' && vuelto.value != '') {

        facturas.push(new Factura(nom.value, apel.value, tel.value, cdl.value, +mont.value, +cam.value,
            +dolar.value, +pago.value, +vuelto.value));
            mensajeExito('Datos enviando con exito');
            console.log(facturas)
            
            

    }else{
        mensajeError('Debe completar todo los datos');
        
    }
    
    
    showFactura();
    resetForm();
    valoresTotales();
   
}



const showFactura = () => {
    let most = '';
    for(let index of facturas){
        most += `<div class="col-6">
                    <ul class="list-group mb-1">
                        <li class="list-group-item active " aria-current="true">Transaccion N° ${index.id}</li>
                        <li class="list-group-item">Nombre:  ${index.nombre}</li>
                        <li class="list-group-item">Apellido  ${index.apellido}</li>
                        <li class="list-group-item">Rut:  ${index.cedula}</li>
                        <li class="list-group-item">Telefono:  ${index.telefono}</li>
                        <li class="list-group-item">Monto: $ ${index.monto}</li>
                        <li class="list-group-item">Cambio:$ ${index.cambio}</li>
                        <li class="list-group-item">Precio Dolar: $ ${index.dolar}</li>
                        <li class="list-group-item">Pago: $ ${index.pago}</li>
                        <li class="list-group-item">Vuelto: $ ${index.vuelto}</li>
                        <li class="list-group-item">Fecha: ${index.fecha}</li>
                        <li class="list-group-item"><button class="btn btn-danger" onclick="deleteFactura(${index.id})" >Eliminar</button></li>
                    </ul>
                </div>`;
    }

    document.getElementById('show').innerHTML = most;
}


const deleteFactura = (id) => {
    let deleteF = facturas.findIndex(index => index.id === id);
    facturas.splice(deleteF,1);

    showFactura();
    valoresTotales();
}


const onfocuzz = () => {
    let vuelt = 0;
    vuelt = pago.value - mont.value;
    vuelto.value = vuelt;
    
}



const changeToDolar = () => {
    let most = mont.value;
    console.log(most);
    let camb =  most / dolar.value;
     cam.value =  camb.toFixed(2);
}


const resetForm = () => {
nom.value = '';
nom.focus();
apel.value = '';
tel.value = '';
cdl.value = '';
mont.value = '';
cam.value = '';
dolar.value = '';
pago.value = '';
vuelto.value = '';
}

const mensajeExito = (message) => {
    let paraf = document.createElement('p');
    let text = document.createTextNode(message);
    paraf.appendChild(text);

    let div = document.getElementById('text');
    div.appendChild(paraf);
    div.style.background = '#d4edda';
    div.style.textAlign = 'center';
    div.style.color = '#155724';
    div.style.fontSize = '20px';
    div.style.borderRadius = '5px';

    setTimeout( f = () => {
        document.getElementById('text').removeChild(paraf);
    }, 2000);
}


const mensajeError = (message) => {
    let paraf = document.createElement('p');
    let text = document.createTextNode(message);
    paraf.appendChild(text);

    let div = document.getElementById('text');
    div.appendChild(paraf);
    div.style.background = '#f8d7da';
    div.style.textAlign = 'center';
    div.style.color = '#721c24';
    div.style.fontSize = '20px';
    div.style.borderRadius = '5px';

    setTimeout( f = () => {
        document.getElementById('text').removeChild(paraf);
    }, 2000);
}

const mensajeError1 = (message) => {
    let paraf = document.createElement('p');
    let text = document.createTextNode(message);
    paraf.appendChild(text);

    let div = document.getElementById('text3');
    div.appendChild(paraf);
    div.style.textAlign = 'center';
    div.style.color = 'red';
   /* setTimeout( f = () => {
        document.getElementById('text3').removeChild(paraf);
    }, 2000);*/
}




const numeroVolteado = (numer) => {
    var word = String(numer);
    var array = [];
    console.log(word);
    for(let i = 0; i < word.length; i++){
        array[i] = word[i];
    }
    array.reverse();
    let numeroVolteado = array.join("");
    numeroVolteado =  parseInt(numeroVolteado);

    return numeroVolteado;
}


console.log(numeroVolteado(561));

let i = 1000000;
console.log(i * 15);
