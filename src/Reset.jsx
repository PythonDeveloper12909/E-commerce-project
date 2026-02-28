import { Outlet } from "react-router-dom";
import { totalpriceapi,cartapi,api } from "./Context";
import { useContext } from "react";
function Reset() {
        const {setCart} = useContext(cartapi)
        const {setCount}=useContext(api)
        const {setTotalprice}=useContext(totalpriceapi)
        const reset=()=>{
            localStorage.clear()
            setCart([])
            setCount(0)
            setTotalprice(0)
        }
        return(
            <>
                <Outlet/>
                <button className="reset-button" onClick={reset}>🗑️ Reset</button>
            </>
        )
}
export default Reset