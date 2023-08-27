import React, {  useState } from "react";

import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import axios from "axios";

function App() {
  const [data, setData] = useState({ headers: null, results: null });

  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    setRequestParams(requestParams);
    setLoading(true);
    axios
      .get(requestParams.url)
      .then((response) => {
        console.log("data", response);
        setData({ headers: response.headers, results: response.data });

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

//   useEffect(() => {
//     callApi(requestParams);
//     setLoading(false)
// }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading}  handleApiCall={callApi} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
