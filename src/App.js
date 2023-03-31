import "./App.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
// import Pagination from "./components/pagination/Pagination";
// import Login from "./components/Login/Login";
// import SignUp from "./components/signup/SignUp";
import AllBlogs from "./components/blogs/AllBlogs/AllBlogs";
import BlogCard from "./components/blogs/single_blog/BlogCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Pagination /> */}

      {/* <Login/> */}
      {/* <SignUp/> */}
      <div className="row">
        <div className="col">
          {" "}
          <BlogCard />
        </div>
        <div className="col">
          {" "}
          <BlogCard />
        </div>
        <div className="col">
          {" "}
          <BlogCard />
        </div>
        <div className="col">
          {" "}
          <BlogCard />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {" "}
          <BlogCard />
        </div>
        <div className="col">
          {" "}
          <BlogCard />
        </div>
        <div className="col">
          {" "}
          <BlogCard />
        </div>
        <div className="col">
          {" "}
          <BlogCard />
        </div>
      </div>

      {/* <AllBlogs/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
