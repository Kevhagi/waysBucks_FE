<<<<<<< HEAD
// import necessary utility from rrd
import { Outlet, Navigate } from "react-router-dom";


// create component here

const PrivateRoute = ({element: Component, ...rest}) => {
    const isLogin = false
    return (
    isLogin ? <Outlet /> : <Navigate to="/signin" />
    );
};

=======
// import necessary utility from rrd
import { Outlet, Navigate } from "react-router-dom";


// create component here

const PrivateRoute = ({element: Component, ...rest}) => {
    const isLogin = false
    return (
    isLogin ? <Outlet /> : <Navigate to="/signin" />
    );
};

>>>>>>> e27699244d1195f870321db03361377831d39727
export default PrivateRoute;