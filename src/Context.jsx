import { createContext, useState, useEffect} from "react";
export const api = createContext()
export const cartapi=createContext()
export const totalpriceapi=createContext()
export const inputvalue=createContext()
export const orderhistoryapi=createContext()
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
    const [inpval,setInpval]=useState('')
    const [orderhistory,setOrderhistory]=useState(()=>{
        const saved_history=localStorage.getItem('orderhistory')
        return saved_history ? JSON.parse(saved_history) : [];
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
        localStorage.setItem('orderhistory',JSON.stringify(orderhistory))
    },[orderhistory])
    return (
        <>
            <api.Provider value={{ count, setCount}}>
                <cartapi.Provider value={{cart,setCart}}>
                    <totalpriceapi.Provider value={{totalprice,setTotalprice}}>
                        <inputvalue.Provider value={{inpval,setInpval}}>
                           <orderhistoryapi.Provider value={{orderhistory,setOrderhistory}}>                        
                                {children}
                           </orderhistoryapi.Provider>
                        </inputvalue.Provider>
                    </totalpriceapi.Provider>
                </cartapi.Provider>
            </api.Provider>
        </>
    )
}
export default Context