import axios from 'axios';
import React,{useContext} from 'react'
import { ListContext } from '../context/ConstextList';
export const ListDone = () => {

 /* 
   setListDone(persons.data)

  }) */
  
    const {listDone,setListDone}= useContext(ListContext);

  return (
    <div>
        <h2>Done</h2>
        {listDone.map((lisD)=>{
            return(
                <div key={lisD.id} className="container">
                      <table className="table table-striped">
                      <td className='col-4'>{lisD.text}</td>
                      </table>
                    
                </div>
            )
})

        }
    </div>
  )
}
