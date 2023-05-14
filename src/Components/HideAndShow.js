// import React, { useState } from 'react'

// function HideAndShow() {
//     const [bool,setBool]=useState(false);
//     const [hide,setHide]=useState();

//     function Click1(e){
//         setHide(e)
//     }
//     function Click2(e){
//         setHide(e)
//     }
//   return (
//     <div>
//       {hide?<h1></h1>:<h1>Ankit</h1>}
//       <button onClick={()=>Click1(true)}>Hide</button>
//       <button onClick={()=>Click2(false)}>Show</button>
//     </div>
    
//   )
// }

// export default HideAndShow



// import React, { useState } from 'react'

// function HideAndShow() {
//     const [bool,setBool]=useState(true);
//     const [hide,setHide]=useState(false);

//     function Click(){
//         if(bool){
//             setHide(true)
//             setBool(!bool)
//         }else{
//             setHide(false)
//             setBool(!bool)
//         }  
//     }
//   return (
//     <div>
//       {hide?<h1></h1>:<h1>Ankit</h1>}
//       <button onClick={()=>Click()}>Hide</button>
//       <button onClick={()=>Click()}>Show</button>
//     </div>
    
//   )
// }

// export default HideAndShow




import React, { useState } from 'react'
function HideAndShow() {
    const [hide,setHide]=useState(false);

    function Click(){
        setHide(!hide)
    }
  return (
    <div>
      {hide?<h1></h1>:<h1>Ankit</h1>}
      <button onClick={()=>Click()}>Hide and Show</button>
    </div>
    
  )
}

export default HideAndShow