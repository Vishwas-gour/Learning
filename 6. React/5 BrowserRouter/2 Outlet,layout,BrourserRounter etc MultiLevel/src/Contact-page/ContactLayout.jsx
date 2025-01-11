import { Link, Outlet } from "react-router-dom";
import Contact from "../Contact";
function ContactLayout() {
    return (
        <>
            <table>
            <Contact/>
                <tr>
                    <td>
                        <tr><Link to="contactInfo"> Contact info</Link></tr>
                        <tr><Link to="feedback"> Feedback </Link></tr>
                    </td>
                    <td>
                        <Outlet />
                    </td>
                </tr>
            </table>
        </>
    )
}
export default ContactLayout;