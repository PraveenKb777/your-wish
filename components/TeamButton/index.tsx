import React from "react";
import "./index.css";

interface TeamButtonProps {
  label: string;
  handleToggle: () => void;
  name?: string;
}

const TeamButton: React.FC<TeamButtonProps> = ({ label, handleToggle, name }) => {

  const containerStyles: React.CSSProperties = {
    display: 'inline-block',
  };

  const buttonClasses = `font-bold py-2 px-4 gap-[8px] rounded inline-flex items-center ButtonContainer`;

  return (
    <div style={containerStyles}>
      <button className={buttonClasses} onClick={handleToggle}>
        <span style={{ fontSize: '13px' }}>{label} {name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" focusable="false">
          <path d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default TeamButton;
