import React, { Fragment } from 'react';
import { useForm } from "react-hook-form";

const FormHook = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }
    
  return (
    <Fragment>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text"
          name="name"
          ref={register({
              required: {value: true, message: 'Obligatorio'},
              maxLength: {
                  value: 5, 
                  message: 'No más de 5 carácteres!'
                  },
              minLength: {
                  value: 2, 
                  message: 'Mínimo 2 carácteres'
                  }
          })}
          className="form-control my-2"
          id="name"/>
          <span className="text-danger text-small d-block mb-2">
          {errors.name && errors.name.message}
          </span>
          <button className="btn btn-warning">Enviar</button>
      </form>
    </Fragment>
    )
}

export default FormHook;