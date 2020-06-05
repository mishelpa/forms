import React, { Fragment, useState } from 'react';

const Formulario = () => {

    const [data, setData] = useState({
        name: '',
        lastName: ''
    })

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const setDatos = (e) => {
        e.preventDefault();
        console.log(data.name + ' ' + data.lastName);
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={setDatos}>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese nombre"
                    className="form-control"
                    type="text"
                    onChange={handleInputChange}
                    name="name"/>
                </div>
                <div className="col-md-3">
                    <input
                    placeholder="Ingrese apellido"
                    className="form-control"
                    type="text"
                    onChange={handleInputChange}
                    name="lastName"/>
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-warning">Enviar</button>
                </div>
            </form>
            <h3>{data.name} - {data.lastName}</h3>
        </Fragment>
    
    )
}

export default Formulario;