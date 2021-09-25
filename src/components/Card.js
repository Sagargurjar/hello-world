import React from "react";

const Card = ( { name, email, username } ) => {
    return(
     <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
<img src={`https://robohash.org/${username}?100x100`} alt="robo" />
<div className='tc f7 1h-copy'>
    <h2>{name}</h2>
    <p >{email}</p>
</div>
     </div>
    );
}

export default Card