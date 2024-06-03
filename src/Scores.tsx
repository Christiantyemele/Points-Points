import Board from "./Board";
import './index.css'
import {useStore} from './store';


export default function  Score() {

    const scorered = useStore((state) => state.scorered)
    const scoreblue = useStore((state) => state.scoreblue)
    return (
        <div className="main-container">
                <div className="scores">

                    <div className="red"><button className=" btn-xs sm:btn-sm bg-blue-600">{scoreblue}</button>
                    <div className="blue"><button className=" btn-xs sm:btn-sm bg-red-600">{scorered}</button>
                </div>
                    </div>
                    </div>
            <Board/>
        </div>

    )
}
