import Title from './Title'
import Image from './Image'

function Navbar() {
    return (
        <div className='nav-bar'>
            <Image imgclass="nav-img" image="../../images/nav-img.png"/>
            <Title titleclass="title">Meu Diário da Reprograma</Title>
            <Image imgclass="nav-img" image="../../images/nav-img.png"/>
        </div>
    )
}

export default Navbar