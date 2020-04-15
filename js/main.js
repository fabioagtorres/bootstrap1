function validarIdade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

$(function(){
    $(".cep").hide();
    $(".progresso").hide();
});



function clicou (){
    $(".progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $("#adresstt").html("Adress:" + response.cep);
            $(".cep").show();
            $(".progresso").hide();
        }
    })
    document.getElementById("agradecimento").innerHTML = "We're sending a can with 500grams for the location below";
    //window.open("https://web.whatsapp.com/")
    //window.location.href = "";
    //alert ("Obrigado por clicar");
}

function trocar(elemento){
    elemento.innerHTML = "<i>WE APRECIATE YOUR EFFORT ! CHEERS</i>";
    //document.getElementById("mousemove").innerHTML = "<i>WE APRECIATE YOUR EFFORT ! CHEERS</i>";
    //alert("Voce eh um maconheiro safado");
}
function voltar(elemento){
    elemento.innerHTML = "<i>WE WOULD LIKE TO GIVE YOU A REWARD FOR YOUR CONTRIBUITION </i>"
    //document.getElementById("mousemove").innerHTML = "<i>WE WOULD LIKE TO GIVE YOU A REWARD FOR YOUR CONTRIBUITION </i>";
}
function load(){
    alert("Check our new Buds - i mean Partners lol")
}
//var idade = prompt("Qual a sua idade?");
//console.log(validarIdadereward(idade));
///