import Header from "../components/header";
import "../styles/app.css";
import  { FaRegPlusSquare, FaSquareRootAlt, FaGreaterThan, FaExclamation, FaLessThan }  from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

import { GiStrong } from "react-icons/gi";
import { TbSum } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { LuTable } from "react-icons/lu";


import Card from "../components/card";

export default function Maths() {
  const cardData = [
    {
      icon: <FaRegPlusSquare />,
      title: "Addition",
      para: "Perform addition operations for N number of inputs.",
      navigateTo:"/sum",
      
    },
    {
      icon: <GiStrong />,
      title: "Armstrong Number",
      para: "Check whether the given number is Armstrong Number or not",
    navigateTo:"/armstrong",
      
    },
    {
      icon: <FaSquareRootAlt />,
      title: "Roots of Quadratic Equation",
      para:"Given the coeffiecient of a quadractic equation, find the roots.",
       navigateTo:"/roots",
      
    },
    {
      icon: <FaGreaterThan />,
      title: "Greatest Number",
      para:"Given N input numbers, find the greatest number among them.",
       navigateTo:"/greatest",
      
    },
     {
      icon: <FaLessThan />,
      title: "Least Number",
      para:"Given N input numbers, find the least number among them.",
       navigateTo:"/least",
      
    },
    {
      icon: <FaExclamation />,
      title: "Factorial",
      para:"Given a number, find the factorial of that number.",
       navigateTo:"/factorial",
      
    },
    {
      icon: <TbSum />,
      title: "Sum of First N",
      para:"Given a number, find the sum of first n numbers.",
       navigateTo:"/sumN",
      
    },
    {
      icon: <ImCross />,
      title: "Multiplication",
      para: "Perform multiplication operations for N number of inputs.",
      navigateTo:"/product",
      
    },
    {
      icon: <FaMoneyBillTrendUp />,
      title: "Simple & Compount Interest",
      para: "Calculate simple & compound interest when principal, year and rate is given.",
      navigateTo:"/interest",
      
    },
     {
      icon: <FaMoneyBillTrendUp />,
      title: "Generate n-Numbers",
      para: "Input N and see all the numbers in the range (0,1)",
      navigateTo:"/generate",
      
    },
       {
      icon: <LuTable />,
      title: "Generate Multiplication Table",
      para: "Input a number check the multiplication table of it.",
      navigateTo:"/multiplication_table",
      
    },
  ];

  return (
    <>
      <Header
        title="MATHS"
        para="List of hot topics in maths. Use it to speed up your calcultions."
      />

      <div className="card-container">
        {cardData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            para={item.para}
            navigateTo={item.navigateTo}
          />
        ))}
      </div>
    </>
  );
}
