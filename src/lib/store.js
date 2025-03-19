import { create } from "zustand";
// import  {Companies}  from './api';

// interface ReceivedDataState {
//   receivedCompany: { name: string } | null;
//   setReceivedCompany: (list:Companies) => void;
// }

export const useReceivedData = create((set) => ({
    receivedCompany: null,
        
    setReceivedCompany:(list)=> set(()=>({receivedCompany: list})),
        
}))

export const useSearchValue = create((set) => ({
    inputValue: '',
        
    setInputValue:(value)=> set(()=>({inputValue: value})),
        
}))