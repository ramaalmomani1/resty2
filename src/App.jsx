import React, { useEffect, useReducer, useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import axios from "axios";
import History from "./Components/History/History";
import { initState, actionType, reducer } from "./reducers/actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  // const [data, setData] = useState({ headers: null, results: null });

  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [rendetHistory, setRendetHistory] = useState(false);

  const callApi = (requestParams) => {
    dispatch({ type: actionType.REQUEST_PARAMS, payload: requestParams });
    dispatch({ type: actionType.LOADING, payload: true });

    // setRequestParams(requestParams);
    // setLoading(true);
  };

  useEffect(() => {
    if (state.requestParams.url) {
      dispatch({ type: actionType.LOADING, payload: true });

      // setLoading(true);
      axios
        .get(state.requestParams.url)
        .then((response) => {
          console.log("data", response);
          // setData({ headers: response.headers, results: response.data });
          dispatch({
            type: actionType.DATA,
            payload: { headers: response.headers, results: response.data },
          });

          setHistory([response]);
          //  setHistory([{ headers: response.headers, results: response.data }]);
          setRendetHistory(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          dispatch({ type: actionType.LOADING, payload: false });
          // setLoading(false);
        });
    }
  }, [state.requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} dispatch={dispatch} />

      <Results
        data={state.data}
        loading={state.loading}
        handleApiCall={callApi}
        updateUrl={(newUrl) =>
          callApi({ method: state.requestParams.method, url: newUrl })
        }
      />

      <History
        history={history}
        method={state.requestParams.method}
        url={state.requestParams.url}
        rendetHistory={rendetHistory}
      />

      <Footer />
    </React.Fragment>
  );
}

export default App;
