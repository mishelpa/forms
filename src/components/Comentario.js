import React, { Fragment } from 'react';

export const Comentario = ({sujeto}) => {
    return (
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
            <div className="media">
                <img className="mr-3" src={sujeto.urlImagen} alt=""/>
                <div className="media-body">
                <h5>{sujeto.nombre}</h5>
                {sujeto.texto}
                </div>
            </div>
        </Fragment>
    )
}