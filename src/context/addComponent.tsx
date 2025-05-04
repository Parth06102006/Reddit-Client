import { createContext, useState } from "react";

export const AddContext = createContext();

export function AddContextProvider({children})
{
    const [items,setItems] = useState([]);
    return (<AddContext.Provider value={{items,setItems}}>{children}</AddContext.Provider>)
}