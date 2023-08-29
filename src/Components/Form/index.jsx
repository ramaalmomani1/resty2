import { useReducer } from "react";
import "./Form.scss";
import { formInitState, formActionType, reducer } from "../../reducers/actions";

function Form(props) {
  const [state, dispatch] = useReducer(reducer, formInitState);

    // const [method, setMethod] = useState("GET");
  // const [url, setUrl] = useState("");

  const handleMethodChange = (newMethod) => {
    dispatch({ type: formActionType.METHOD, payload: newMethod });

    // setMethod(newMethod);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const formData = {
      method: state.method,
      url: state.url,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            value={state.url}
            onChange={(e) =>    dispatch({ type: formActionType.URL, payload: e.target.value })}
          />

          <button type="submit">GO !</button>
        </label>
      </form>

      <textarea
        id="myTextarea"
        name="comments"
        rows="4"
        cols="100"
        placeholder="Only Json format"
      ></textarea>

      <label className="button-container">
        <button onClick={() => handleMethodChange("GET")}> GET </button>
        <button onClick={() => handleMethodChange("POST")}> POST </button>
        <button onClick={() => handleMethodChange("PUT")}> PUT </button>
        <button onClick={() => handleMethodChange("DELETE")}> DELETE </button>
      </label>
    </>
  );
}

export default Form;
