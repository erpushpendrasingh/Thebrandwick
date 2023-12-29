import "./App.css";
import Navbar from "./components/Navbar";
import MainRoutes from "./Page/MainRoutes";

function App() {
     return (
          <div className="App">
               <Navbar />
               <h1>The Brand Wick App</h1>
               <MainRoutes />
          </div>
     );
}

export default App;
