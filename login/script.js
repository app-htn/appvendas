function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "vm42" && senha == "vmdl"){
        location.href = "/relatorio/relatorio.html";
   }else{
        alert('Usuario ou senha incorreta')
   }
}
