import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";

export const Example1 = () => {

const { register, handleSubmit, errors } = useForm();
const [entradas, setEntradas] = useState([]);
const onSubmit = (data, e) => {
    console.log(entradas);
    setEntradas([
        ...entradas, data
    ])
    e.target.reset();
}
return (
   <Fragment>
       <h1>Ejemplo 1</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
           <input 
           type="text"
           name="title"
           placeholder="Ingrese titulo"
           className="form-control my-2"
           ref={
               register({
                   required: {value: true, message: "Campo Obligatorio"},
                   minLength: {value: 2, message: "Minimo 2 letras"}
               })
           }
           />
           <span className="text-danger text-small d-block mb-2">
               {errors.title && errors.title.message}
           </span>
           <input 
           type="text"
           name= "message"
           placeholder="Ingrese descripción"
           className="form-control my-2"
           ref={
            register({
                required: {value: true, message: "Campo Obligatorio"},
                minLength: {value: 2, message: "Minimo 2 letras"}
            })
            }
           />
           <span className="text-danger text-small d-block mb-2">
               {errors.message && errors.message.message}
           </span>
           <button className="btn btn-warning">Agregar</button>
       </form>
       <ul>
           {
               entradas.map(item => 
               <li>{item.title} - {item.message}</li>
                )
           }
       </ul>
    </Fragment> 
)

}