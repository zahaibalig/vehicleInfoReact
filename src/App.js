import React , {useState} from 'react';
import './App.css';

function App() {
   const [number , setNumber] = useState("");
   const [tableData , setTableData] = useState({
    kjoretoyId:{kjennemerke:"", understellsnummer:""}, 
    kodeBeskrivelse:"", 
    merke:[{merke:""}],
    handelsbetegnelse:"",
    kontrollfrist:"",
    sistGodkjent:""
  });

   const {kjoretoyId , merke, handelsbetegnelse, kontrollfrist, sistGodkjent} = tableData;
  const getVehivleInfo = (number) => {
    fetch(
      `http://localhost:8000/?number=${number}`,     
    )
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
        console.log(tableData);
      })
      .catch((err) => console.log(err));
    }

const handleChange = (e) => {
  setNumber(e.target.value);
}

  return (
    <div className="App">
        <text>Enter the Vehicle registration number</text>
        <div>
          <input type="text" value={number} onChange={handleChange} />
          <button onClick={()=>{
            getVehivleInfo(number);
          }}>Submit</button>
        
      <table>
        <tr>
          <th>Kjennemerke</th>
          <td>{kjoretoyId.kjennemerke}</td>
        </tr>
        <tr>
          <th>Understellsnummer</th>
          <td>{kjoretoyId.understellsnummer}</td>
        </tr>
        <tr>
          <th>Merke</th>
          <td>{merke[0].merke}</td>
        </tr>
        <tr>
          <th>handelsbetegnelse</th>
          <td>{handelsbetegnelse}</td>
        </tr>
        <tr>
          <th>sistGodkjent</th>
          <td>{sistGodkjent}</td>
        </tr>
        <tr>
          <th>kontrollfrist</th>
          <td>{kontrollfrist}</td>
        </tr>
      </table>
      </div>
    </div>
  );
}

export default App;


