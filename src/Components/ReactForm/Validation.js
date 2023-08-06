import React, { useState } from "react";

function Validation() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
    
  function nameHandle(e){
    let item = e.target.value;
    if (item.length < 3) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(item);
  }


  function passwordHandle(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPass(item);
  }


  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        Name: <input type="text" value={name} onChange={nameHandle} />
        {nameErr ? <span>Not Valid</span> : null}
        <br/><br/>
        Email: <input type="text" value={pass} onChange={passwordHandle} />
        {passErr ? <span>Not Valid</span> : null}
        <br/><br/>
        <button disabled={nameErr || passErr} >Submit</button>
      </form>
    </div>
  );
}

export default Validation;
