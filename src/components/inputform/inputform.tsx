
import React, { useState } from 'react';
import Form from './inputformComp';

type FormEvent = React.FormEvent<HTMLFormElement>;


const FormView: React.FC = (props) => {
  const [state, setState] = useState("");
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ state });
  };
  return (
    <Form
      state={state}
      setState={setState}
      handleOnSubmit={handleOnSubmit}
      placeholder="Type some letters"
    />
  ); 
};
export default FormView;