export default function GameManager() {
    var div_iD: string[] = [];
    for (var i = 0; i < 17; i++) {
        for (var j = 0; j < 21; j++) {
            div_iD.push(`div_${i}_${j}`);
        }
    }
    div_iD.forEach((div) => {
        var div_element = document.getElementById(div) as HTMLDivElement;
   //     var divs = document.getElementById(div);
        var list_of_points = div_element.querySelectorAll('.col');

        list_of_points.forEach((list_of_point) => {
            var point_div = list_of_point as HTMLDivElement;
            if (point_div.style.backgroundColor === 'red')
            div_element.style.borderColor = "red";
        });
    });
    return null
}
