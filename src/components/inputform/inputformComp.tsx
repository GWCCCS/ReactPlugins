import React, { ChangeEvent, FormEvent } from "react";

type InputEvent = ChangeEvent<HTMLInputElement>;

interface ContainerProps {property1 : any, property2 : any, property3: any}

const Form: React.FC<ContainerProps> = (props) => {
  const [property1, setProperty1] = React.useState(props.property1);
  const [property2, setProperty2] = React.useState(props.property2);
  const [property3, setProperty3] = React.useState(props.property3);

  const updateData = (e: FormEvent) => {
      e.preventDefault();
      console.log({property1},{property2},{property3});
  }

  return (
    <form onSubmit={updateData}>
      <input
        type="text"
        value={property1}
        onChange={(e: InputEvent) => setProperty1(e.target.value)}
      />
      <input
        type="text"
        value={property2}
        onChange={(e: InputEvent) => setProperty2(e.target.value)}
      />    
      <input
        type="text"
        value={property3}
        onChange={(e: InputEvent) => setProperty3(e.target.value)}
      />            
      <button type="submit">Submit</button>
      Property 1 is {property1}
    </form>
  );
};

export default Form;