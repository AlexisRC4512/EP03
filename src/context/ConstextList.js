import React, { createContext,useState,useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';

export const ListContext=createContext([]);
const TodoURL="http://localhost:3000/Todo";
const DoneURL="http://localhost:3000/Done";
export const ConstextListProvider = ({children}) => {
    const [list,setList]= useState([]);
    const [listDone,setListDone]= useState([]);
    const fetchList = useFetch(TodoURL, (response) => {
        setList(response);
        console.log(response);
    });
    const fetchListDone = useFetch(DoneURL, (response) => {
        setListDone(response);
        console.log(response)
    });
    useEffect(()=>{
        fetchList();
        fetchListDone();
    },[])
  return (
    <ListContext.Provider value={{list,listDone,setList,setListDone}}>
        {children}
    </ListContext.Provider>
  )
}
