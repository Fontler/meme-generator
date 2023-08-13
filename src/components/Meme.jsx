import { useState, useEffect } from 'react'
import './Meme.scss'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: 'Top text',
        bottomText: 'Bottom text',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })
    const [allMemes, setAllMeme] = useState([])

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(resData => setAllMeme(resData.data.memes))
    }, [])

    function getMemeImage(e) {
        e.preventDefault()
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevChange => ({
            ...prevChange,
            [name]: value
        }))
    }

    return (
        <main>
            <form>
                <input 
                    type="text"
                    name="topText"
                    value={meme.topText} 
                    placeholder="Top text"
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="bottomText" 
                    value={meme.bottomText}
                    placeholder="Bottom text"
                    onChange={handleChange} 
                />
                <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
                <div className="meme">
                    <img src={meme.randomImage} />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </form>
        </main>
    )
}