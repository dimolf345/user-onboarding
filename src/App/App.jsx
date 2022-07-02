import { useState } from "react";

import { STEPS } from "../utilities/constants";
import Sidebar from "../components/Sidebar/Sidebar";

import "./App.scss";

function App() {
  const [steps, setSteps] = useState(STEPS);
  const currentStepNr = steps.findIndex((step) => step.isActive);

  const handleChangeStepByNum = (nextIndex) => {
    if (
      currentStepNr + nextIndex < 0 ||
      currentStepNr + nextIndex > steps.length - 1
    )
      return;
    const newSteps = [...steps];
    newSteps[currentStepNr].isActive = false;
    newSteps[currentStepNr + nextIndex].isActive = true;
    setSteps(newSteps);
  };

  const handleChangeStepByName = (name) => {
    const newStepIndex = steps.findIndex((step) => step.name === name);
    if (newStepIndex !== -1) {
      const newSteps = [...steps];
      newSteps[currentStepNr].isActive = false;
      newSteps[newStepIndex].isActive = true;
      setSteps(newSteps);
    }
  };

  const handleStepCompleted = (completedStep) => {
    const newSteps = steps.map((step, index) => {
      if (index === completedStep)
        return {
          ...step,
          isCompleted: true,
        };
      return step;
    });
    setSteps(newSteps);
  };

  return (
    <div className="App">
      <div className="user-boarding">
        {/* Sidebar */}
        <Sidebar
          steps={steps}
          handleClick={handleChangeStepByName}
          currentStep={currentStepNr}
        />
        {/* Main Component */}
        <div>
          <h1>{steps[currentStepNr].name}</h1>
          <button onClick={() => handleStepCompleted(currentStepNr)}>
            complete
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
