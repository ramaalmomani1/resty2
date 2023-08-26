import "./Results.scss";
import JSONPretty from "react-json-prettify";

function Results(props) {
 
  return (
    
    <section>
      {props.loading ? (
        <div>Loading...</div>
      ) : (
        <pre>
         
            <div>
              <h3>Headers:</h3>
              <JSONPretty json={props.data.data} />
            </div>
     

          
            <div>
              <h3>Results:</h3>
              <JSONPretty json={props.data.results} />
            </div>
         
        </pre>
      )}
    </section>
  );
}

export default Results;
