$(document).ready(function () {

  $('#formularioRegistro').on('submit', function (e) {
    e.preventDefault();

    // cuadro información inicial
    let textoRespuesta =
      '<div class="alert alert-dismissible alert-primary">' +
      '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
      '<strong>Indice Masa Corporal (IMC) : </strong>' +
      'Valor que se obtiene a partir del peso y altura de la persona, y sirve como grado de indicador de obesidad o desnutrición.' +
      '</div>';

    // captura de variables
    var txtNombre = $('#txtNombre').val();
    var txtEdad = $('#txtEdad').val();
    var txtPeso = $('#txtPeso').val();
    var txtAltura = $('#txtAltura').val();

    // Valida genero seleccionado
    let finalText = "";
    let IiicialText = "";
    let generoSeleccionado = "";


    // Valida genero de la persona
    if ($('input[name="genero"]').is(':checked')) {

      if ($('#ckbMasculino').is(':checked')) {

        if (txtEdad <= 12) {
          finalText = "Niño";
        } else if (txtEdad == 12 || txtEdad <= 20) {
          finalText = "Joven";
        } else {
          finalText = "Caballero";
        }

        generoSeleccionado = "M";
        IiicialText = "El";

      } else {

        if (txtEdad <= 12) {
          finalText = "Niña";
        } else if (txtEdad == 12 || txtEdad <= 20) {
          finalText = "Señorita";
        } else {
          finalText = "Dama";
        }

        generoSeleccionado = "F";
        IiicialText = "La";
      }

    } else {
      textoRespuesta +=
        '<div class="alert alert-dismissible alert-danger">' +
        '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
        '<p>Por favor ingrese un genero.</p>' +
        '</div>';
    }


    // calculo IMC

    let operacion_basica = 0;


    if (txtEdad <= 20) {
      operacion_basica = txtPeso / (txtAltura * txtAltura);

    } else {
      operacion_basica = txtPeso / (txtAltura * txtAltura);
    }

    let indiceUno = '';
    let indiceDos = '';
    let indiceTres = '';
    let indiceCuatro = '';
    let indiceSinco = '';
    let indiceSeis = '';
    let indiceSiete = '';
    let indiceOcho = '';

    let textoDietaUno = '';
    let textoDietaDos = '';
    let textoDietaTres = '';
    let textoDietaCuatro = '';
    let textoDietaSinco = '';
    let textoDietaSeis = '';
    let textoDietaSiete = '';
    let textoDietaOcho = '';

    // dieta si es adulto
    if (operacion_basica <= 16 && (txtEdad > 20)) {
      indiceUno = '<p style="color:#3355FF;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaUno = '<p style="color:#3355FF;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos extremos se recomienda visita un especialista, puede estar ' +
        'presentando casos de falta de hierro, problema digestivos como deficiencia de enzimas digestivas o desorden relacionado, o problemas psicologicos ' +
        'que esten afectando su dieta, por lo demas se recomienda abundancia de vitamina ch (chicharròn, chorizo, chunchullo, churrasco, etc.) y tomarse ' +
        'la sopita completa mas suplementos adicionales recomendados por un medico</p>';

    } else if ((operacion_basica == 16 || operacion_basica <= 16.99) && (txtEdad > 20)) {
      indiceDos = '<p style="color:#0699B6;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaDos = '<p style="color:#0699B6;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos fuertes se recomienda visita un especialista, puede estar ' +
        'presentando algun problema fisico o digestivo relacionado, o problemas psicologicos que esten afectando su dieta, por lo demas se recomienda ' +
        'abundancia de vitamina ch (chicharròn, chorizo, chunchullo, churrasco, etc.), tambien debe tomarse su sopita mas suplementos adicionales ' +
        'recomendados por un medico</p>';

    } else if ((operacion_basica == 17 || operacion_basica <= 18.49) && (txtEdad > 20)) {
      indiceTres = '<p style="color:#beb136;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaTres = '<p style="color:#beb136;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos moderado se recomienda visita un especialista, que le ' +
        'recomiende suplementos vitaminicos adicionales, mas debe procurar agregar a la dieta una empanadita, arepa de huevo, o papa rellena diaria, y los fines de semana puede adicionar ' +
        'una picada, tamal, hamburguesa de 5000, salchipapas, o una arepa con chorizo, tambien puede agregar a su dieta la vitamina ch (chicharròn, chorizo, chunchullo, churrasco, etc.), ' +
        'adicional para mejorar si IMC, tambien procure tomarse su sopita diaria.</p>';

    } else if ((operacion_basica == 18.50 || operacion_basica <= 24.99) && (txtEdad > 20)) {
      indiceCuatro = '<p style="color:green;font-weight:bold;text-align: justify">Usted se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaCuatro = '<p style="color:green;text-align: justify"><b>Dieta Recomendada: </b> Se recomienda seguir vigilando la dieta diaria, para mantener este indice en buenas ' +
        'condiciones, si siente que su dieta se esta deviando hacia algun extremo, trate de modificar antes de que llegue a presentar algun desajuste de IMC.</p>';

    } else if ((operacion_basica == 25 || operacion_basica <= 29.99) && (txtEdad > 20)) {
      indiceSinco = '<p style="color:#b9ab25;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaSinco = '<p style="color:#b9ab25;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos moderado se recomienda visita un especialista, que le ' +
        'recomiende suplementos vitaminicos adicionales, debe procurar eliminar a la dieta la empanadita, arepa de huevo, papa rellena diaria, ' +
        'y los fines semana astengase  de comer una picada, tamal, hamburguesa de 5000, salchipapas, o una arepa con chorizo, ' +
        'tambien debe bajarle a su dieta la vitamina ch (chicharròn, chorizo, chunchullo, churrasco, etc.), y trate de remplazar esto por su sopita diaria, ' +
        'mas la alimentacion recomendada por el medico</p>';

    } else if ((operacion_basica == 30 || operacion_basica <= 34.99) && (txtEdad > 20)) {
      indiceSeis = '<p style="color:red;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaSeis = '<p style="color:red;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos fuertes se recomienda visita un especialista, puede estar ' +
        'presentando algun problema fisico o digestivo relacionado, o problemas psicologicos que esten afectando su dieta, por lo demas se recomienda ' +
        'eliminar completamente de su dieta la empanadita, arepa de huevo, papa rellena diaria, bajarle o eliminar a su dieta la vitamina ch, (chicharròn, chorizo, ' +
        'chunchullo, churrasco, etc.), adicionar debe remplazar estos por su sopita diaria mas suplementos alimenticios y medicamentos recomendados por un ' +
        'medico para logar remplazar su dieta actual y lograr bajar su IMC, trate tambien de sumar ejercicio en su rutina diaria</p>';

    } else if ((operacion_basica == 35 || operacion_basica <= 39.99) && (txtEdad > 20)) {
      indiceSiete = '<p style="color:red;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaSiete = '<p style="color:red;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos severos se recomienda visita un especialista, puede estar ' +
        'presentando algun problema fisico o digestivo relacionado, o problemas psicologicos que esten afectando su dieta, por lo demas se recomienda ' +
        'eliminar de su dieta cualquier tipo de grasa o carbuhidrato y solo consumir alimentos o suplementos vitaminicos segun lo recetado por su medico, ' +
        'tambien trate de complementar esto con bastante ejercicio, para asi lograr bajar su IMC</p>';

    } else if ((operacion_basica > 40) && (txtEdad > 20)) {
      indiceOcho = '<p style="color:red;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaOcho = '<p style="color:red;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos extremos se recomienda visita un especialista, puede estar ' +
        'presentando algun problema fisico o digestivo relacionado, o problemas psicologicos que esten afectando su dieta, por lo demas se recomienda ' +
        'eliminar de su dieta cualquier tipo de grasa o carbuhidrato y solo consumir alimentos o suplementos vitaminicos segun lo recetado por su medico, ' +
        'tambien trate de complementar esto con bastante ejercicio para asi lograr bajar su IMC</p>';
    }


    // dieta si es niño
    if (operacion_basica <= 20 && (txtEdad <= 20)) {
      indiceUno = '<p style="color:#3355FF;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaUno = '<p style="color:#3355FF;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos extremos se recomienda visita un especialista, puede estar ' +
        'presentando casos de falta de hierro, problema digestivos como deficiencia de enzimas digestivas o desorden relacionado, o problemas psicologicos ' +
        'que esten afectando su dieta, por lo demas se recomienda abundancia de vitamina ch (chicharròn, chorizo, chunchullo, churrasco, etc.) y tomarse ' +
        'la sopita completa mas suplementos adicionales recomendados por un medico</p>';

    } else if ((operacion_basica == 21 || operacion_basica <= 34.99) && (txtEdad <= 20)) {
      indiceDos = '<p style="color:green;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaDos = '<p style="color:green;text-align: justify"><b>Dieta Recomendada: </b> Se recomienda seguir vigilando la dieta diaria, para mantener este indice en buenas ' +
        'condiciones, si siente que su dieta se esta deviando hacia algun extremo, trate de modificar antes de que llegue a presentar algun desajuste de IMC.</p>';


    } else if ((operacion_basica == 35 || operacion_basica <= 39.99) && (txtEdad <= 20)) {
      indiceTres = '<p style="color:#beb136;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaTres = '<p style="color:#beb136;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos fuertes se recomienda visita un especialista, puede estar ' +
        'presentando algun problema fisico o digestivo relacionado, o problemas psicologicos que esten afectando su dieta, por lo demas se recomienda ' +
        'eliminar completamente de su dieta la empanadita, arepa de huevo, papa rellena diaria, bajarle o eliminar a su dieta la vitamina ch, (chicharròn, chorizo, ' +
        'chunchullo, churrasco, etc.), adicionar debe remplazar estos por su sopita diaria mas suplementos alimenticios y medicamentos recomendados por un ' +
        'medico para logar remplazar su dieta actual y lograr bajar su IMC, trate tambien de sumar ejercicio en su rutina diaria</p>';


    } else if ((operacion_basica > 40) && (txtEdad <= 20)) {
      indiceCuatro = '<p style="color:red;font-weight:bold;text-align: justify">' + IiicialText + ' ' + finalText + ' se ubica aqui con : ' + operacion_basica + '</p>';
      textoDietaCuatro = '<p style="color:red;text-align: justify"><b>Dieta Recomendada: </b> Ante estos casos extremos se recomienda visita un especialista, puede estar ' +
        'presentando algun problema fisico o digestivo relacionado, o problemas psicologicos que esten afectando su dieta, por lo demas se recomienda ' +
        'eliminar de su dieta cualquier tipo de grasa o carbuhidrato y solo consumir alimentos o suplementos vitaminicos segun lo recetado por su medico, ' +
        'tambien trate de complementar esto con bastante ejercicio para asi lograr bajar su IMC</p>';
    }



    textoRespuesta +=
      '<div class="alert alert-dismissible alert-success">' +
      '<strong>Su indice de masa corporal es ' + operacion_basica + '</strong>' +
      '</div>';


    if (txtEdad > 20) {

      textoRespuesta +=
        '<table class="table">' +
        '<thead>' +
        '<tr class="table-light">' +
        '<th scope="col" style="width:170px">IMC (kG/m^2)</th>' +
        '<th scope="col">Estado Clasificación</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +

        '<tr class="table-primary">' +
        '<td scope="row" style="width:170px"><b>Menos de 16<b/></td>' +
        '<td><b>Delgades Desnutrición Severa</b> ' + indiceUno + textoDietaUno + '</td>' +
        '</tr>' +

        '<tr class="table-info">' +
        '<td scope="row" style="width:170px"><b>16.00 hasta 16.99</b></td>' +
        '<td><b>Delgades Desnutrición Moderada</b> ' + indiceDos + textoDietaDos + '</td>' +
        '</tr>' +

        '<tr class="table-secondary">' +
        '<td scope="row" style="width:170px"><b>17.00 hasta 18.49</b></td>' +
        '<td><b>Delgades Desnutrición Leve</b> ' + indiceTres + textoDietaTres + '</td>' +
        '</tr>' +

        '<tr class="table-success">' +
        '<td scope="row" style="width:170px"><b>18.50 hasta 24.99</b></td>' +
        '<td><b>Normal</b> ' + indiceCuatro + textoDietaCuatro + '</td>' +
        '</tr>' +

        '<tr class="table-warning">' +
        '<td scope="row" style="width:170px"><b>25.00 hasta 29.99</b></td>' +
        '<td><b>Sobrepeso(Preobesidad)</b> ' + indiceSinco + textoDietaSinco + '</td>' +
        '</tr>' +

        '<tr class="table-danger">' +
        '<td scope="row" style="width:170px"><b>30.00 hasta 34.99</b></td>' +
        '<td><b>Obesidad grado 1(leve a moderado)</b> ' + indiceSeis + textoDietaSeis + '</td>' +
        '</tr>' +

        '<tr class="table-dark">' +
        '<td scope="row" style="width:170px"><b>35.00 hasta 39.99</b></td>' +
        '<td><b>Obesidad grado 2(Severa)</b> ' + indiceSiete + textoDietaSiete + '</td>' +
        '</tr>' +

        '<tr class="table-dark">' +
        '<td scope="row" style="width:170px"><b>Mas de 40</b></td>' +
        '<td><b>Obesidad grado 3(Morbida)</b> ' + indiceOcho + textoDietaOcho + '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>';

    } else {

      textoRespuesta +=
        '<table class="table">' +
        '<thead>' +
        '<tr class="table-light">' +
        '<th scope="col" style="width:170px">IMC (kG/m^2)</th>' +
        '<th scope="col">Estado Clasificación</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +

        '<tr class="table-primary">' +
        '<td scope="row" style="width:170px"><b>Menos de 5 Percentil<b/></td>' +
        '<td><b>Bajo Peso</b> ' + indiceUno + textoDietaUno + '</td>' +
        '</tr>' +

        '<tr class="table-success">' +
        '<td scope="row" style="width:170px"><b>5 hasta 85 Percentil</b></td>' +
        '<td><b>Peso Saludable</b> ' + indiceDos + textoDietaDos + '</td>' +
        '</tr>' +

        '<tr class="table-danger">' +
        '<td scope="row" style="width:170px"><b>85 hasta 95 Percentil</b></td>' +
        '<td><b>Sobrepeso</b> ' + indiceTres + textoDietaTres + '</td>' +
        '</tr>' +

        '<tr class="table-dark">' +
        '<td scope="row" style="width:170px"><b>Mayor a 95 Percentil</b></td>' +
        '<td><b>Obesidad</b> ' + indiceCuatro + textoDietaCuatro + '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';
    }


    console.log([txtNombre,
      txtEdad,
      txtPeso,
      txtAltura,
      generoSeleccionado,
      operacion_basica
    ]);




    $("#respuestaTexto").html(textoRespuesta);
  })


});