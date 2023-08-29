import "./History.scss";
import JSONPretty from "react-json-prettify";

function History({ history, method, url, renderHistory }) {
  return (
    <section>
      {renderHistory === true && (
        <div>
          <h2>History</h2>
          {history.map((item, index) => (
            <div key={index}>
              <h3>Request {index + 1}</h3>

              <div>Request Method: {method}</div>
              <div>URL: {url}</div>

              <div>
                <h4>Headers:</h4>
                <JSONPretty json={item.headers} />
              </div>
              <div>
                <h4>Results:</h4>
                <JSONPretty json={item.data} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default History;

