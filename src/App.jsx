import Tabla from './components/Tabla.jsx';
import Listas from './components/Listas.jsx';
import Calculos from './components/Calculos.jsx';
import { ref, child, get } from "firebase/database";
import db from './firebase';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState(null);
  var isdata = 0;
  isdata = 1;

  const [dataInput, setDataInput] = useState({
    p1: 0,
    p2: 0,
    bag1: 0,
    bag2: 0,
    bag3: 0,
    bag4: 0,
    fob: 0,
    oilna: 0,
    rpax1: 0,
    rpax2: 0,
    tf: 0
});

const [datosFisicos, setDatosFisicos] = useState({

    bag1: 0,
    bag2: 0,
    bag3: 0,
    bag4: 0,
    fob: 0,
    fpax: 0,
    oilna: 0,
    rpax1: 0,
    rpax2: 0,
    cg: 0,
    modelo: "",
    momento: 0,
    peso: 0
});

  useEffect(() => {
    const dbRef = ref(db);

    get(child(dbRef, `AERONAVES`)).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
        console.log(data)

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [isdata]);

  // console.log(data);

  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Listas data = {data} datosFisicos={datosFisicos} setDatosFisicos={setDatosFisicos}/>     
      <Tabla dataInput={dataInput} setDataInput={setDataInput} datosFisicos={datosFisicos}/>
      <Calculos dataInput={dataInput} datosFisicos={datosFisicos}/>
    </div>
  );
}

export default App;