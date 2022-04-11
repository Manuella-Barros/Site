function enviar(){
    var nome = window.document.getElementById("usuario_nome")
    var celular = window.document.getElementById("usuario_celular")
    var email = window.document.getElementById("usuario_email")
    var idade = window.document.getElementById("usuario_aniversario")

    if (nome.value.length == 0 || celular.value.length == 0 || email.value.length == 0 || idade.value.length == 0){
        alert("Por favor preencha os campos abaixo")
    } else {
        res.innerHTML = `Prazer em te conhecer ${nome.value}! seus dados foram encaminhados com sucesso!, em caso de emergência, entraremos em contato com seu email (${email.value}) ou celular (${celular.value})`
    }
}




