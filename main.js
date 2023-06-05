



function Exibir_Informacoes(){
    const Popup = document.querySelector(".Popup");
    Popup.style.display === "none" ? Popup.style.display = "none" : Popup.style.display = "flex";
    let Nome_Imprimir=document.querySelector('.Nome_Aluno_Popup');
    let Curso_Imprimir=document.querySelector('.Curso_Aluno_Popup');
    let Ano_Ingresso_Imprimir=document.querySelector('.Ano_Aluno_Popup');
    let Informacoesgit_Imprimir=document.querySelector('.Informacao_Aluno_Popup');


    
    let Nome = 'Mikael';
    Nome_Imprimir.textContent = Nome;
    let Curso = 'LCC';
    Curso_Imprimir.textContent = Curso;
    let Ano_Ingresso = '2021.1'
    Ano_Ingresso_Imprimir.textContent = Ano_Ingresso;
    let Infomacoes = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    Informacoesgit_Imprimir.textContent = Infomacoes;
}
