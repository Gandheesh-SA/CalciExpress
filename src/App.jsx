import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./components/side_nav";
import "./styles/app.css";
import Home from "./pages/home";
import Maths from "./pages/math_dashboard";
import Physics from "./pages/physics_dashboard";
import Misc from "./pages/misc_dashbaord";
import Sum_General from "./sub-pages/sum";
import Armstrong from "./sub-pages/armstrong";
import Roots from "./sub-pages/roots";
import Factorial from "./sub-pages/factorial";
import Multiply from "./sub-pages/multiply";
import Natural from "./sub-pages/natural_number";
import Greatest from "./sub-pages/greatest_number";
import InterestCalculator from "./sub-pages/interest";



export default function App() {
  return ( 

   
 <Router>
  <div style={{ display: "flex" }}>
    
 
    <SideNav />

   
    <div
      style={{
        flex: 1,
        marginLeft: "240px", // same as sidebar width
        padding: "2rem",
        backgroundColor: "#f4f7fb",
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math" element={<Maths />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/misc" element={<Misc />} />
         <Route path="/sum" element={<Sum_General />} />
         <Route path="/armstrong" element={<Armstrong />} />
        <Route path="/roots" element={<Roots />} />
        <Route path="/factorial" element={<Factorial />} />
         <Route path="/product" element={<Multiply />} />
         <Route path="/sumN" element={<Natural />} />
         <Route path="/greatest" element={<Greatest />} />
         <Route path="/interest" element={<InterestCalculator />} />
         
      </Routes>
    </div>
  </div>
</Router>


  );
}
