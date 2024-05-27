// Função para lidar com o envio do formulário
document.getElementById("Nome").addEventListener("submit", function(event) {
    // Impedindo o comportamento padrão do formulário de recarregar a página
    event.preventDefault();
    
    // Obtendo os valores do nome e sobrenome do formulário
    var firstName = document.getElementById("name").value; // Corrigido o ID do campo de nome
    var lastName = document.getElementById("sobrename").value; // Corrigido o ID do campo de sobrenome
    
    // Exibindo o resultado na div de resultado
    document.getElementById("result").innerHTML = "Nome completo: " + firstName + " " + lastName;
});
