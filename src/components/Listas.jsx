import { useEffect, useState } from 'react';


function Listas({data, datosFisicos, setDatosFisicos}) {

  //const [matriculas, setMatriculas] = useState(null);
  const [modelo, setModelo] = useState("Cessna 172");
  const [matricula, setMatricula] = useState("DZF");

  const modelos = Object.keys(data);

  const handleChange = (e) => {
    const {name, value} = e.target;
    if (value === "---") {
      return
    }
    if (name === "modelo") {
    setModelo(value);
    setMatricula(Object.keys(data[value].MATRICULAS)[0]);
    } else {
    setMatricula(value);
    };
  };

  useEffect(() => {
  
    setDatosFisicos({
      bag1: data[modelo].MBDATA.bag1,
      bag2: data[modelo].MBDATA.bag2,
      bag3: data[modelo].MBDATA.bag3,
      bag4: data[modelo].MBDATA.bag4,
      fob: data[modelo].MBDATA.fob,
      fpax: data[modelo].MBDATA.fpax,
      oilna: data[modelo].MBDATA.oilna,
      rpax1: data[modelo].MBDATA.rpax1,
      rpax2: data[modelo].MBDATA.rpax2,
      cg: data[modelo].MATRICULAS[matricula].CG,
      modelo: data[modelo].MATRICULAS[matricula].MODELO,
      momento: data[modelo].MATRICULAS[matricula].MOMENTO,
      peso: data[modelo].MATRICULAS[matricula].PESO
    });
  }, [matricula, modelo, setDatosFisicos, data]);

  /*useEffect(() => {
    console.log(datosFisicos.rpax1);
    console.log(datosFisicos.cg);
  }, [datosFisicos]);*/

  if (!data) return <div>Loading...</div>
  if (!matricula) return <div>Cargando...</div>
  
  // console.log(data[modelos[modelos.indexOf(modelo)]])

  return (
          <div>
              <div>
                  <label for="Modelo">Elije el modelo: </label>
                  <select name="modelo" onChange={handleChange}>
                  <option value="---">---</option>
                    {Object.keys(data).map(val => (
                      <option value={val}>{val}</option>
                    ))}
                  </select>
              </div>
              <div>
                  <label for="Matricula">Elije la matricula: </label>
                  <select name="matricula" onChange={handleChange}>
                    <option value="---">---</option>
                    {Object.keys(data[modelos[modelos.indexOf(modelo)]]["MATRICULAS"]).map(val => (
                      <option value={val}>{val}</option>
                    ))}
                  </select>
              </div>
             <></>
      </div>
      
      );
      
}

export default Listas;
