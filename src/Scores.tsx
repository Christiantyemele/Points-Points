import Board from "./Board";
import './index.css'
import {score} from "./Board";
import {useCallback} from "react";
export default function  Score() {
    return (
        <div className="main-container">
                <div className="scores">
                    <div className="red"><button className=" btn-xs sm:btn-sm bg-blue-600">{score.score_red}</button></div>
                    <div className="blue"><button className=" btn-xs sm:btn-sm bg-red-600">{score.score_blue}</button>
                    </div>
                </div>
            <Board/>
        </div>

    )
}
