import './App.css';
import { useState } from 'react';

function App() {
 
  const [step, setStep] = useState(1);
  
  const [isOpen, setIsOpen] = useState(true);

  const messages = [
    "Register with us",
    "Find your needs",
    "Enjoy"
  ];

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handleClose() {
    setIsOpen(!isOpen);
  }
        
  return (
    <>
      <button className='close-button' onClick={handleClose}>X</button>

      {isOpen && <div className='steps'>
         <div className='numbers'>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
         </div>
   
         <p className='message'>
           Step {step}: {messages[step - 1]}
         </p>
   
         <div className='buttons'>
           <button style={{backgroundColor: "#7950f2"}} onClick={handlePrevious}>
             Previous
           </button>
           <button style={{backgroundColor: "#7950f2"}} onClick={handleNext}>
             Next
           </button>
         </div>
       </div>}
    </>
  ); 
}

export default App;
