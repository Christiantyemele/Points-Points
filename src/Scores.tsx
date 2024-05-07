import Board from "./Board";
import './index.css'

export default function  Score(color?: string | {}) {
    let score = {"red": 1, "blue": 1}
    color === 'red' ? score.red++ : score.blue++;
    return (
        <div className="main-container">
                <div className="scores">
                    <div className="red"><button className=" btn-xs sm:btn-sm bg-blue-600">{score.red}</button></div>
                    <div className="blue"><button className=" btn-xs sm:btn-sm bg-red-600">{score.blue}</button>
                    </div>
                </div>
            <Board/>
        </div>

    )
}
