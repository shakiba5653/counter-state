import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import changeTitle from "../utils/changeTitle";

export default function Aboutus() {
    useEffect(function () {
        document.title = changeTitle("Aboutus");
    }, [])
    return (
        <Fragment>
            <div>Aboutus</div>
            <Link to="/">Go to homepage</Link>
        </Fragment>

    )
}