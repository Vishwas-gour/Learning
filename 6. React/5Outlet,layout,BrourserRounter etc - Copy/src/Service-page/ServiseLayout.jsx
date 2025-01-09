import { Link, Outlet } from "react-router-dom";
import Servise from "../Servise";
function ServiseLayout() {
    return (
        <>
            <table>
                <Servise />
                <tr>
                    <td>
                        <tr><Link to="ourServises"> Servises</Link></tr>
                        <tr><Link to="healthCare"> Health </Link></tr>
                        <tr><Link to="oprations">Oprations</Link></tr>
                    </td>
                    <td>
                        <Outlet />
                    </td>
                </tr>
            </table>
        </>
    )
}
export default ServiseLayout;