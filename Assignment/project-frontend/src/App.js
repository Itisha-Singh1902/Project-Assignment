import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardList from './components/CardList';
function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get(`http://localhost:8000`);
      setData(response.data);
    }
    getData(); 
  },[]);
  useEffect(()=>{
    console.log(data);
  },[data]);
  return (
    <>
      <CardList data={data}/>
    </>
  );
}

export default App;
