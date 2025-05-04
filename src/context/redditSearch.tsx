import { createContext, useState, ReactNode } from "react";

interface SearchProps {
    search:string,
    setSearch:(search:string)=>void
}

export const SearchContext = createContext<SearchProps|undefined>(undefined);

export function SearchContextProvider({children}:{children : ReactNode})
{
    const [search,setSearch] = useState<string>('');
    return (<SearchContext.Provider value={{search,setSearch}}>{children}</SearchContext.Provider>)
}