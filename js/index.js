

var botao = document.querySelector("#btn-enviar");

console.log('começou');

botao.addEventListener("click", function (event) {

    event.preventDefault();

    console.log('botou comeclou');

    var nome = document.querySelector("#nome").value;

    var email = document.querySelector("#email").value;

    var arrayDeRadio = document.querySelectorAll("input[name='estadoCivil']");

    var qtdFilhos = document.querySelector("#qtdFilhos").value;

    var estadoCivil;

    for( var i = 0; i < arrayDeRadio.length; i++){

       if(arrayDeRadio[i].checked){

           estadoCivil = arrayDeRadio[i].value;
            break;
       }
    }

    console.log(estadoCivil);

    var tabela = document.querySelector("#pessoas");

    if(nome && email && qtdFilhos){

        var pessoa =
            "<td  class='info-nome'>    " + nome+ " </td>" +
            "<td  class='info-email'>  " + email+ " </td>" +
            "<td  class='info-qtdFilhos'>" + qtdFilhos + "</td>" +
            "<td  class='info-estadoCivil'>" + estadoCivil + " </td>" +
            "</tr> ";

        tabela.innerHTML = tabela.innerHTML +  pessoa;


        nome.value = '';
        email.value='';
        qtdFilhos = '';
    }

    else{

        alert('Preencha todos os campo por favor!');

    }



});