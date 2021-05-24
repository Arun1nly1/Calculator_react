import "./styles.css";
import Input from "./components/Input";
import { useState } from "react";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  function addMe() {
    setResult(number1 + number2);
  }
  return (
    <div className="App">
      <div>
        <Input
          placeholder="number1"
          type="number"
          onChange={(e) => {
            let value = +e.target.value;
            console.log(typeof value);
            setNumber1(value);
          }}
        ></Input>

        <Input
          placeholder="number2"
          type="number"
          onChange={(e) => {
            let value = +e.target.value;
            setNumber2(value);
          }}
        >
          {" "}
        </Input>
      </div>

      <button onClick={addMe}>Add me</button>
      <div>
        <p> The result is : {result} </p>
      </div>
    </div>
  );
}
