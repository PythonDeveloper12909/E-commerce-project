import { createContext, useState, useEffect} from "react";
export const api = createContext()
export const cartapi=createContext()
function Context({ children }) {
    const [count, setCount] = useState(()=>{
        const saved=localStorage.getItem('count')
        return saved ? JSON.parse(saved) : 0;
    })
    const [cart,setCart]=useState(()=>{
        const saved_products=localStorage.getItem(`products`)
        return saved_products ? JSON.parse(saved_products) : [];
       
    })
    useEffect(()=>{
        localStorage.setItem('count',JSON.stringify(count))
    },[count])
    useEffect(()=>{
        localStorage.setItem(`products`,JSON.stringify(cart))
    },[cart])
    return (
        <>
            <api.Provider value={{ count, setCount}}>
                <cartapi.Provider value={{cart,setCart}}>
                     {children}
                </cartapi.Provider>
            </api.Provider>
        </>
    )
}
export default Context