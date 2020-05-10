import { useState, useEffect } from "react"

function useColumns() {

    const colors = ["yellow", "green", "blue", "red"];
    const [columns, setColumns] = useState([]);

    useEffect(createCubi, [])

    function createCubi() {

        //
        //Qui modificando il valore di x e y si può modificare la grangezza della griglia 
        //

        for (let x = 0; x < 5; x++) {
            let column = []
            for (let y = 0; y < 5; y++) {
                const randomColor = colors[Math.floor(Math.random() * (4 - 0) + 0)];
                column.push({
                    x: x + 1,
                    y: y + 1,
                    color: randomColor
                })
            }
            columns.push(column)
            setColumns([...columns])
        }
    }

    return columns

}

export default useColumns