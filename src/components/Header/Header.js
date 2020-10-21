import React, { useState, memo } from "react";
import "./Header.scss";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Link, withRouter } from "react-router-dom";
import randomWords from "random-words";
import { titles } from "../../assets/movieList";
import { Hint } from "react-autocomplete-hint";
import MenuIcon from "@material-ui/icons/Menu";

function Header(props) {
    const [searchValue, setSearchValue] = useState(randomWords());

    const keyHandler = (event) => {
        if (event.key === "Enter") {
            props.history.push(`/search/${searchValue}`);
        }
    };

    const clickHandler = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <header>
            <h1 className="name">
                <Link to="/">FlixCounty</Link>
            </h1>
            <div className="searchBar">
                <Hint options={titles.map((x) => x.title)}>
                    <input
                        id="input"
                        type="text"
                        placeholder="Type and Press Enter..."
                        onKeyPress={keyHandler}
                        onChange={clickHandler}
                    />
                </Hint>
                <Link to={`/search/${searchValue}`}>
                    <SearchRoundedIcon className="searchButton" />
                </Link>
            </div>
            <label htmlFor="menu">
                <MenuIcon className="menuBtn" />
            </label>
            <input type="checkbox" id="menu" />
            <div className="buttons">
                <div id="genresBtn">
                    <Link to="/genres">Genres</Link>
                </div>
                <div id="loginBtn">
                    <a href="#login">Login</a>
                </div>
                <div id="signupBtn">
                    <a href="#signup">Sign Up</a>
                </div>
                <div id="contactBtn">
                    <a href="#contactUs">Contact Us</a>
                </div>
            </div>
        </header>
    );
}

export default withRouter(memo(Header));
