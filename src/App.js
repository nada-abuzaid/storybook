import "./App.css";
import Cards from "./stories/Cards";
import image from "./assets/test.svg";

function App() {
  return (
    <div className="App">
      <Cards image={image} title="Design" description="lorem" />
    </div>
  );
}

export default App;
