function validarIdade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
function clicou (){
    document.getElementById("agradecimento").innerHTML = "The Web Whatsapp has been opened at a new Tab";
    window.open("https://web.whatsapp.com/")
    //window.location.href = "";
    //alert ("Obrigado por clicar");
}
function trocar(){
    document.getElementById("mousemove").innerHTML = "<i>WE APRECIATE YOUR EFFORT ! CHEERS</i>";
    //alert("Voce eh um maconheiro safado");
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "<i>WE WOULD LIKE TO GIVE YOU A REWARD FOR YOUR CONTRIBUITION </i>";
}



//var idade = prompt("Qual a sua idade?");
//console.log(validarIdadereward(idade));
///