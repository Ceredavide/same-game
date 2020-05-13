import { useState } from "react"
import useColumns from "./useColumns"

const useCheckColors = () => {

    const [columns, setColumns] = useState(useColumns())
    const [coordinates, setCoordinates] = useState([])

    function checkColor(x, y) {
        // controlla il colore dei cubi attorno alle coordinate inserite
        addCoordinate(x, y)
        const mainColor = getColor(x, y)
        if (mainColor === getColor(x - 1, y)) {
            addCoordinate(x - 1, y)
        }
        if (mainColor === getColor(x + 1, y)) {
            addCoordinate(x + 1, y)
        }
        if (mainColor === getColor(x, y - 1)) {
            addCoordinate(x, y - 1)
        }
        if (mainColor === getColor(x, y + 1)) {
            addCoordinate(x, y + 1)
        }
    }

    function addCoordinate(x, y) {
        // controlla se le coordinate passate non sono gia presenti nell'array di coordinate
        // se non è così, le aggiunge
        if (coordinates.findIndex(coordinate => coordinate.x === x && coordinate.y === y) === -1) {
            coordinates.push({ x: x, y: y })
            setCoordinates([...coordinates])
            return checkColor(x, y)
        }
    }

    function removeCoordinates() {
        console.table(coordinates)
        console.table(columns)
        coordinates.forEach(coordinate => {
            columns[coordinate.x].splice(coordinate.y, 1)
            setColumns([...columns])
        })
        setCoordinates([])
        console.table(columns)
    }

    function getColor(x, y) {
        // restituisce il colore di un cubo
        // se gli viene passato un valore superiore alla lunghezza della griglia non esegue la funzione
        if (y >= columns.length || y < 0 || x >= columns[y].length || x < 0) return null
        const color = columns[y][x]
        return color
    }

    return {
        columns: columns,
        checkColor: checkColor,
        removeCoordinates: removeCoordinates
    }
}



export default useCheckColors