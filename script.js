function acessarCurso() {
    const id = document.getElementById('ead').value;
    const senha = document.getElementById('senha').value;
    if (id === 'ead' && senha === '1316') {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('aula-lista').style.display = 'block';
    } else {
        alert('ID ou senha incorretos');
    }
}

function abrirAula(url) {
    window.open(url, '_blank');
}