import React from 'react'

function FilterForm({ filteredPigs }) {

    function handleFilterGreased(event) {
        event.preventDefault()
        console.log("Child El - Filter", event.target.value)
        filteredPigs(event.target.value)
    }

    return (
        <select onChange={handleFilterGreased}
        value="Submit">
            <option>All Pigs</option>
            <option>Nongreased</option>
            <option>Greased</option>
        </select>
    )
}

export default FilterForm;
