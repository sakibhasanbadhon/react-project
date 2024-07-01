import { useState } from "react";


const App = () => {

  let [list,setList]= useState([]);
  let [item,setItem]= useState("");

   const addToList = () =>{
      list.push(item);
      setList([...list])
      
   }

   const removeItem= (index) =>{
      list.splice(index,1);
      setList([...list])

   }

  return (
    <div>
      <table>
        <tbody>
          {
            list.length !==0?(
              list.map((element, index)=>{
                return(
                  <tr>
                    <td>{element}</td>
                    <td><button onClick={()=>{
                      removeItem(index)
                    }}>X</button></td>
                  </tr>
                )
              })
            ):(<tr></tr>)
          }
        </tbody>
      </table>
      <input onChange={(e)=>setItem(e.target.value)} type="text" placeholder="item"/>
      <button onClick={addToList}> Add </button>
    </div>
  );
};

export default App;
