function logar(){

     var login = document.getElementById('usuario').value;
     var senha = document.getElementById('senha').value;
 
     if(login == "admin" && senha == "admin"){

         
         location.href = "https://app-htn.github.io/appvendas/relatorio/relatorio.html";
    }else{
         alert('Usuario ou senha incorreta')
    }
 }