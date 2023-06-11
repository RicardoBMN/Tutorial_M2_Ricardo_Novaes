api = 'http://127.0.0.1:3071'




$(document).ready(function(){
    // Alterar a cor de fundo a cada 10 segundos
    setInterval(function(){
        $(".job").animate({
            backgroundColor: "#FFFF00"
        }, 1000).delay(8000).animate({
            backgroundColor: "#FFFFFF"
        }, 1000);
    }, 10000);

    // Inserção de conteúdo
    $("header").append('<p id="welcome">Bem-vindo ao meu currículo!</p>');
    $("#welcome").hide().fadeIn(2000);
    userName.list();
});


var userName = {
    list() {
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
                var tx = '<h1> ';
                data.forEach(element => {
                    tx += `${element.nome}` + '</h1>';
                
                });
                $("header").append(tx);
            }
        })
    }
}