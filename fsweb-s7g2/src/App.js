import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [uyeler, setUyeler] = useState([]);
  const [editId, setEditId] = useState(null);
  const handleEdit = (u) => {
    console.log(uyeler[u]);

  };

  return (
    <div className="App">
      <Form setUyeler={setUyeler} EditId={editId} uyeler={uyeler} />

      {uyeler.map((ü,u) => {
        return <div>
          <span>
            {ü.firstName + " " + ü.lastName}
          </span>
          <span>
            <button onClick={()=>handleEdit(u)}>Düzelt</button>
          </span>
        </div>

      })}


    </div>
  );
}

export default App;
