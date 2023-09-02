import { Link } from "react-scroll";
import "./History.scss";
// import JSONPretty from "react-json-prettify";

function History({ history, renderHistory, updateUrl }) {
  return (
    <section id="History">
      {renderHistory === true && (
        <div>
          <h2>History</h2>
          {history.map((item, index) => (
            <div key={index}>
              {console.log("this is from history", item.config)}
              <h3>Request {index + 1}</h3>

              <div>Request Method: {item.config.method}</div>

              <div>
                URL:
                <Link to="scrollUp" spy={true} smooth={true}>
                <button
                  className="his-btn"
                  onClick={() => {
                      {" "}
                      {updateUrl(item.config.url)}
                    }}
                    >
                  {item.config.url}
                </button>
                  </Link>
              </div>
              {/* <div>
                <h4>Headers:</h4>
                <JSONPretty json={item.headers} />
              </div>
              <div>
                <h4>Results:</h4>
                <JSONPretty json={item.data} />
              </div> */}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default History;
