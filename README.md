# meu-diario-da-reprograma
![Badge em Desenvolvimento](https://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)

## Introdução ao React  

<img src="https://media3.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b952889e8bbdf7c34930d8f7358f43a5d58dd1fffdcf&rid=giphy.gif&ct=s" width="250" height="250">

Oiê!!! Estamos na Semana 14 do Bootcamp "Todas em Tech" da **{Reprograma}**. Nossa profa da semana é a maravilhosa **Simara Conceição** que veio para nos trazer o
conhecimento sobre **React**.

## Conteúdo
Na aula de domingo (26/06), vimos os seguintes conceitos para podermos desenvolver o projeto da semana e praticarmos:
* O que é o  React.
* Noje.js
* Vite
* Projeto em React com vite
* Componentes 
* Props

## Tarefa
O objetivo da tarefa da semana era desenvolvermos uma interface sendo um diário, onde nos apresentamos e depois falamos sobre 4 assuntos que aprendemos no decorrer do
bootcamp. Escolhi falar um pouco de como foi aprender sobre **git e github**, **responsividade**, **lógica/Js** e **API**. 
Precisávamos fazer componentes para guardar o código e através do props ou children podemos reutilizar o componente para informações diferentes. 

## Meu Diário
Para o meu diário consegui realizar tudo de forma tranquila, mas travei na hora de estilizar. Então, decidi ir em busca através de pesquisa e fiz a parte do CSS
também por props. Abaixo segue um exemplo de como fiz o componente Image e deixei o atributo className com props e pude reutilizar em duas partes da interface com
estilizações diferentes e conteúdos também. 

```
function Image(props) {
    return (
        <img className={props.imgclass} src={props.image}/>
    )
}

export default Image
```

## Resultado
Abaixo dá pra conferir como ficou o projeto finalizado.

![Diário_da_Reprograma_Trim_AdobeExpress](https://user-images.githubusercontent.com/67487460/177020151-8833c84a-fa84-457e-9f8f-3ff14199115e.gif)
