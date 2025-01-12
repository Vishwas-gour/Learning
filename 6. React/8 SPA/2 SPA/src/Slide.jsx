import Carousel from 'react-bootstrap/Carousel';
import img1 from "./assets/car1.avif"
import img2 from "./assets/car2.avif"
import img3 from "./assets/car3.avif"
function Slide() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src={img1} alt="First slide" style={{ width: "100vw", height: "700px" }} />
                <Carousel.Caption>
                    <h3>First Slide Label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} alt="First slide" style={{ width: "100vw", height: "700px" }} />
                <Carousel.Caption>
                    <h3>Second Slide Label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} alt="First slide" style={{ width: "100vw", height: "700px" }} />
                <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;
