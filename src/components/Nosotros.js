import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

export const Nosotros = () => {

    const [equipo, setEquipo] = useState([]);
    useEffect(()=> {
        console.log('effect');
        getData();
    }, [])

    const getData = async() => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json();
        console.log(users.civilizations);
        setEquipo(users.civilizations);
        
    }
    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(user => (
                    <li key={user.id}>
                        <Link to={`/nosotros/${user.id}`}>
                        {user.name}
                        </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )
}