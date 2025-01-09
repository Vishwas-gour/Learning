import { Outlet, Link } from "react-router-dom";
function Layout() {
    return (
        <>
            <Link to="home">home</Link> &nbsp;| &nbsp;
            <Link to="about">about</Link> &nbsp; | &nbsp;
            <Link to="contact">contact</Link> 
            <hr />
            <Outlet />
            <hr />

        </>
    )
}
export default Layout;