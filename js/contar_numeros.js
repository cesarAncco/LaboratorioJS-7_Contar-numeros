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

  $(`#botonEnviar`).prop('disabled', true);

}