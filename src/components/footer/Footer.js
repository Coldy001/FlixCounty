import React from "react";
import "./Footer.scss";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

function Footer() {
    return (
        <div className="footer" id="contactUs">
            <strong>Contact Us:</strong>
            <span>
                <Facebook className="facebook icon" />
                <strong>Facebook</strong>
            </span>
            <span>
                <Twitter className="twitter icon" />
                <strong>Twitter</strong>
            </span>
            <span>
                <Instagram className="instagram icon" />
                <strong>Instagram</strong>
            </span>
        </div>
    );
}

export default Footer;
