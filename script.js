function validForms() {
    var nome = formulario.nome.value;
    var email = formulario.email.value;
    var nota = formulario.nota.value;

    if (nome == "") {
        alert("preencha o campo nome");
        formulario.nome.focus();
        return false;
    }

    if (email == "") {
        alert("preencha o campo email");
        formulario.email.focus();
        return false;
    }

    if (document.getElementById('nota').selectedIndex === 0) {
        alert("Selecione uma nota para o site");
    }


}
