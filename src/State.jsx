import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alif');

  const handleCountTambah = () => {
    setCount(count + 1)
  }

  const handleCountKurang = () => {
    setCount(count - 1)
  }

  
  const handleNameChange = () => {
    setName('Daffa')
  }



  return <div>
    <h1 className="text-lg font-bold">{count}</h1>
    <button className="btn bg-blue-500" onClick={handleCountTambah}>Tambah 1</button><br></br>
    <button className="btn bg-blue-500" onClick={handleCountKurang}>Kurang 1</button><br></br>
    <button className="" onClick={handleNameChange}>Hallo Nama saya :  {name}</button>
  </div>;
};

export default State;
