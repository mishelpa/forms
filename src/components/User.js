import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const User = () => {
    const {id} = useParams();
    const [pueblo, setPueblo] = useState([]);
    useEffect(()=> {
        const getPueblo = async() => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const infoPueblo = await data.json();
            setPueblo(infoPueblo);
        }
        getPueblo()
    }, [id])

    
    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.expansion}</p>
        </div>
    )
}