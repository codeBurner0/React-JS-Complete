import React, { useState } from "react";

function BasicForm() {
  const [name, setName] = useState("Ankit Anand");
  const [email, setEmail] = useState("ankit@gmail.com");
  const [option, setOption] = useState("Java");
  const [val, setVal] = useState(false);
  function getFormData(e){
    setVal(!val)
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={getFormData}>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        choose your favourite Programming language:{" "}
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option>Java</option>
          <option>C++</option>
          <option>Python</option>
          <option>JavaScript</option>
        </select><br/>
        Accept Term and Condition <input type="checkbox" onChange={(e)=>setVal(e.target.checked)}/>
        <br/>
        {(val?<div>{`The name of the persion is ${name}.
        The email was given is ${email}.
        The selected programming language is ${option}`}</div>:null)}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BasicForm;
