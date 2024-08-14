function adicionarPet(event) {
    console.log("entrando na função")
    event.preventDefauly()// evita da tela de recarregar
    const foto = document.getElementById("foto").value}
    // conta e uma variavel não muda,  document é a minha tela getElementById e pra ir lá na tela e pegar o documento  que tem(id) , o value é o valor.
    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    const cor = document.getElementById("cor").value
    const descrição = document.getElementById("descrição").value
    const tipo = document.getElementById("tipo").value

    if (nome === "") {
        //alert("Nome e obrigatorio")//
        document.getElementById("nome").style.borderColor = "red"
        document.gedElementById("nome").style.borderwidth = "2px"
        documento.getElementById("error-nome").ineerText = "Nome é obrigatório"
    }


/*1 - colocar uma tag select
/* 2 - colocar uma data


document //seu documento html
    .getElementById("form-pet")// ir no documento localizar elemento
    .addEventListener("subimt", adicionarPet)//Adicionar um evento de sbmit vinculado a função adicionar 