
function entrar(){
    $.ajax({
        url: '/api/login', //Igual ao que está no app.js
        method: 'post',
        data: {
            Email:document.getElementById("email").value,
            Senha:document.getElementById("password").value,
        },
        success: function(result, status) {
            alert('Login feito com sucesso')
            localStorage.setItem("idUtilizador", result[0].idUtilizador);
            window.location = "principal.html";
        },
        error: function(jqXHR, textStatus, errorThron){
            console.log(errorThron);
        }
    })
}