import Board from "./Board";
import './index.css'
import {SCORES} from "./App";
import {useContext} from "react";
export default function  Score() {
    // const {A, a} = useContext(SCORES);
    return (
        <div className="main-container">
                <div className="scores">
                    <div className="red"><button className=" btn-xs sm:btn-sm bg-blue-600">{0}</button>
                    <div className="blue"><button className=" btn-xs sm:btn-sm bg-red-600">{0}</button>
                </div>
                    </div>
                    </div>
            <Board/>
        </div>

    )
}
