import './Navbar.scss'
import trollFace from '../assets/troll-face.png'

export default function Navbar() {
    return (
        <header>
            <img className="logo-img" src={trollFace} alt="Troll face" />
            <h2 className="logo-text">Meme Generator</h2>
            <h3 className="slogan">React Course - Project 3</h3>
        </header>
    )
}