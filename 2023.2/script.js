function mostrarSenha() {
    var str = document.getElementById('botaoMostrarSenha').innerHTML;
    var arr = str.split(' ');
    var res = arr[0];

    var campoAutenticacaoSenha = document.getElementById('senha');

    /* botaoMostrarSenha.innerHTML = 'visibility_off'; */


    if (res == 'visibility') {
        botaoMostrarSenha.innerHTML = 'visibility_off';
        campoAutenticacaoSenha.setAttribute('type', 'text');
    }
    else {
        botaoMostrarSenha.innerHTML = 'visibility';
        campoAutenticacaoSenha.setAttribute('type', 'password');
    }

}

function confirmar() {
    var senha = document.getElementById('senha').value;
    var arr = senha.split(' ');
    var camposenha = arr[0];

    var senhaDefinida = '#Uni123'

    if (camposenha == senhaDefinida) {
        var autenticacao = document.getElementById('autenticacao');
        autenticacao.className = 'autenticacaoOcultar';

        var links = document.getElementById('links');
        links.className = 'linksExibir';
    }
    else {
        window.alert('Prezado(a)!!\n\nVerifique se a senha digitada está correta.\nEm caso de dúvida entre em contato com a TE.\n\nE-mail: te@unisuam.edu.br')
    }

    var linhaParImpar = document.querySelectorAll('tr');
    for (var i = 1; i < linhaParImpar.length; i++) {
        if (i % 2 === 0) {
            linhaParImpar[i].classList.add('impar');
            linhaParImpar[i].classList.remove('par');
        } else {
            linhaParImpar[i].classList.add('par');
            linhaParImpar[i].classList.remove('impar');
        }
    }

}

$('table input').keyup(function () {
    var index = $(this).parent().index();
    var nth = 'table td:nth-child(' + (index + 1).toString() + ')';
    var valor = $(this).val().toUpperCase();
    $('table tbody tr').show();
    $(nth).each(function () {
        if ($(this).text().toUpperCase().indexOf(valor) < 0) {
            $(this).parent().hide();
        }
    });

    var linhaParImpar = document.querySelectorAll("tr:not([style='display: none;'])");
    for (var i = 1; i < linhaParImpar.length; i++) {
        if (i % 2 === 0) {
            linhaParImpar[i].classList.add('impar');
            linhaParImpar[i].classList.remove('par');
        } else {
            linhaParImpar[i].classList.add('par');
            linhaParImpar[i].classList.remove('impar');
        }
    }
});




var exibirProva = document.getElementById('exibirProva');

$('#GCSA1068').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSd3hEQ_xKVci8lsd7fDzX0dOD_HA2j5MBLrPiiPVIVGAKh4ww/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCSA1055').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc4TWi_tYG5ZkxqYy-v8DzRoXB9t56ygOGlWnkeIvdsHkWtBA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCOB1036').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSd-pkQhBdnFYU33FtMgNu1e5LOxOhkncl-Aa6IdLKn8lsyN3w/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCSA1059').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScmgZiQPKQK7v8pLShErUySX-V6ICrPIaVvyafmJGYTCioicQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADM1078').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfPRlKCH1WEwgzYh5svs34jmXvukEsr_nvgcXOQHlew1F4wVQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCSA1062').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdwkaK6erZg5TdI70-COJZKDvRzntU7w5YBE-EF1TMwSzUgVg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADM1074').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSf6IQJw5PvU7kDiW0ddoXxQJ5xUQs6iShqDJcGw7GWZe6ZWjg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADM1085').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdZwvgi3Rqse0JYalddgwTUWzI_ASo-70n7aGRLHPdwYS2KsA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDEF0005').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfspHUtKVxG6n7L0dya65_Afutwm9FETjfAxXNaiOtCgF0p-A/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDEF0015').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSd7IHpjreaUEL2ZIp6MnjPdhX8XZjzp2dhn27qU_c6Jg6FJFQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDEF0006').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSd6O0Pt80nSMOyPKmh8BoQXYQUAEEGDbQHTic5EGbZ6A91GbA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDEF0036').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSffDwAPy5tfBkna6sGOvdvBn90rbUjvsUdp0RVOKkoyZDjFEg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCOB1073').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdOi9NPgzMxxFuN42foNpLtY4GU5Lhso6rhk1kJ44EQO5H2aA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCOB1077').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScqm36jppm6GeoBqFoTccannmgMijHRPX_NFdYHiIF8vkiXhA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCOB1084').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScTN-vCWnUe_UHrvJQUMbFNkxkkxbHp4g0KJqWKC4DgG5kBbQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDEP0001').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScq9o5M2NGljLivSe9LfTayWdLcsjaqqYp93H-yvjzpO3QPCg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GEAD0002').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc7n2PB4BoWuFeCHvOcO1gdjyNURyNnHolt8u39DlUu7bV3TQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GEAD0100').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSf5RJrmoc88w6fV04FzuwviDdr8i4HldSoTUEGC9TDO_Z-1hQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDEP0007').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScX3pOH1OLKVFnfA1rLPMYO27oFfkB9LarpY8SFOiX5hQY48A/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLH0001').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc5IusFBu6jAhDx6BFRm5XGSeKvnFz1vc7ez3ZoFDejCV08rw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLH0004').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdbY0ZEQB8OT-Fow8mrr_uADFLvhVzHkOOCd8hwZDSFnof8Qg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLH0006').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSd_CR_sqQteHr8tngdW69Y1mz2Kow91wdvH-qfGil9hblvmLw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLH0012').click(function(){exibirProva.src = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSeOZxo7pF4xt5A3Ed2MxcZUzKAsLgRK-x1l-xRXIfsrgAPVww/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLL0001').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdu1jyMkxBtuUKZxIW6JZ1pzRIxzB376RpWUCbpSYnGZicDqA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLL0002').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfBtAy165qW8WfCwnAKOZ87pns_Qrg1IIEgHMqk9XrKahA1eg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLL0006').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeA52WEK5mpNmqJ5u9TqIXFmYzkXKb8EKMQM7ckBA_Q04cfFQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLL0009').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfaLTI8CL3iHh4OeN_vuaIsFg-4y_-wMVpYODom7Q5EcS5HQw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPED1046').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSf6e4RZ42jihWNQ-OTtfRlQLLuN0k_drZFx2mLpUDsF69KcTQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPED1054').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfROSWjE9gLlORoDcBonVDbnt3pGzFEVvtq_5hy_EHDn1E5Dg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPED1058').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSf5vxRtpPA5l4jwwv0RfdP8E6kcTNcpH9FfeQ7dv_nkY2n5TA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPED1057').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScCLG6fbU5wVRfHI-TX_23LJCrWuDMV73wCIJ1VCzcYCqJ-lg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPED1181').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfkpHeXCOwMN_ooe4LFWQqsAsyWVbXmwgMSSxrYKBxzGxfjkg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPED1051').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc5F-MVi9DrBWJdFz982j1Aul7kj0m1TYb3JHaEeFZGmZ1dzg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPED1123').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSejtmJVqAc6KxwV0n_2YV9EyAmted2o_ekjPhjKUrrMNWkZCw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPED1059').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScy5QzSSIQAphsz2QpcscrrPt1MF6ffEUOFTWz83PfjHdutkg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GSER1097').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc1jCpef0IOSNpzgUg_Bq5Akza1TQHzBXOIlQCnQfQN8gX1ZA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GSER1098').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScrl5j_cQ0seC1yyasvzH8KuJFn1tZ9BZ_3mGZ0OMCuDqSVlw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GSER1039').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc8oH1Q40zo1VhRxQ0LD-5Z5S-qw7HIgJ0EJg0k2MUJcZxKAQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GSER1103').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfR7PeDSsZICnkLvj0PUZenPIPjXNU0kEFwKSPHeSjWmssK9Q/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GSER1045').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeMKjmocE5EH1MPIQC672arjlNyv5hhoq5_T6kshiE0TlQJ8w/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GSER1051').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSejXQ3FQbnM21FWI_mmNCAxjW0Yz-Mf53tna8FO-s8uLB3iUQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GSER1056').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfezlET0rhbax_uS7Nm2reI8kUX7_FnS_OFaF9S4bkWMfaPMQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GLET1036').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScxAsCLje7D0WQ4Q1wuijp5WMxOOxDJoW6zSUyzunsANpcOzA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GENG1068').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSd3p78KG5tLQjk53UrFnCQH_cNsfUHJLHPXbX9ELL3IqqppgQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADS1049').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeL5Z6XckWK4hKL7pSR7VZrO48n63Bbdynhxsh4Wtu3aXRiVg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADS1060').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSemNmu9taRm1migC4psQr9X3DyoR585DiTKECR3ysmolqh69Q/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADS1061').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeSYbFWwMzMGf-E3jGlas2oOg0j3xyF2RoWTvUUIYZJP-T9rA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADS1054').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdQS3lICNBn5o2Jr_iP1UeclPQztpmhGKnDzZ5qxIRP5qQ3uA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDAI0002').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSe6TvPxOVEeyhe-_3qHkTQ8HQJXRxxjr2coxHWoBXWzmnm77A/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDAI0004').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc5Ie5NpGqZoDEElENtuok0OA74WtIbbX9_mQRUNCp-_PX_8Q/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDAI0007').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScMdTajJAH0-YSXz0wKVZUsxPpYImsK9bvy6JkJ1jcZrNfS5g/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDAI0012').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc4jzWSK8BoNVv0nUUZEVzQuDlbVmH4wc5QwfwrIgQBj6VnVw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGAM1015').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdKEx1Tc1w8rVk39-CrshhVq2rc7Z_vvmjKIuQH5sdJuFBh6Q/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGAM1019').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScFmeBDo93iXXjpu6WISdhgXemcVyQcorzIGH0Fr3lLTDri2A/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGAM1021').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeu3ZXmSBblbGmOroz0ge2Z28gklNFY5fXvEIqHGtqwKjCG-g/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGAM1025').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfOEb1_Msj6514On-fHwTyU8XwP-Dt7IZ-_w8Y6oy0KENCuwg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGAM1027').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSf9aqgkwsb2MAhcqx5SKvSsWg83dIKnUTQJZ3W1xPsvJMBwjA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCSA1011').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSff0fAYTolSYpT_t2HCoS5DtG1TGCccLZx4eGJBw9hlOH2N6A/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADM1096').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdlMK5lczUv5F7WCtV1jT6GdJrPL1GfQqdGdDsLww2CC8BQkQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADM1097').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScGXiQQAsDy7wD2W7CbNMKWygCBBomoBxHEMUQgtdziPpl-IQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GMKT1072').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSegQ1as2y9bUmIhGod27IWvH1pvYG_VX3KSJPXGiaBIFJCaVA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADM1099').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc_1sy1qwAH7gQjNuVhIJNkeukow52EdKN4RKuJlk5PvDi9IA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPSI1074').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfwSxp2nD4jiKOeOZRlV30yCxHiPxTEp1WS0HI85crANzGrMA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGRH1045').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdtd09N5g3yl_rj_iSndL55YlhLC7vGlC6W_M7t79BrHn8GPw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGRH1048').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdaw7nB2R9iDmc_M3uewnBAlb-krsDDxCzFWvmOR8QIYGzo2g/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGRH1049').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScrRD2_eH1p19kGQ3HgmVnu0XKQDX9RizmEtfgCqXDN5wJnAA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDPU0003').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdgbdMiOENlVmKTDEiKd84rM7kJsuc_bfNu_ehtHvNc539-IQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDPU0017').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScdguEXdDBXj9vwAqGmQsNEMaODdprgWAi3X2vBY7CoEYKeYA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDPU0020').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdTt-VLnJpnysXmI2dSGhh__LrWBcGLctCRH69AJb4qY4U8BQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDIR1177').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSf8WAocOzUW8p0OItat1uTs1nJ4gsQoZssWfVlQf2LWC0k0Ew/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDIR1181').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSf2ydOQ1BNXXjyTFJh7WeOg8Ojg7tFYT4a7kMluNxJTsV-qmg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDIR1182').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdWhFDpKQrtrCOJX5Vs_ZBRjLx68rl7szSVZiQejjA0AmIDnw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDIR1186').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScZlXUzcMdCNDgrgu9AWQdlDiWKg6rqgiBdXxdf37IxrKhVkg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GECO1023').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfRHWmVwq7jyjQiYT1eg9F1EMxvKMBF4Klv-J50fG8YRNd3AA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCOB1038').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfpkKmHS8jiLPr_Fe7DNpCbdm7qQL-x5axHyAP_ITf8Lsn7eQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCOB1041').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSePpDp1mK_LEuwDhOJMLdhM9wOzt4UAclC5DAHeMTiPASSdfw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCOB1045').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/1cyWvXzMncm7eXJbnUH7hjz_TY1y2IqbOzkfeyQe0ZPc/edit';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCOB1048').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfzoX4V29UxvCtJuEA7O5iJXlswnZQgcA_ho3yyUQsXkahd5Q/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDGF0003').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeGhDzLAqg7uu_xEk62ug-cdaAt3BHwq5gsyVNE8DcbuCnRsQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGHO0002').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfZkslwfi6gMBPQagNkoNIvHZLd51nNRposR2IW5Fw-m_5--g/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGHO0007').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfUPT2Vv94MJlq8Eb9ItyOISIfvxFE0gaDQcSxEeDSv9eZSjQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGHO0008').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdvLpjFFqRWd1eS4tTOuETka7Al-DCPJZktwqw-fDnXowefXQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GGHO0010').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeQ1N37Lt7U6uu2lzTkq87BliN7xCRW9YkTJZ3rimLZVIsLHQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCSA1035').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdg8wWVHtceZoJrt1-rR16lgdWmhVBmMlfwvU9EfPCSu2IeQg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCSA1038').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfnTrmD_e2piGNJGOa5AvANY5n-O075t2vd7kSFbftA2Rfx9w/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCSA1040').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfnluWekYEUCHXWkZiHCVzhjpf9YeompzhFvqJUDLNrIV8-sA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCSA1041').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSemhyi7BP28dfHInWAoxqx0vs5onRqayuvebpuMntrB5L2hkg/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GCSA1049').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeFK0VwXq4YC4QOSSIXDHu6Zhlhh9Wuhgk2WF6BehPO1JsghA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLO0003').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeSqmJlHci_yyFcy2HxGzHIWGiACbOhFszoiRrNynes4Xp1Yw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDLO0004').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScng0pb1wyGltrOyF9nlgdbNEyF3Mmwcef1iSiEoNYQBLYqZw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GEAD0027').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScmQ3gceharUds7XSfRjSR6W56KbSrrL4mt1WZMu1jpJaQz0A/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GEAD0131').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScNFGSzBaJKLzf0r7OdhB52um6GsTJqQVZApwYSlwyIOMcrHw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDMK0012').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLScHcNxCmVvmCFW8_KylGTks1-fZB4uFJFnVtN6mWdeJqs788Q/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GDMK0015').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSf1jHd19GSAtKXhE7D7uF3WJkiXzEVQpOL7erPosV3yjkrZ7g/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GMKT1046').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdNbnqj12beYqgX4RfmgN2OF3J2amVETwl5ME-yB7-x-97iGA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADM1038').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdIsIEqToeW5pRI3qW6WKigs_C1AL3qEsKPBxb0XGRotpOz4g/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADM1041').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc_ToKryOGLuypaUFhSoNp9FrsBAT4RGxzPKSNY6iEgc86y_A/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GPRO1045').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdOeCSFf0dzjpSyKyMRTtvO5a3Ng6Bdt0Rkp44GVxf6fWQ2AQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GMKT1074').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdN8q452pFm0aiuRhlO72PwnLzfWyNTgPwMptMd2f_Gd_AcQQ/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GADS1056').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSffFb3CYoebsr_Sen9n6S5PIGXznJs0xqd70W31MPZJbTFCGw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GINF1025').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeJffz5FFJskFnXyxoaVM30scWgkEJSxErdVa0z190BoNVKlA/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});
$('#GRED1008').click(function(){exibirProva.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdMAbF9aTaQ2n2ydjx2CCLaffkoTCHG9ywSuKnugXAFpy87Hw/viewform';var links = document.getElementById('links');links.className = 'links';var prova = document.getElementById('prova');prova.className = 'provaExibir';});