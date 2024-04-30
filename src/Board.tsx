import React, {useState} from 'react';

export type DivPosition = {x: number, y: number}

export default function Board() {
    const [color, setColor] = useState('red')
   let score_blue = 0;
    let score_red = 0;
    const renderBoard = () => {
        const board = [];

        for (let row = 17; row > 0; --row) {
            const rowCells = [];
            const div_iD: DivPosition[] = [];
            for (let col = 0; col < 21; col++) {
                const divId = `div-${col}-${row}`
                div_iD.push({x: col, y: row});
                rowCells.push(
                    <div id={divId} className="col">
                        {renderPoint(div_iD)}
                    </div>
                );
            }
            board.push(
                <div key={row} className="row">
                    {rowCells}
                </div>
            );
        }
        return board;
    };

    const renderPoint = (div_iD: DivPosition[]) => {
        return (
            <>
                <div className="point" onClick={(event) => handleClick(event, div_iD)}>
                </div>

            </>
        );
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>, div_iD: DivPosition[]) => {
        const element = event.target as HTMLElement;
        (element.style.background === 'red') ? element.style.background = 'red' : element.style.background = color &&
        (element.style.background === 'blue') ? element.style.background = 'blue' : element.style.background = color
        setColor(color === 'red' ? 'blue' : 'red');

        const parent_element = element.parentElement as HTMLDivElement;
        const currentId = parent_element.getAttribute("id") as string;
        const [, xStr, yStr] = currentId.split("-");
        const x = Number(xStr);
        const y = Number(yStr);
        console.log(x, y);

        // bottom-right check
        var top_right1 = document.querySelector(`#div-${x + 1}-${y}>.point`) as HTMLDivElement;
        var bottom_left1 = document.querySelector(`#div-${x}-${y - 1}>.point`) as HTMLDivElement;
        var bottom_right1 = document.querySelector(`#div-${x + 1}-${y - 1}>.point`) as HTMLDivElement;

        //bottom-left check
        var bottom_left2 = document.querySelector(`#div-${x - 1}-${y - 1}>.point`) as HTMLDivElement;
        var top_left2 = document.querySelector(`#div-${x - 1}-${y}>.point`) as HTMLDivElement;
        var bottom_right2 = document.querySelector(`#div-${x}-${y - 1}>.point`) as HTMLDivElement;

        // top_left check
        var bottom_left3 = document.querySelector(`#div-${x + 1}-${y}>.point`) as HTMLDivElement;
        var top_left3 = document.querySelector(`#div-${x}-${y+1}>.point`) as HTMLDivElement;
        var top_right3 = document.querySelector(`#div-${x+1}-${y + 1}>.point`) as HTMLDivElement;

        // top_ right check
       var bottom_left4 = document.querySelector(`#div-${x - 1}-${y}>.point`) as HTMLDivElement;
        var top_left4 = document.querySelector(`#div-${x-1}-${y + 1}>.point`) as HTMLDivElement;
        var top_right4 = document.querySelector(`#div-${x}-${y + 1}>.point`) as HTMLDivElement;

        if (element.style.background === color &&
            bottom_right1?.style.background === color &&
            bottom_left1?.style.background === color &&
            top_right1?.style.background === color) {
            var big_div1 = document.getElementById(`div-${x}-${y}`) as HTMLDivElement;
            big_div1.style.border = '1px solid ' + color
            setColor(color)
            color === 'red' ? score_red++ : score_blue++;
        }

        if (element.style.background === color &&
            bottom_left2?.style.background === color &&
            top_left2?.style.background === color &&
            bottom_right2?.style.background === color) {
            var big_div2 = document.getElementById(`div-${x-1}-${y}`) as HTMLDivElement;
            big_div2.style.border = '1px solid ' + color
            setColor(color)
            color === 'red' ? score_red++ : score_blue++;
        }

        if (element.style.background === color &&
            bottom_left3?.style.background === color &&
            top_left3?.style.background === color &&
            top_right3?.style.background === color) {
            var big_div3 = document.getElementById(`div-${x}-${y+1}`) as HTMLDivElement;
            big_div3.style.border = '1px solid ' + color
            setColor(color)
            color === 'red' ? score_red++ : score_blue++;
        }

        if (element.style.background === color &&
            bottom_left4?.style.background === color &&
            top_right4?.style.background === color &&
            top_left4?.style.background === color
        ) {
            var big_div4 = document.getElementById(`div-${x - 1}-${y+1}`) as HTMLDivElement;
            big_div4.style.border = '1px solid ' + color
            setColor(color)
            color === 'red' ? score_red++ : score_blue++;
        }

    }
    return (
            <div className="square">
            {renderBoard()}
        </div>
    );
}