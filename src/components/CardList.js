import React from "react";
import Card from "./Card";
import {robots} from '../robots';


const CardList  = ({robots}) =>{
    if (false){
        throw new Error('noooooooooooo');
    }else{
    return (
        <div>
        {robots.map((user, i) => { 
        return <Card key={i} username={robots[i].username} name={robots[i].name} email={robots[i].email} />
    })} 
    </div>
    );
}
}

export default CardList
