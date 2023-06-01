



function Exibir_Informacoes(){
    const Popup = document.querySelector(".Popup");
    Popup.style.display === "none" ? Popup.style.display = "none" : Popup.style.display = "flex";
    let Nome_Imprimir=document.querySelector('.Nome_Aluno_Popup');


    
    let Nome = 'Mikael';
    Nome_Imprimir.textContent = Nome;
    let Curso = 'LCC';
    let Ano_Ingresso = '2021.1'
    let Infomacoes = 'informaçoes sobre o aluno irá aparecer aqui';
}
