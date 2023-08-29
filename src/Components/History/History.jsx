// import "./History.scss";
// import JSONPretty from "react-json-prettify";

// function History({ history, method, url, rendetHistory }) {

//   console.log(history, 'this is from history')

//   const { headers, results } = history[0] || {};
//   return (
//     <section>
//       {rendetHistory === true && (
//         <div>
         
//           <h2>History</h2>

//           <div>Request Method: {method}</div>
//           <div>URL: {url}</div>

//           <div>
//             <h3>Headers:</h3>
//             <JSONPretty json={history} />
//           </div>

//           <div>
//             <h3>Results:</h3>
//             <JSONPretty json={history} />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default History;

import "./History.scss";
import JSONPretty from "react-json-prettify";

function History({ history, method, url, rendetHistory }) {
  console.log(history, 'this is from history');
  
  const { headers, data } = history[0] || {}; 

  return (
    <section>
      {rendetHistory === true && (
        <div>
          <h2>History</h2>
          <div>Request Method: {method}</div>
          <div>URL: {url}</div>
          
          <div>
            <h3>Headers:</h3>
            <JSONPretty json={headers} />
          </div>

          <div>
            <h3>Results:</h3>
            <JSONPretty json={data} />
          </div>
        </div>
      )}
    </section>
  );
}

export default History;
