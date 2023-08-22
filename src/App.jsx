import React, { useState } from 'react';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';
// import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";







function App() {

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const[data, setData] = useState(null)
const[requestParams, setRequestParams] = useState({})




  const callApi = (requestParams) => {
    // mock output
// if(requestParams.method === 'GET'){

  axios.get(requestParams.url)
.then(response => {
 console.log('Data:', response.data);
 setData( response.data)
 setLoading(loading)
})
.catch(error => {
 console.error('Error:', error);
});  
 setRequestParams(requestParams)

// } else if(requestParams.method === 'POST'){
//   const obj = {
//     name: singleExercise.bodyPart,
//     equipment: singleExercise.equipment,
//     gifUrl: singleExercise.gifUrl,
//     exercise_name: singleExercise.name,
//     exercise_target: singleExercise.target,
//     week_day: comment
//   }
//   axios.post(`https://reacters-fitness.onrender.com/schedule`, obj).then(res => console.log(res.data)).catch(err => { console.log(err) })
// }

  }

 
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />

  <div className="sweet-loading">
    <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
    <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
  </div>
      </React.Fragment>
      
    );
  }


export default App;



   // const mockData = {
    //   count: 2,
    //   results: [
    //     {name: 'fake thing 1', url: 'http://fakethings.com/1'},
    //     {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    //   ],
    // };