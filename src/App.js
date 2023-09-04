import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function InputForm({inputName,inputEmail,onNameSelect,onEmailSelect}){
  return(
    <div> 
      <div className='name'>
        <label className='input-name'>Name:</label>
        <input className='input-name-value' type='text' value={inputName} onChange={(e)=>onNameSelect(e.target.value)}></input>
      </div>
      <div className='email'>
        <label className='input-email'>Email:</label>
        <input className='input-name-email' type='text' value={inputEmail} onChange={(e)=>onEmailSelect(e.target.value)}></input>
      </div>
    </div>
  )
}

function Submit({buttonSubmit,dataSet}){
  return(
    <div className='submit-button'> 
    <button type='button' onClick={buttonSubmit}>Submit</button>
      <div className='result-value'> 
        <span className='result-name'>{dataSet.inputName}</span>
        <span className='result-email'>{dataSet.inputEmail}</span>
      </div>
    </div>
  )
}


function App() {
  const [inputName,setInputName] =useState('')
  const [inputEmail,setInputEmail] =useState('')
  const [dataSet,setData]=useState({inputName:'',inputEmail:''})

  function buttonSubmit(){
    setData({inputName,inputEmail})
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>MY First React Form</h1>
        </div>
        <form className='info'>
          <InputForm
            inputName={inputName}
            inputEmail={inputEmail}
            onNameSelect={setInputName}
            onEmailSelect={setInputEmail}
          />
          <Submit
            buttonSubmit={buttonSubmit}
            dataSet={dataSet}
          />
        </form>
      </header>
    </div>
  );
}



export default App;
