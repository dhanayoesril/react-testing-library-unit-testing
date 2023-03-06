import { useState } from 'react';

const DisableButtonWithCheckbox = () => {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ isDisabled, setIsDisabled ] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={()=> setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <br/>
      <input 
        type="checkbox" 
        checked={isDisabled} 
        onChange={()=> setIsDisabled(!isDisabled)}
      />
    </div>
  );
}

export default DisableButtonWithCheckbox;
