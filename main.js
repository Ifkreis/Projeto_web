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


function Novo_Aluno(){
    
        var navElement = document.createElement("nav");
        var mainElement = document.createElement("main");
        var h3Element = document.createElement("h3");
        var aSemestreElement = document.createElement("a");
        var aCursoElement = document.createElement("a");
        var sectionElement = document.createElement("section");
        var buttonElement = document.createElement("button");
  
        sectionElement.appendChild(buttonElement);
        mainElement.appendChild(h3Element);
        mainElement.appendChild(aSemestreElement);
        mainElement.appendChild(aCursoElement);
        mainElement.appendChild(sectionElement);
        navElement.appendChild(mainElement);
  
        h3Element.className = "Nome_Aluno";
        h3Element.id = `${teste}`;
        aSemestreElement.className = "Semestre_Aluno";
        aCursoElement.className = "Curso_Aluno";
        sectionElement.className = "Article_Button";
        buttonElement.className = "Button_Informacoes_Aluno";
        buttonElement.id = `${teste}`;
        buttonElement.onclick = "Exibir_Informacoes()";
  
        h3Element.textContent = "MIKAEL";
        aSemestreElement.textContent = "SEMESTRE: 4° semestre";
        aCursoElement.textContent = "CURSO: licenciatura em ciencias da computação";
        buttonElement.textContent = "INFORMAÇOES DO ALUNO";
  
        document.body.appendChild(navElement);
}
