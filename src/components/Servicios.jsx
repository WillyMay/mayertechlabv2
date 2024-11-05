import React from "react";
import Modal from "./Modal";

function Servicios(props) {
  const servicios = props.services;
  return (
    <div>
      <h1 className="text-center text-3xl md:text-5xl font-bold my-5">
        ¡Conoce nuestros servicios!
      </h1>
      <ul className="flex flex-wrap justify-center mt-10 gap-10 ">
        {servicios.map((item) => (
          <li key={item.id}>
            <div
              className="card bg-base-100 w-60 shadow-xl my-10"
              key={item.id}
            >
              <figure>
                <img src={item.imgUrl} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.summary}</p>
                <div className="card-actions justify-end">
                  <Modal description={item} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Servicios;
