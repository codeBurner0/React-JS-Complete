import React from 'react'

function TableArrayOfObjects() {

    const arr=[
        {name:"Ankit",sec:"D"},
        {name:"Amit",sec:"C"},
        {name:"Anurag",sec:"D"},
        {name:"Aadhya",sec:"E"},
        {name:"Ankush",sec:"G"},
    ]
  return (
    <div>
        <table border={1}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Sec</th>
            </tr>
            </thead>
            <tbody>
      {
        arr.map((e)=>{
            return (<tr>
                <td>{e.name}</td>
                <td>{e.sec}</td>
            </tr>)
        })
      }
      </tbody>
      </table>
    </div>
  )
}

export default TableArrayOfObjects
