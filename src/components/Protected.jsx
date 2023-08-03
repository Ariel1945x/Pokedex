import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const Protected = () => {
    
    const userName = useSelector(state => state.userName)

    if (userName !== "") {
        return <Outlet />
    } else {
        return <Navigate to="/" />
    }
}

export default Protected