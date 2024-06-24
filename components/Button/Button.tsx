import React, { CSSProperties } from "react";
import "./Button.css";

interface iButton {
  label: string;
  className?: string;
  style?: CSSProperties;
  arrowDirection?:string;
}

const Button: React.FC<iButton> = ({ label, arrowDirection, className = "", style = {} }) => {

  const addStyle = className + "font-bold py-2 px-4 rounded flex justify-center w-full ButtonContainer";

  return (
    <button className={addStyle} style={style}>
      <span className="ButtonText">{label}</span>
      <svg
        className="Buttonsvg w-4 h-4 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        {arrowDirection === 'left' ?
         <path d="M3 10a.997.997 0 01.293-.707l6-6a.999.999 0 011.414 0 .999.999 0 010 1.414L5.414 9H17a1 1 0 010 2H5.414l4.293 4.293a.999.999 0 11-1.414 1.414l-6-6A.997.997 0 013 10z" />
        :
        <path d="M17 10a.997.997 0 01-.293.707l-6 6a.999.999 0 01-1.414 0 .999.999 0 010-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a.999.999 0 111.414-1.414l6 6c.195.195.293.451.293.707z" />
      }
        </svg>
    </button>
  );
};

export default Button;
