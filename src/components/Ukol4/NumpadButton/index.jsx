import './style.css';

export const NumpadButton = ({ digit, onDigitClick }) => {
  
  const handleClick = () => {
    onDigitClick(digit);
  }

  return (
    <button onClick={handleClick} className="numpad-button">{digit}</button>
  );
};
