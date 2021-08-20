import axios from "axios";
import React, { useEffect, useState } from "react";

const Interfaz2 = () => {
  const [options, setOptions] = useState("");
  const [obj, setObj] = useState("");
  const [id, setId] = useState("");
  const [newData, setNewData] = useState("");
  const [error, setError] = useState("");

  const getApi = (e) => {
    e.preventDefault();
    axios
      .get(`https://swapi.dev/api/${options}/${id}`)
      .then((res) => setNewData(Object.entries(res.data)))
      .catch((err) =>
        setError("Estos no son los droides que estas buscando " + err)
      );
  };

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/`)
      .then((res) => setObj(Object.entries(res.data)));
  }, []);

  return (
    <div className="form-control my-5">
      <div className="form-control my-2">
        <label className="form-label" htmlFor="busqueda">
          {" "}
          Opciones de Busqueda{" "}
        </label>
        <select
          className="form-select"
          onChange={(e) => setOptions(e.target.value)}
          name="busqueda"
          id="busqueda"
        >
          {obj
            ? obj.map((item, index) => {
                return (
                  <option key={index} value={item[0]}>
                    {item[0]}
                  </option>
                );
              })
            : ""}
        </select>
      </div>
      <div className="form-control my-2">
        <label className="form-label" htmlFor="id">
          Ingrese un numero de id:
        </label>
        <input
          className="form-number"
          onChange={(e) => setId(e.target.value)}
          type="number"
        />
      </div>
      <button className="btn btn-primary" onClick={getApi}>
        Get Datos
      </button>
      <p>{options}</p>
      <p>{id}</p>
      {newData
        ? newData.map((item, index) => {
            return (
              <div>
                <p key={index}>{item[0]}</p>
                <p key={index}>{item[1]}</p>
                <p key={index}>{item[2]}</p>
                <p key={index}>{item[3]}</p>
              </div>
            );
          })
        : ""}
      {error ? <p>{error}</p> : ""}
    </div>
  );
};

export default Interfaz2;
