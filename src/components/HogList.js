import React, {useState} from 'react';
import HogCard from './HogCard';
import FilterForm from './FilterForm'


function HogList({hogs}) {

    const [pigArray, setPigArray] = useState(hogs)
    const [showGreased, setShowGreased] = useState(false)

    // function filteredPigs(event) {
    //     console.log("Filter Pigs", event)
    //     hogs.map((hog) => console.log(hog))
    //     if (event === "Greased" && hog.greased === true) {
    //         const newArr = [...hogs]
            // const newPigArray = hogs.filter((hog) => 
            
            // setPigArray(newPigArray))
            //  }
            
            
        //     [hogs.greased]
            // console.log(hogs)
        // hogs.filter((hog) => (showGreased ? hog.greased : true))

        // }
    function filteredPigs(event) {

        if (event === "Greased") {
            hogs.filter((hog) => {
            if (hog.greased === true) {
                
            }
        })
    }
}

    return (
        <div class = "ui three stackable cards">
            <FilterForm filteredPigs={filteredPigs} />
            {pigArray.map((hog) => <HogCard key={hog.name} hog={hog} />)}
        </div>
    )
}

export default HogList;