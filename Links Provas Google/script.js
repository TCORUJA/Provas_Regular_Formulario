function confirmar(){
    var senha = document.getElementById('senha').value;
    var arr = senha.split(" ");
    var camposenha = arr[0];

    var senhaDefinida = "123"

    if(camposenha == senhaDefinida){
    var autenticacao = document.getElementById('autenticacao');
    autenticacao.className = "autenticacaoOcultar";
    
    var links = document.getElementById('links');
    links.className = "linksExibir";
    }

}



var exibirProva = document.getElementById('exibirProva');

$('#COB1084').click(function(){
    exibirProva.src = "https://docs.google.com/forms/d/e/1FAIpQLSdEqpEGcNh11mzoEFH_YelBk_A__sCM5W78HlEtJrkuS7W0PQ/viewform";
    
    var links = document.getElementById('links');
    links.className = "links";

    var prova = document.getElementById('prova');
    prova.className = "provaExibir";
});