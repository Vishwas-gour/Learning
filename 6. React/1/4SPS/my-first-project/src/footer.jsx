import "./footer.css"
function Footer() {
    return (
        <footer>
            <div className="left">
                <div className="d1">FOLLOW OUR WORK</div>
                <div className="d2">Suspendisse nisl nunc, auctor sed aliquet eu, varius id libero. Vivamus aliquam
                    laoreet
                    purus aliquet gravida donec.</div>
                <div className="d3">
                    <div className="facebook"><i className="fa-brands fa-facebook-f"></i></div>
                    <div className="twiter"><i className="fa-brands fa-twitter"></i></div>
                    <div className="pinterest"><i className="fa-brands fa-pinterest-p"></i></div>
                </div>
            </div>
            <div className="center">
                <div className="d1">PRONTO</div>
                <div className="d2">PORTFOLIO</div>
                <div className="d2">BLOG</div>
            </div>
            <div className="right">
                <div className="d1">Get in Touch</div>
                <div className="d2">uspendisse nisl nunc, auctor sed aliquet eu, varius id libero. Vivamus aliquam
                    laoreet.
                </div>
                <div className="d3">CONTACT US</div>
            </div>
        </footer>
    );
}
export default Footer;
