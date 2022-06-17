import {useState} from 'react';

function Tabla({dataInput, setDataInput, datosFisicos}) {
    /*const [p1, setp1] = useState(0);
    const [p2, setp2] = useState(0);
    const [fob, setfob] = useState(0);
    const [pax, setpax] = useState(0);
    const [bag, setbag] = useState(0);
    const [tf, settf] = useState(0);

    const handleChange =(e) => {
        setp1(e.target.value);
    };*/

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDataInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

  return (
    <form>
    <table>
        <thead>
            <tr>
                <th colSpan='2'>MASA Y COMBUSTIBLE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <label for="p1">¿Cuánto pesas? [kg]</label>
                <td><input id='p1' name="p1" type='number' placeholder='70' min="0" onChange={handleChange}></input></td>
            </tr>

            <tr>
                <label for="p2">¿Y tu instructor? [kg]</label>
                <td><input id='p2' name="p2" type='number' placeholder='70' min="0" onChange={handleChange}></input></td>
            </tr>
            
            {!!datosFisicos.rpax1 &&
            <tr>
                <label for="rpax1">¿Y los pasajeros? [kg]</label>
                <td><input id='rpax1' name="rpax1" type='number' placeholder='70' min="0" value={dataInput.rpax1} onChange={handleChange}></input></td>
            </tr>
            }

            {!!datosFisicos.rpax2 &&
            <tr>
                <label for="rpax2">¿Y los pasajeros de atrás? [kg]</label>
                <td><input id='rpax2' name="rpax2" type='number' placeholder='70' min="0" value={dataInput.rpax2} onChange={handleChange}></input></td>
            </tr>
            }

            <tr>
                <label for="bag1">¿Y el equipaje en area 1? [kg]</label>
                <td><input id='bag1' name="bag1" type='number' placeholder='7' min="0" value={dataInput.bag1} onChange={handleChange}></input></td>
            </tr>

            {!!datosFisicos.bag2 &&
            <tr>
                <label for="bag2">¿Y el equipaje en area 2? [kg]</label>
                <td><input id='bag2' name="bag2" type='number' placeholder='7' min="0" value={dataInput.bag2} onChange={handleChange}></input></td>
            </tr>
            }
            
            {!!datosFisicos.bag3 && 
            <tr>
                <label for="bag3">¿Y el equipaje en area 3? [kg]</label>
                <td><input id='bag3' name="bag3" type='number' placeholder='7' min="0" value={dataInput.bag3} onChange={handleChange}></input></td>
            </tr>
            }

            {!!datosFisicos.bag4 &&
            <tr>
                <label for="bag4">¿Y el equipaje en area 4? [kg]</label>
                <td><input id='bag4' name="bag4" type='number' placeholder='7' min="0" value={dataInput.bag4} onChange={handleChange}></input></td>
            </tr>
            }

            {!!datosFisicos.oilna && 
            <tr>
                <label for="oilna">¿Cuánto aceite hay no añadido? [kg]</label>
                <td><input id='oilna' name="oilna" type='number' placeholder='7' min="0" value={dataInput.oilna} onChange={handleChange}></input></td>
            </tr>
            }     

            <tr>
                <label for="fob">¿Cuánto combustible llevas? [USG]</label>
                <td><input id='fob' name="fob" type='number' placeholder='30' min="0" value={dataInput.fob} onChange={handleChange}></input></td>
            </tr>

            {!!((datosFisicos.modelo === "DA40-180" ) || datosFisicos.modelo.includes("172")) &&
            <tr>
                <label for="tf">¿Cuál es tu Trip Fuel? [USG]</label>
                <td><input id='tf' name="tf" type='number' placeholder='11' min="0" value={dataInput.tf} onChange={handleChange}></input></td>
            </tr>
            }

        </tbody>
        </table>
        </form>
    

  );

};

export default Tabla;