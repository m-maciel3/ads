function limpar(){
    const nome = document.querySelector('#nome')
    nome.value = ""
    document.getElementById('sobrenome').value= ""
}
function verSenha(){
    var senha1 = document.getElementById('senha1');
    var senha2 = document.getElementById('senha2');
    let btnVer = document.getElementById('btnVer')
}
    if(senha1.type === "password" || senha2.type === "password"){
        senha1.type = 'text'
        senha2.type = 'text'
        btnVer.type = 'Desver'
    }
    else{
    senha1.type = 'password'
    senha2.type = 'password'
    btnVer.value = 'Ver'}

    function modoEscuro(){
        let btnModo = document.getElementById('btnModo')
        if(btnModo.value == 'Escuro'){
            document.getElementById('principal').classList.add
        }
    }