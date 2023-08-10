import { useState } from 'react'
import memesData from '../memesData'
import './Meme.scss'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage(e) {
        e.preventDefault()
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
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