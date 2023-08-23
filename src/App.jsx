import React, { useState } from 'react';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

function App() {

 const[data, setData] = useState(null)
const[requestParams, setRequestParams] = useState({})
const [loading, setLoading] = useState(false);



  const callApi = (requestParams) => {

  setLoading(true);
  axios.get(requestParams.url)
.then(response => {
 console.log('Data:', response.data);
 setData( response.data)

})
.catch(error => {
 console.error('Error:', error);
});  
 setRequestParams(requestParams)
 setLoading(false);



  }

 
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loading = {loading} />
        <Footer />
      </React.Fragment>
      
    );
  }


export default App;


