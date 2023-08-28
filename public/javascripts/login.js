function entrar(){
    $.ajax({
        url: '/api/auth/login',
        method: 'post',
        data: {
            Email:document.getElementById("").value,
            Senha:document.getElementById("password").value,
        },
        success: function(result, status) {
            alert('Login feito com sucesso')
            window.location = "principal.html";
        },
        error: function(jqXHR, textStatus, errorThron){
            console.log(errorThron);
        }
    })
}