import { createContext, useState, useEffect} from "react";
export const api = createContext()
export const cartapi=createContext()
export const totalpriceapi=createContext()
export const selectedapi=createContext()
function Context({ children }) {
    const [count, setCount] = useState(()=>{
        const saved=localStorage.getItem('count')
        return saved ? JSON.parse(saved) : 0;
        
    })
    const [cart,setCart]=useState(()=>{
        try{
            const saved_products=localStorage.getItem(`products`)
            const parsed = saved_products ? JSON.parse(saved_products) : [];
            return Array.isArray(parsed) ? parsed : [];
        }
        catch{
            return []
        }
    })
    const [totalprice,setTotalprice]=useState(()=>{
        const saved=localStorage.getItem('totalprice')
        return saved ? JSON.parse(saved) : 0;
    })
    const [isSelected,setIsSelected]=useState(()=>{
        const saved_selected=JSON.getItem('selected')
        return saved_selected ? JSON.parse(saved_selected) : false;
    })
    useEffect(()=>{
        localStorage.setItem('count',JSON.stringify(count))
    },[count])
    useEffect(()=>{
        localStorage.setItem(`products`,JSON.stringify(cart))
    },[cart])
    useEffect(()=>{
        localStorage.setItem('totalprice',JSON.stringify(totalprice))
    },[totalprice])
    useEffect(()=>{
        localStorage.setItem('selected',JSON.stringify(isSelected))
    },[isSelected])
    return (
        <>
            <api.Provider value={{ count, setCount}}>
                <cartapi.Provider value={{cart,setCart}}>
                    <totalpriceapi.Provider value={{totalprice,setTotalprice}}>
                        <selectedapi.Provider value={{isSelected,setIsSelected}}>
                            {children}
                        </selectedapi.Provider>
                    </totalpriceapi.Provider>
                </cartapi.Provider>
            </api.Provider>
        </>
    )
}
export default Context