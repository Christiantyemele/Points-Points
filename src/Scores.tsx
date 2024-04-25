import Board from "./Board";
import './index.css'
export default function  ScoreBlue() {
    return (

        <div className="flex flex-col w-full lg:flex-row container" >
            <div className="grid flex-grow h-32 card bg-red-600 rounded-box place-items-center centered">0</div>
            <Board/>
            <div className="grid flex-grow h-32 card bg-blue-600 rounded-box place-items-center centered">0</div>

        </div>
    )
}