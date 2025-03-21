import { create } from "zustand";

export const useReceivedData = create((set) => ({
    receivedCompany: null,
        
    setReceivedCompany:(list)=> set(()=>({receivedCompany: list})),
        
}))

export const useSearchValue = create((set) => ({
    inputValue: '',
        
    setInputValue:(value)=> set(()=>({inputValue: value})),
        
}))