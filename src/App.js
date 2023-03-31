import "./App.css";
import Navbar from "./components/header/Navbar";
// import Footer from "./components/footer/Footer";
// import Pagination from "./components/pagination/Pagination";
// import Login from "./components/Login/Login";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Pagination /> */}
      {/* <Footer /> */}
      {/* <Login/> */}
      <SignUp/>
    </div>
  );
}

export default App;
