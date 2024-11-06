import React, { useState } from "react";
import Modal from "./Modal";
import Card from "./Card";

function Servicios(props) {
  const servicios = props.services;
  const [modal, setModal] = useState(servicios);

  return (
    <div>
      <h1 className="text-center text-3xl md:text-5xl font-bold my-5">
        ¡Conoce nuestros servicios!
      </h1>
      <ul className="flex flex-wrap justify-center mt-10 gap-10 ">
        {modal.map((item) => {
          return(<Card key={item.id} id={item.id} name={item.name} summary={item.summary} description={item.description} imgUrl={item.imgUrl}/>)
        })}
      </ul>
    </div>
  );
}

export default Servicios;
