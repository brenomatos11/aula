btn_enviar.addEventListener('click', function(event) {

    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if(idade >= 18)
    {    
        alert(nome + ' vc e MAIOR DE idade');
    } 

    else 
    {
        alert(nome + ' vc e MENOR DE IDADE!');
    }




});