// let numeros = [1,2,3,7,1,-1,-2,0,-9,-10];
// let numeros = [1,2,3,4,5,6,7,8,9,10];

// let numPositivos = 0;
// let numNegativos = 0;
// let ceros = 0;

// numeros.forEach(numero => {
//   if (numero < 0) numNegativos++;
//   if (numero == 0) ceros++;
//   if (0 < numero) numPositivos++;
// });

// const numNegativos = numeros.filter(numero => numero < 0).length;
// const ceros = numeros.filter(numero => numero === 0).length;
// const numPositivos = numeros.filter(numero => numero > 0).length;

// console.log('Positivos: ', numPositivos)
// console.log('Negativos: ', numNegativos)
// console.log('Ceros: ', ceros)

// let max = numeros[0];
// let min = numeros[numeros.length-1];

// numeros.forEach(numero => {
//   if (max < numero) max = numero;
//   if (numero < min) min = numero;
// })

// console.log('Valor maximo: ', max);
// console.log('Valor minimo: ', min);

$(document).ready(function(){
  $('#formulario').submit(function(e){
    e.preventDefault();

    let numeros = [
      $('#inputNumero0').val(),
      $('#inputNumero1').val(),
      $('#inputNumero2').val(),
      $('#inputNumero3').val(),
      $('#inputNumero4').val(),
      $('#inputNumero5').val(),
      $('#inputNumero6').val(),
      $('#inputNumero7').val(),
      $('#inputNumero8').val(),
      $('#inputNumero9').val(),
    ];
    
    const numNegativos = numeros.filter(numero => numero < 0).length;
    const ceros = numeros.filter(numero => numero == 0).length;
    const numPositivos = numeros.filter(numero => numero > 0).length;

    conteo_numeros(numNegativos, ceros, numPositivos);

  })
})

function conteo_numeros(numNegativos, ceros, numPositivos) {
  let divConteoNumeros = $("#conteo-numeros");
  let newDiv = $("<div>").addClass("cart-item");

  let cardContent = `
    <div class="card">
      <div class="card-body">
          <p class="card-text">Conteo de Números</p>
          <p class="card-text">Negativos:  ${numNegativos}</p>
          <p class="card-text">Ceros:  ${ceros}</p>
          <p class="card-text">Positivos:  ${numPositivos}</p>
      </div>
    </div>
  `;

  newDiv.html(cardContent);

  divConteoNumeros.append(newDiv);

}