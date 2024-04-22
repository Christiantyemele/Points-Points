import React from 'react';
import { useState } from "react";

export default function Board() {
    const [color, setColor] = useState('red')
    const renderBoard = () => {
        const board = [];
        var div_iD = [];
        for (let row = 0; row < 17; row++) {
            const rowCells = [];
            for (let col = 0; col < 21; col++) {
                div_iD.push(`div_${row}_${col}`);
                rowCells.push(
                    <div key ={`${row}_${col}`}  id={`div_${row}_${col}`} className="col">
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

    const renderPoint = (div_iD: string[]) => {
            return (
                <>
                    <div key={`${div_iD}_point`} className="point" onClick={(event) => handleClick(event, div_iD)}>
                          </div>

                   
                   
                </>
            );
        
            }
    var position:DOMRect[] = []

    const PointArray: HTMLElement[] = Array.from(document.getElementsByClassName("point") as HTMLCollectionOf<HTMLElement>);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>, div_iD: string[]) => {
        const element = event.target as HTMLDivElement;
        (element.style.background === 'red') ? element.style.background = 'red' : element.style.background = color &&
        (element.style.background === 'blue') ? element.style.background = 'blue' : element.style.background = color
        setColor(color === 'red' ? 'blue' : 'red');

        div_iD.forEach((div) => {
            var div_element = document.getElementById(div) as HTMLDivElement;

            var div_Rec = div_element.getBoundingClientRect();
            var point_Rec = element.getBoundingClientRect();


            if (div_Rec.top <= point_Rec.bottom && div_Rec.bottom >= point_Rec.top && div_Rec.left <= point_Rec.right && div_Rec.right >= point_Rec.left) {
                div_element.style.borderColor = "red";
            }


                  console.log(div_element)
                   var list_of_points = div_element.querySelectorAll('.point');

                   list_of_points.forEach((list_of_point) => {
                       var point_div = list_of_point as HTMLDivElement;
                       if (point_div.style.backgroundColor === 'red') {
                           red.push(point_div.style.backgroundColor);
                           if (red.length > 4)
                               div_element.style.borderColor = "red";
                       } else if (point_div.style.backgroundColor === 'blue') {
                           red.push(point_div.style.backgroundColor);
                           if (blue.length > 4)
                               div_element.style.borderColor = "red";

                       };

                   });
               });
           }

    }
        return (
            <div className="square">
                {renderBoard()}
            </div>
        );


    };
