function adicionarPet(event){
    event.preventDefauly()// evita da tela de recarregar
const foto = document.getElementById("foto").value
// conta e uma variavel não muda,  document é a minha tela getElementById e pra ir lá na tela e pegar o documento  que tem(id) , o value é o valor.
const nome = document. getElementById("nome").value
const idade= document. getElementById("idade").value
const cor= document. getElementById("cor").value
const descrição= document. getElementById("descrição").value
}




document //seu documento html
.getElementById("form-pet")// ir no documento localizar elemento
.addEventListener("subimt" ,adicionarPet)//Adicionar um evento de sbmit vinculado a função adicionar 