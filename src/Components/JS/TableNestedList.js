import React from 'react'

function TableNestedList() {
    const arr=[
        {name:"Ankit",sec:"D",address:[{pin:281006,city:"Mathura"}]},
        {name:"Amit",sec:"C",address:[{pin:281006,city:"Mathura"}]},
        {name:"Anurag",sec:"D",address:[{pin:281006,city:"Mathura"}]},
        {name:"Aadhya",sec:"E",address:[{pin:281006,city:"Mathura"}]},
        {name:"Ankush",sec:"G",address:[{pin:281006,city:"Mathura"}]},
    ]
  return (
    <div>
        <table border={1}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Sec</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
      {
        arr.map((e)=>{
            return (<tr>
                <td>{e.name}</td>
                <td>{e.sec}</td>
                <td>
                    <table border={1}>
                        <thead>
                           <tr>
                            <th>Pin</th>
                            <th>City</th>
                           </tr>
                        </thead>
                        <tbody>
                            {
                                e.address.map((a)=>{
                                    return (<tr>
                                        <td>{a.pin}</td>
                                        <td>{a.city}</td>
                                    </tr> )
                                })
                            }
                            
                        </tbody>
                    </table>
                </td>
            </tr>)
        })
      }
      </tbody>
      </table>
    </div>
  )
}
export default TableNestedList
