import { useState, useEffect } from "react"

function useColumns(colors, lenX, lenY) {

    const [columns, setColumns] = useState([]);
    const [colorsState, setColorsState] = useState(getInitialColorsState())

    useEffect(createCubi, [])

    // inizializza il contatore di blocchi per colore
    function getInitialColorsState() {
        let obj = {}
        colors.forEach(color => obj[color] = 0)
        return obj
    }

    function createCubi() {

        //
        // Viene creata la griglia con colori casuali
        //si può modificare la grangezza della griglia 
        //

        for (let x = 0; x < lenX; x++) {
            let column = []
            for (let y = 0; y < lenY; y++) {
                const randomColor = colors[Math.floor(Math.random() * (colors.length - 0) + 0)];
                colorsState[randomColor]++
                setColorsState({ ...colorsState })
                column.push(randomColor)
            }
            columns.push(column)
            setColumns([...columns])
        }
    }

    return { initialColumns: columns, initialColorsState: colorsState }

}

export default useColumns