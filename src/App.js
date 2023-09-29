import { useState, useRef, useEffect } from "react";
import Body from "./pages/Body";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import "./styles/App.css";
import Review from "./pages/Review";
import Products from "./pages/Products";

function App() {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    console.log(isIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <div className="app-container">
      <Header />
      <Body ref={ref} />
      <Products />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
