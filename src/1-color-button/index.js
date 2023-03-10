import { useState } from 'react';

const ColorButton = () => {
  const [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={()=> setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox"/>
    </div>
  );
}

export default ColorButton;
