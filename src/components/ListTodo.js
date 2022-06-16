import React,{useContext,useState,useEffect} from 'react'
import { ListContext } from '../context/ConstextList';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
export const ListTodo = () => {
   const{list}= useContext(ListContext);
   const [add,setAdd]= useState({id:uuidv4(),text:""});
   const Add=({target})=>{
    setAdd({
        ...add,
       text:target.value
    })
    console.log("Funciona");
   }
   const TodoURL="http://localhost:3000/Todo";
   const AddText=async()=>{
    const resp =  await axios.post(TodoURL,add)
   }
   const handleDelete = text => {
    axios.delete(`${TodoURL}/${text.id}`)
    setAdd();
    };
  
  return (
    <div>
         <form onSubmit={AddText}>
            <input type="text" name="text" onChange={Add} />

          <button type="submit">Add</button>
        </form>
       
               {list.map((lis)=>{
            return(
                <div key={uuidv4()} className="container">
                      <table className="table table-striped">
                            <tr className='col-10'>
                              <td className='col-4'>{lis.text}</td>
                              <td className='col-4'><button type="button" onClick={()=>handleDelete(lis)} className="btn btn-outline-danger">remove</button></td>
                            </tr>
                      </table>
                    
                </div>
            )
})

        }
    </div>
  )
}
