import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import changeTitles from "../utils/changeTitle";
import changeTitle from "../utils/changeTitle";

export default function Contactus() {
    useEffect(function () {
        document.title = changeTitle("contactus");
    }, [])
    return (
        <Fragment>
            <div>Contactus</div>
            <Link to="/">Go to homepage</Link>
        </Fragment>
    )
}