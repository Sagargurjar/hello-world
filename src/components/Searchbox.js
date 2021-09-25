import React from "react";

const Searchbox = ({ searchfield, searchChange }) =>{
    return(
        <input type="search" 
        className='pa3 ba b--green bg-lightest-blue' 
        placeholder='Search Robot'
        onChange ={searchChange}
        />
    )
}

export default Searchbox