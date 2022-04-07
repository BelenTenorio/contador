import {useState} from "react";
function App() {
  const [cuenta, setCuenta] = useState(10);

  const handleClick = () => {
    setCuenta(cuenta+1);
  }
  const handleMinusClick = () => {
    setCuenta(cuenta-1);
  }
  const handleResetClick = () => {
    setCuenta(0);
  }

  return (
    <div className="App">
      <h3>Contador</h3>
      <hr />
      <h2 className="text-center">{cuenta}</h2>
      <hr />
      <div 
      style={{
      display: "flex", 
      justifyContent: "flex-end",
      marginRight:"5px"}}>
      <button type="button" class="btn btn-primary" onClick={handleClick}>
        +1
        </button>
        <button type="button" class="btn btn-primary" onClick={handleMinusClick}>
        -1
        </button>
        <button type="button" class="btn btn-primary" onClick={handleResetClick}>
        Reset
        </button>

      </div>
    </div>
  );
}

export default App;
