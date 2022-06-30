import Image from './Image'
import Paragraph from './Paragraph'

function Subjects() {
    return (
        <>
            <div className='first-sub'>
                <div className='first-icon'>
                    <Image imgclass="icons-props" image="../../images/github.svg"/>
                    <Paragraph classparagraph="fir-paragraph">Github</Paragraph>
                </div>
                <Paragraph classparagraph="just-parag">
                    De cara a gente entra no site e tem um gatinho bem fofinho como simbolo do site,
                    mas ninguém te avisa que vai ser só ladeira abaixo.
                    Vai precisar baixar um tal de gitbash, onde nele vais digitar comandos que vão dar
                    inúmeros erros e tu vais ficar te perguntando, "Ó Senhor, porque me colocaste nesse
                    mundinho para sofrer?". Depois de muito sofrer e ficar lembrando do processo: git
                    status, git add ., git status (pra ter certeza de que o add deu certo), git commit,
                    git log (pra ter certeza que o commit deu certo), git push origin... Daí deu certo (ou
                    acho que deu).
                </Paragraph>
            </div>
            <div className='secn-sub'>
                <div className='first-icon'>
                    <Image imgclass="icons-props" image="../../images/responsivo.png"/>
                    <Paragraph classparagraph="fir-paragraph">Responsividade</Paragraph>
                </div>
                <Paragraph classparagraph="just-parag secn-parag">
                    Uhuuuuu!!! Consegui aprender git, github e também até que me saí bem em
                    html e css, até por já ter visto sobre antes e ter estudado por conta própria.
                    Mas a vida, não contente em me deixar nesta linda zona de conforto, decidiu trazer
                    um docinho de coco chamado RESPONSIVIDADE, que é uma forma de deixar o projeto
                    disponível para variados tipos de telas não se fixando apenas em telas de computador,
                    agora tenho que reorganizar tudo pra ficar visível em mobile e tablets.
                    É bem divertido quando vai diminuindo a tela no inspecionar e tudo fica fora do lugar.
                    Eu ajeito um parágrafo e a imagem fica distorcida, ajeito a imagem e o nav decidi ficar
                    "bugado". 
                </Paragraph>
            </div>
            <div className='first-sub'>
                <div className='first-icon'>
                    <Image imgclass="icons-props" image="../../images/lógica.png"/>
                    <Paragraph classparagraph="fir-paragraph">Lógica e Js</Paragraph>
                </div>
                <Paragraph classparagraph="just-parag">
                    Quando eu pensei que as coisas já estavam complicadas o suficiente, comecei a estudar
                    lógica e intro a Javascripto (aqui nasce o caos). O pior é que eu não consegui
                    acompanhar a aula da incrível profs Aline, pois foi em um sábado e eu tinha que
                    cumprir meu papel de proletariada e fui trabalhar. Então tive que assistir a aula
                    já gravada, tive que assistir umas 4x pra poder entender por que o i tem ++ e confesso
                    que ainda não entendi muito bem não (kkk- rindo de nervosa). E teve ternário e operadores
                    lógicos e eu procrástinei por achar que não conseguir entregar a atividade da semana, mas
                    consegui entregar sim. Com muito desespero, consegui entregar.
                </Paragraph>
            </div>
            <div className='secn-sub'>
                <div className='first-icon'>
                    <Image imgclass="icons-props" image="../../images/api.png"/>
                    <Paragraph classparagraph="fir-paragraph">API</Paragraph>
                </div>
                <Paragraph classparagraph="just-parag secn-parag">
                    Aprender a buscar informações que estão em um outro local e aí usa métodos de 
                    array e chora e dá erro e a imagem não aparece e aí usa desestruturação e nada da 
                    certo, maaaaas eu reassisto a aula da Lilit Maravilha e percebo que só o que me
                    faltava era ter um pouquinho mais de paciência comigo e com o processo também. É só
                    o começo e eu vou chegar lá, vou sim. É tudo uma questão de tempo.
                </Paragraph>
            </div>
        </>
    )
}

export default Subjects 