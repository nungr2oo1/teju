import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function ContactUs() {
    return (
        <div className="App">
            <Navbar name="Ganesh Liquor Shop" />
            <h1>Contact Us</h1>
            <Link to="/">
                <button>Come Home</button>
            </Link>
        </div>
    )
}

export default ContactUs;