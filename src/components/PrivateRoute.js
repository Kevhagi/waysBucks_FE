// import necessary utility from rrd
import { Outlet, Navigate } from "react-router-dom";


// create component here

const PrivateRoute = ({element: Component, ...rest}) => {
    const isLogin = false
    return (
    isLogin ? <Outlet /> : <Navigate to="/signin" />
    );
};

export default PrivateRoute;