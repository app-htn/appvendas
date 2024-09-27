function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "vm42" && senha == "vmdl"){
        location.href = "https://app-htn.github.io/appvendas/relatorio/relatorio.html";
   }else{
        alert('Usuario ou senha incorreta')
   }
}
