import "../styles/app.css";
import Header from "../components/header";
import { MdMergeType } from "react-icons/md";
import { VscSymbolBoolean } from "react-icons/vsc";
import { FaCodeBranch } from "react-icons/fa";
import { TiArrowLoop, TiFlowSwitch  } from "react-icons/ti";
import { TbArrowLoopLeft2 } from "react-icons/tb";
import { TbArrowLoopRight } from "react-icons/tb";
import { AiOutlineFunction } from "react-icons/ai";
import { SlLoop } from "react-icons/sl";
import Card from "../components/card";

export default function JavaScript(){

      const cardData = [
        {
          icon: <MdMergeType />,
          title: "Type Conversion",
          para: "Converting a value from one data type to another using either implicit or explicit.",
          navigateTo:"/typeconversion",
          
        },
        {
          icon: <VscSymbolBoolean />,
          title: "Logical Operators",
          para: "Check whether Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value - True or False",
        navigateTo:"/logical",
          
        },
        {
          icon: <FaCodeBranch />,
          title: "If Statements",
          para:"If statement is a fundamental control flow structure that allows code execution to be conditional based on a specified condition.",
           navigateTo:"/ifstatements",
          
        },
        {
          icon: <TiArrowLoop />,
          title: "While Loop",
          para:"A while loop repeatedly executes a block of code as long as a specified condition remains true",
           navigateTo:"/whileloop",
          
        },
         {
          icon: <SlLoop />,
          title: "For Loop",
          para:"for loop in JavaScript is a control flow statement that allows code to be executed repeatedly based on a specified condition",
           navigateTo:"/forloop",
          
        },
        {
          icon: <TbArrowLoopLeft2 />,
          title: "For....In Loop",
          para:"The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It provides access to the keys (property names) of the object. ",
           navigateTo:"/forinloop",
          
        },
        {
          icon: <TbArrowLoopRight />,
          title: "For....Of Loop",
          para:"The for...of loop in JavaScript provides a concise way to iterate over the values of iterable objects.",
           navigateTo:"/forofloop",
          
        },
        {
          icon: <TiFlowSwitch />,
          title: "Switch Case",
          para: "The switch statement in JavaScript provides a way to control the flow of execution based on the value of an expression.",
          navigateTo:"/switch",
          
        },
        {
          icon: <AiOutlineFunction />,
          title: "Functions",
          para: "Functions are fundamental building blocks that encapsulate reusable blocks of code. ",
          navigateTo:"/functions",
          
        },
   
      ];
    return(
        <>
            <Header 
                title="JAVASCRIPT"
                para="List of all important javascript components and understanding how they work." 
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