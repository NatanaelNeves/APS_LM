function verificarAcesso() {
    const logado = document.getElementById('logado').checked;
    const assinatura = document.getElementById('assinatura').checked;
    const voucher = document.getElementById('voucher').checked;

    const acessoPermitido = logado && (assinatura || voucher);

    const resultado = document.getElementById('resultado');
    if (acessoPermitido) {
        resultado.textContent = "Acesso concedido ao filme!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Acesso negado ao filme.";
        resultado.style.color = "red";
    }
}
