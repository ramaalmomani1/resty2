import { useState } from "react";
import "./Results.scss";
import JSONPretty from "react-json-prettify";

function Results(props) {
  const [method, setMethodd] = useState("GET");
  const [url, setUrll] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    // e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
    setMethodd("GET");
  };

  return (
    <section>
      {props.loading ? (
        <div>Loading...</div>
      ) : (
        <pre>
          {props.data.headers !== null && (
            <div>
              <h3>Headers:</h3>
              <JSONPretty json={props.data.headers} />
            </div>
          )}

          {props.data.results !== null && (
            <div>
              <h3>Results:</h3>
              <JSONPretty
                json={props.data.results}

              />

              {props.data.results.previous !== null && (
                <button
                  onClick={() => {
                    setUrll(props.data.results.previous);
                    props.handleApiCall({ method: method, url: props.data.results.previous });
                    handleSubmit();
                  }}
                >
                  Previous
                </button>
              )}
              {props.data.results.next !== null && (
                <button
                  onClick={() => {
                    setUrll(props.data.results.next);
                    props.handleApiCall({ method: method, url: props.data.results.next });
                    handleSubmit();
                  }}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </pre>
      )}
    </section>
  );
}

export default Results;
