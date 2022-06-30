import Image from './Image'
import Paragraph from './Paragraph'

function Profile() {
    return (
        <div className='profile-container'>
            <Image imgclass="profile-img" image="../../images/eu.jpg"/>
            <Paragraph classparagraph="fir-paragraph">Oie! Muito prazer, eu sou Lara.</Paragraph>
            <Paragraph classparagraph="sec-paragraph">
                Paraense, bacharela em arquitetura e urbanismo, taurina e mulher trans. Atualmente 
                em um processo de transição de carreira e podendo ser aluna da Reprograma, através
                do Bootcamp "Todas em Tech" que vem para inserir mais mulheres no mercado de tecnologia.
            </Paragraph>
        </div>
    )
}

export default Profile