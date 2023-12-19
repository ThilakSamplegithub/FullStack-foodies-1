import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";




export const PrivateRoute = ({children}) => {

    const location = useLocation();
    const { isAuth } = useSelector((store) => store.authReducer);
    if (!isAuth) {
        return <Navigate to="/signin" state={{from:location}} replace/>
    }
    return children;
 };
