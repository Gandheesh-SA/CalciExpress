import "../styles/card.css";
import { Link } from "react-router-dom";


export default function Card({ icon, title, para, navigateTo }) {
  return (
    <div className="card">
        <h3 className="card-title">{title}</h3>
      <div className="card-icon">{icon}</div>
      <p className="para">{para}</p>
       <Link to={navigateTo} className="card-btn">
        Get Started
      </Link>
    </div>
  );
}