import React,{useContext,useState,useEffect} from 'react'
import { ListContext } from '../context/ConstextList';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
export const ListTodo = () => {
  const TodoURL="http://localhost:3000/Todo";
  const DoneURL="http://localhost:3000/Done";
   const{list,setList,listDone,setListDone}= useContext(ListContext);
   const [add,setAdd]= useState({id:uuidv4(),text:""});
   const Add=({target})=>{
    setAdd({
        ...add,
       text:target.value
    })
    console.log("Funciona");
   }

   const AddText=async()=>{
    const resp =  await axios.post(TodoURL,add)
   }
   const newData =(()=>{
    
    axios.get(DoneURL).then(res => {
      const persons = res;
      setListDone(persons.data)
      console.log(persons.data)
      
   })
    
   }) 
   
  
   const handleDelete = text => {
    axios.delete(`${TodoURL}/${text.id}`)
    const newList=list.filter((item)=>{
      return item.id !==text.id
    })
    setList(newList)
    };
    const handleDone=(textD)=>{
      const dataArray2 = list.filter(lel=>lel.id == textD.id);
       axios.post(DoneURL,dataArray2[0]);
       axios.delete(`${TodoURL}/${textD.id}`)
       
    const newList=list.filter((item)=>{
      return item.id !==textD.id
    })
    setList(newList)
    newData()
  }
 
  return (
    <div>
      <div className='cabecera'>
      <h1 className='title'>To do List</h1>
         <form onSubmit={AddText}>
            <input placeholder='Añada aqui su tarea' type="text" name="text" onChange={Add} />
          <button type="submit">➕</button>
        </form>
        <h1 className='title'>Tareas Por Realizar</h1>
        </div>  
               {list.map((lis,loading)=>{
            return(
                <div key={uuidv4()} className="container">
                      <table className="table table-striped">
                            <tr className='col-12'>
                            <td className='col-2'><button type="button" onClick={() => handleDone(lis)} className="btn btn-outline-success">✔️</button></td>
                            <td className='col-4'>{lis.text}</td>
                            <td className='col-3'><button type="button" onClick={() => handleDelete(lis)} className="btn btn-outline-warning">✏️</button>
                            <button type="button" onClick={() => handleDelete(lis)} className="btn btn-outline-danger">🗑️</button></td>
                            </tr>
                      </table>
                </div>
            )
})

        }
     
    </div>
   
  )
}
