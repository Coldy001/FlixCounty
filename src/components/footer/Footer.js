import React from "react";
import "./Footer.scss";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

function Footer() {
    return (
        <div className="footer" id="contactUs">
            <strong>Contact Us:</strong>
            <Facebook style={{ fontSize: "4.1rem" }} className="facebook" />
            <Twitter style={{ fontSize: "4.1rem" }} className="twitter" />
            <Instagram style={{ fontSize: "4rem" }} className="instagram" />
        </div>
    );
}

export default Footer;
