function Tabla() 
{
  return (
    <table>
        <thead>
            <tr>
                <th colspan='2'>MASA Y COMBUSTIBLE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>¿Cuánto pesas? [kg]</td>
                <td><input id='p1' type='number' placeholder='70'></input></td>
            </tr>
            <tr>
                <td>¿Y tu instructor? [kg]</td>
                <td><input type='number' placeholder='70'></input></td>
            </tr>
            <tr>
                <td>¿Y los pasajeros? [kg]</td>
                <td><input type='number' placeholder='70'></input></td>
            </tr>
            <tr>
                <td>¿Y el equipaje? [kg]</td>
                <td><input type='number' placeholder='7'></input></td>
            </tr>
            <tr>
                <td>¿Cuánto combustible llevas? [USG]</td>
                <td><input type='number' placeholder='30'></input></td>
            </tr>
            <tr>
                <td>¿Cuál es tu Trip Fuel? [USG]</td>
                <td><input type='number'></input></td>
            </tr>
        </tbody>
    </table>
  );
};

export default Tabla;