import React, { useEffect, useReducer } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import axios from "axios";
import History from "./Components/History/History";
import { initState, actionType, reducer } from "./reducers/actions";
import { Link } from "react-scroll";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  // const [data, setData] = useState({ headers: null, results: null });
  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [history, setHistory] = useState([]);
  // const [rendetHistory, setRendetHistory] = useState(false);

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

          dispatch({
            type: actionType.HISTORY,
            payload: response,
          });

          // setHistory((History) => [...History, response]);
          dispatch({ type: actionType.RENDERHIS, payload: true });

          // setRendetHistory(true);
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
      {state.renderHis === true && (
        <div>
          <Link to="History" spy={true} smooth={true}>
        <button className="scroll">
            History
        </button>
          </Link>{" "}
        </div>
      )}
      <Form handleApiCall={callApi} dispatch={dispatch} />

      <Results
        id="scrollUp"
        data={state.data}
        loading={state.loading}
        handleApiCall={callApi}
        updateUrl={(newUrl) =>
          callApi({ method: state.requestParams.method, url: newUrl })
        }
      />

      <History
        history={state.history}
        renderHistory={state.renderHis}
        dispatch={dispatch}
        updateUrl={(newUrl) =>
          callApi({ method: state.requestParams.method, url: newUrl })
        }
      />

      <Footer />
    </React.Fragment>
  );
}

export default App;
