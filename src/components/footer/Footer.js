import React from "react";
import "./Footer.scss";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

function Footer() {
    return (
        <div className="footer" id="contactUs">
            <strong>Contact Us:</strong>
            <span>
                <Facebook style={{ fontSize: "4.1rem" }} className="facebook" />
                <strong>Facebook</strong>
            </span>
            <span>
                <Twitter style={{ fontSize: "4.1rem" }} className="twitter" />
                <strong>Twitter</strong>
            </span>
            <span>
                {" "}
                <Instagram style={{ fontSize: "4rem" }} className="instagram" />
                <strong>Instagram</strong>
            </span>
        </div>
    );
}

export default Footer;
