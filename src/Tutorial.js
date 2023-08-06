import React from 'react';

// ChildComponent receives a function as a prop
function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.onClickFunction()}>Click Me</button>
    </div>
  );
}

// ParentComponent contains the function and passes it to ChildComponent
function ParentComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h2>Passing Function as Prop Example</h2>
      <ChildComponent onClickFunction={handleClick} />
    </div>
  );
}

export default ParentComponent;

