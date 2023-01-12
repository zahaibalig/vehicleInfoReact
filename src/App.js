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

   const {kjoretoyId , merke, handelsbetegnelse, kontrollfrist, sistGodkjent, registrertForstegangNorgeDato,} = tableData;
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
      <div >
        <h2>Enter the vehicle registration number</h2>
        <div className='inputDiv'>
          <input type="text" value={number} onChange={handleChange} />
          <button onClick={()=>{
            getVehivleInfo(number);
          }}>Submit</button>
      </div>
        
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
          <th>Handelsbetegnelse</th>
          <td>{handelsbetegnelse}</td>
        </tr>
        <tr>
          <th>Forstegangsregistrering</th>
          <td>{registrertForstegangNorgeDato}</td>
        </tr>
        <tr>
          <th>SistGodkjent</th>
          <td>{sistGodkjent}</td>
        </tr>
        <tr>
          <th>Kontrollfrist</th>
          <td>{kontrollfrist}</td>
        </tr>
      </table>
      </div>
    </div>
  );
}

export default App;


