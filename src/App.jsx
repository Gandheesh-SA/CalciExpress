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
import NumberPrinter from "./sub-pages/generat_numbers";
import MultiplicationTable from "./sub-pages/multiplication_table";
import Strings from "./pages/string_dashboard";
import JavaScript from "./pages/javascript_dashboard";



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
        <Route path="/string" element={<Strings />} />
        <Route path="/javascript" element={<JavaScript />} />
         <Route path="/sum" element={<Sum_General />} />
         <Route path="/armstrong" element={<Armstrong />} />
        <Route path="/roots" element={<Roots />} />
        <Route path="/factorial" element={<Factorial />} />
         <Route path="/product" element={<Multiply />} />
         <Route path="/sumN" element={<Natural />} />
         <Route path="/greatest" element={<Greatest />} />
         <Route path="/interest" element={<InterestCalculator />} />
         <Route path="/generate" element={<NumberPrinter />} />
         <Route path="/multiplication_table" element={<MultiplicationTable/>} />
         
      </Routes>
    </div>
  </div>
</Router>


  );
}
