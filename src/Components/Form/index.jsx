import { useState } from 'react';
import './Form.scss';

function Form (props) {
  
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  
  const handleMethodChange = (newMethod) => {
    setMethod(newMethod);
  };

  // const handleUrlChange = (newUrl) => {
  //   setUrl(newUrl);
  // };


  const handleSubmit = e => {
    console.log(e)
    e.preventDefault();
    const formData =  {
      method: method,
      url: url,
    };
    props.handleApiCall(formData); 
    // setUrl(url)
  }

  
  return (
    <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' 
           value={url} // Binding input value to the state
             onChange={(e) => setUrl(e.target.value)} 
            />

            <button type="submit">GO!</button>
          </label>
          <label className="methods">
{/* 
            <button type="submit" onClick={() => handleSubmit(setMethod('GET'))}> GET </button>
            <button type="submit" onClick={() => handleSubmit(setMethod('POST'))}> POST </button>
            <button type="submit" onClick={() => handleSubmit(setMethod('PUT'))}> PUT </button>
            <button type="submit" onClick={() => handleSubmit(setMethod('DELETE'))}> DELETE </button> */}


            <button type="submit" onClick={() => handleMethodChange('GET')}> GET </button>
            <button type="submit" onClick={() => handleMethodChange('POST')}> POST </button>
            <button type="submit" onClick={() => handleMethodChange('PUT')}> PUT </button>
            <button type="submit" onClick={() => handleMethodChange('DELETE')}> DELETE </button>


          </label>
        </form>

        <label>Post and update</label>
       <textarea id="myTextarea" name="comments" rows="4" cols="50" placeholder = 'Json format' >
     
    </textarea>
      </>
    );
  }
  
  
  export default Form;