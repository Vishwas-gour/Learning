import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
    return (
        <>
            <Link to="home">home</Link>  | 
            <Link to="about">About</Link> |
            <Link to="contact">Contact</Link> | 
            <Link to="service">Service</Link> | 
            <hr />
            <Outlet />
            <hr />
            <footer>"© 2025 Your Name. All rights reserved."</footer>
        </>
    )
}
export default HomeLayout;