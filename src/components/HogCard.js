import React, {useState} from 'react'
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const imageMap = {
    augustus_gloop: augustus_gloop,
    babe: babe,
    bailey: bailey,
    cherub: cherub,
    galaxy_note: galaxy_note,
    leggo_my_eggo: leggo_my_eggo,
    peppa: peppa,
    piggy_smalls: piggy_smalls,
    piglet: piglet,
    porkchop: porkchop,
    trouble: trouble, 
    truffle_shuffle: truffle_shuffle
}

function HogCard({ hog }) {
    // console.log(imageMap)
    let [imageClicked, setImageClicked] = useState(false)

    const {name, specialty, greased, weight, "highest medal achieved": medal} = hog
    const imageFileName = name.split(" ").join("_").toLowerCase()
    const image = imageMap[imageFileName]

    function changeState() {
        setImageClicked(imageClicked => !imageClicked)
                console.log(imageClicked)
    }

    return (
        <div class = "ui eight wide column pigTile">
            <div class = "image">
                <h3>{name}</h3>
                <img onClick={changeState} src={image} alt="pig pic"></img>
            </div>
            {imageClicked ? <p>Specialty: {specialty}</p> : ""}
            {imageClicked ? <p>{greased ? 'Greased' : 'Nongreased'}</p> : ""}
            {imageClicked ? <p>Weight: {weight}</p> : ""}
            {imageClicked ? <p>Highest Medal Achieved: {medal}</p> : ""}

        </div>
    )
}

export default HogCard;