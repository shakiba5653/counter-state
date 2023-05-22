import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import changeTitle from "../utils/changeTitle";

export default function Homepage() {
    useEffect(function () {
        document.title = changeTitle("Homepage");
    }, [])
    return (
        <Fragment>
            <p>Homepage</p>
            <Link to="/contact-us">go to contactus</Link>
        </Fragment>
    )
}