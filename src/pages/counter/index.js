import { Fragment, useState } from 'react'
import './style.css'
import { useEffect } from 'react'
import changeTitle from '../utils/changeTitle'


export default function Counter() {
    const [counter, setcounter] = useState(0);
    useEffect(function () {
        // document.title = changeTitle(Counter);
        document.title = "salam" + "|" + counter;
    }, [counter]);

    function addNum() {
        setcounter(counter + 1)
    }
    function subNum() {
        setcounter(counter - 1)
    }
    return (
        <Fragment>
            <ul className="countNum">
                <li>counter</li>
                <span>{counter}</span>
                <li><button onClick={addNum}>count up</button></li>
                <button onClick={subNum}>count down</button>
            </ul>
        </Fragment>

    )
}
