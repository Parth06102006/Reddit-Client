import { createContext, useState , ReactNode } from "react";

interface AddProps {
    items:string[],
    setItems:(t:string[])=>void
}

export const AddContext = createContext<AddProps|undefined>(undefined);

export function AddContextProvider({children}:{children : ReactNode})
{
    const [items,setItems] = useState<string[]>([]);
    return (<AddContext.Provider value={{items,setItems}}>{children}</AddContext.Provider>)
}