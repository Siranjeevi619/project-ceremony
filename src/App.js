import "./App.css";
import Button from "./tools/Button.js";

function App() {
  const handleClick = () => {
    alert("hello");
  };

  return (
    <div className="App">
      <Button
        context={"Get Started"}
        haveIcon={"bi bi-arrow-right"}
        onClickHandler={handleClick}
        theme="dark"
      />
    </div>
  );
}

export default App;
