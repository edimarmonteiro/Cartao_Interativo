
/*Quando o usuário colocar o seu nome no input-name
ocorera a function "nome_usuario()" recebendo o nome*/
function nome_usuarios(){
    //para a id "name" vira uma variavel "nome" 
    var nome = document.getElementById('name').value;
    //emviando os dados para o index.html atraves do atributo ID
    document.getElementById('valor_name')
    .innerHTML = nome
}

//Function do numero do cartão do usuário
function numero_cartao(){
    var numero = document.getElementById('number').value;

    /*para a variavem acima "numero" receba o que o usuário escrever 
    e coloque as configurações do html. retornando para o span*/
    document.getElementById('valor_number')
    .innerHTML = numero
}

//function do mês do cartão
function mes_cartao(){
    var mes = document.getElementById('select_mm_car').value;

    document.getElementById('valor_select_mm_car')
    .innerHTML = mes
}

//function do ano do cartão
function ano_cartao(){
    var ano = document.getElementById('select_yy_car').value;

    document.getElementById('valor_select_yy_car')
    .innerHTML = ano
}

function qatro_digto_cartao(){
    var cvc = document.getElementById('cvc_car').value;

    document.getElementById('valor_cvc_car')
    .innerHTML = cvc
} 