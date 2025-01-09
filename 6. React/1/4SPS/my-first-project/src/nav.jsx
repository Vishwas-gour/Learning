import './nav.css'
function Nav() {
    return (
        <>
            <nav className='nav1'>
                <div className="logo">PRONTO</div>
                <nav className="nav2">
                    <ul>
                        <li className="li"><label >HOME</label></li>
                        <li> <label >PAGES</label></li>
                        <li className="li"><label >ABOUT</label></li>
                        <li className="li"><label >PORTFOLIO</label></li>
                        <li className="li"><label >BLOG</label></li>
                        <li className="li"><label >CONTACT</label></li>

                    </ul>
                </nav>
            </nav>
        </>
    );
}
export default Nav;