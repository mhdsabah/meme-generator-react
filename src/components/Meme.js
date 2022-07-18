import React from "react";



export default function Meme(){

    const [formData, setFormData] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    function handleChange(event){
        console.log(event.target)
        const {name ,value} = event.target
        setFormData(prevdata => ({
            ...prevdata,
            [name] : value
        }))
    }
    const [allMemes ,setAllMemes] = React.useState([])
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(
            data => setAllMemes(data.data.memes)
        //    data => console.log(data.data.memes)
        // )
    )},[])


    
        // console.log(allMemes[0])
    function getMemeImage() {
        const randomNum = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNum].url
        console.log(url)
        setFormData(prevdata => ({
            ...prevdata,
            randomImage : url
        }))

    }


    

    return (
        <main className="main-tag">
        <div className="meme-form">
            <input type = "text"
                placeholder = "Top sentence"
                className = "form-ip" 
                name = "topText"
                value = {formData.topText} 
                onChange = {handleChange}
            />
            <input type = "text" 
                placeholder="Bottom sentence" 
                className="form-ip"
                name = "bottomText"
                value = {formData.bottomText}
                onChange = {handleChange}
            />
            <button type="submit" className="form-btn"
            onClick={getMemeImage}
            >Get a new meme image 🖼</button>

        </div>
        <div className="meme">
                <img src={formData.randomImage} className="meme--image"  alt ="meme pic"/>
                <h2 className="meme--text top">{formData.topText}</h2>
                <h2 className="meme--text bottom">{formData.bottomText}</h2>
            </div>
        </main>

    )
}