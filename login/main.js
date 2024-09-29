function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')
    
    if(inputPass.type === 'password'){
       inputPass.setAttribute('type','text')
       btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password')
       btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
        
}


const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('form.login');
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }


    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');

});
