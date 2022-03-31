function enviar(){
    var nome = window.document.getElementById("usuario_nome")
    var celular = window.document.getElementById("usuario_celular")
    var email = window.document.getElementById("usuario_email")
    res.innerHTML = `Prazer em te conhecer ${nome.value}! seus dados foram encaminhados com sucesso!, em caso de emergência, entraremos em contato com seu email (${email.value}) ou celular (${celular.value})`
}



