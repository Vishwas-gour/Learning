import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
    return (
        <>  <header>
            <h1>City Hospital</h1>
            <nav>
                <Link to="home">Home</Link>  |
                <Link to="about">About</Link> |
                <Link to="contact">Contact</Link> |
                <Link to="service">Service</Link> 
            </nav>
        </header>
            <hr />
            <Outlet />
            <hr />
        <footer>
            <p>
                &copy; 2024 City Hospital || 
                <a href="#">Privacy Policy</a> ||
                <a href="#">Terms of Service</a>
            </p>
        </footer>
        </>
    )
}
export default HomeLayout;