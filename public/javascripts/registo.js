
function registar(){
    $.ajax({
        url: '/api/auth/registar',
        method: 'post',
        data: {
            Nome: document.getElementById("nome").value,
            Email: document.getElementById("email").value,
            Senha: document.getElementById("password").value,
        },
        success: function(result, status){
            console.log('Success')
            window.location = "index.html";
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
        }
    })
}