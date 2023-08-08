import { useState } from 'react'
import memesData from '../memesData'
import './Meme.scss'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
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
    return (
        <main>
            <form>
                <input type="text" placeholder="Top text" />
                <input type="text" placeholder="Bottom text" />
                <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
                <img src={meme.randomImage} />
            </form>
        </main>
    )
}