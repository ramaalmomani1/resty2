import { useState } from "react";
import "./Form.scss";

function Form(props) {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");

  const handleMethodChange = (newMethod) => {
    setMethod(newMethod);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
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
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
        >
         
        </textarea>

      <label className="methods">
        {/* 
            <button type="submit" onClick={() => handleSubmit(setMethod('GET'))}> GET </button>
            <button type="submit" onClick={() => handleSubmit(setMethod('POST'))}> POST </button>
            <button type="submit" onClick={() => handleSubmit(setMethod('PUT'))}> PUT </button>
            <button type="submit" onClick={() => handleSubmit(setMethod('DELETE'))}> DELETE </button> */}

        <button onClick={() => handleMethodChange("GET")}> GET </button>
        <button onClick={() => handleMethodChange("POST")}> POST </button>
        <button onClick={() => handleMethodChange("PUT")}> PUT </button>
        <button onClick={() => handleMethodChange("DELETE")}> DELETE </button>
      </label>

    
      
    </>
  );
}

export default Form;
