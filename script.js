function login(event){
    event.preventDefault()
    const user = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    const errorUser = document.getElementById("erroruser");
    const errorPass = document.getElementById("errorpass");
    if (!user){
        errorUser.style.display = "block";
        return;
    }else{
        errorUser.style.display = "none";
    }

    if(!password){
        errorPass.style.display = "block";
        return;
    }else{
        errorPass.style.display = "none";
    }
    alert(`Usuário: ${user} logado com sucesso.`)
}