import { Link, Outlet } from "react-router-dom";
function ContactLayout() {
    return (
        <>
 <h1>Contact page</h1>
 <table>
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