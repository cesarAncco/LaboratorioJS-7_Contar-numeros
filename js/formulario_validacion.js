$(document).ready(function () {

  $(`#botonEnviar`).prop('disabled', true);

  const expresiones = {
    inputNumero0: /[0-9]$/,
    inputNumero1: /[0-9]$/,
    inputNumero2: /[0-9]$/,
    inputNumero3: /[0-9]$/,
    inputNumero4: /[0-9]$/,
    inputNumero5: /[0-9]$/,
    inputNumero6: /[0-9]$/,
    inputNumero7: /[0-9]$/,
    inputNumero8: /[0-9]$/,
    inputNumero9: /[0-9]$/
  };

  const campos = {
    inputNumero0: false,
    inputNumero1: false,
    inputNumero2: false,
    inputNumero3: false,
    inputNumero4: false,
    inputNumero5: false,
    inputNumero6: false,
    inputNumero7: false,
    inputNumero8: false,
    inputNumero9: false,
  };

  const validarCampo = (expresion, input, campo) => {
    if (expresion.test($(input).val())) {
      $(`#${campo}`).addClass("is-valid").removeClass("is-invalid");
      campos[campo] = true;
    } else {
      $(`#${campo}`).addClass("is-invalid").removeClass("is-valid");
      campos[campo] = false;
    }
  };

  const validarFormulario = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = $(target).attr("name");

    switch (name) {
      case "inputNumero0":
        validarCampo(expresiones.inputNumero0, target, "inputNumero0");
        break;
      case "inputNumero1":
        validarCampo(expresiones.inputNumero1, target, "inputNumero1");
        break;
      case "inputNumero2":
        validarCampo(expresiones.inputNumero2, target, "inputNumero2");
        break;
      case "inputNumero3":
        validarCampo(expresiones.inputNumero3, target, "inputNumero3");
        break;
      case "inputNumero4":
        validarCampo(expresiones.inputNumero4, target, "inputNumero4");
        break;
      case "inputNumero5":
        validarCampo(expresiones.inputNumero5, target, "inputNumero5");
        break;
      case "inputNumero6":
        validarCampo(expresiones.inputNumero6, target, "inputNumero6");
        break;
      case "inputNumero7":
        validarCampo(expresiones.inputNumero7, target, "inputNumero7");
        break;
      case "inputNumero8":
        validarCampo(expresiones.inputNumero8, target, "inputNumero8");
        break;
      case "inputNumero9":
        validarCampo(expresiones.inputNumero9, target, "inputNumero9");
        break;
    }

    if (campos["inputNumero1"]) {
      $(`#botonEnviar`).prop('disabled', false);
    }

  };

  $("#formulario input").on("blur", validarFormulario);

});
