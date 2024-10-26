document.getElementById('linkForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const alunoNome = document.getElementById('alunoNome').value;
    const alunoEmail = document.getElementById('alunoEmail').value;
    
    const linkAcesso = generateUniqueLink(alunoNome);
    const expiracao = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString();

    document.getElementById('linkGerado').innerHTML = `
        <p>Link gerado para ${alunoNome}: <a href="${linkAcesso}">${linkAcesso}</a></p>
        <p>Vencimento: ${expiracao}</p>
    `;

    // Aqui você deve implementar a lógica de envio do link para o e-mail do aluno
    console.log(`Enviando link para ${alunoEmail}: ${linkAcesso}`);
});

function generateUniqueLink(alunoNome) {
    const uniqueID = btoa(alunoNome + Date.now()); // Gera um ID único baseado no nome do aluno e no timestamp
    return `https://plinioweb.com/acesso/${uniqueID}`; // Altere para a URL real
}

document.getElementById('avisoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagem = document.getElementById('avisoMensagem').value;
    
    // Aqui você deve implementar a lógica de envio do aviso para todos os alunos
    console.log(`Enviando aviso: ${mensagem}`);
});
