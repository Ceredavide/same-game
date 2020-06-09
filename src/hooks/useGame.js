import { useState } from "react"
import useColumns from "./useColumns"

const useGame = (colors, lenX, lenY) => {

    const { initialColumns, initialColorsState } = useColumns(colors, lenX, lenY)

    const [columns, setColumns] = useState(initialColumns)
    const [colorsState, setColorsState] = useState(initialColorsState)
    const [coordinates, setCoordinates] = useState([])
    const [score, setScore] = useState(0)
    const [gameCounter, setGameCounter] = useState(0)

    function play(y, x) {
        checkColor(x, y)
        removeCoordinates()
        checkIsFinished()
    }

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
            setCoordinates(...coordinates)
            return checkColor(x, y)
        }
    }

    function removeCoordinates() {
        // ordina le coordinate in modo crescente
        let sortedArray = coordinates.sort((a, b) => b.x - a.x)
        let len = sortedArray.length
        setCoordinates(...sortedArray)
        setScore(prevScore => prevScore + Math.pow((len), 2))
        coordinates.forEach(coordinate => {
            colorsState[getColor(coordinate.x, coordinate.y)]--
            setColorsState({ ...colorsState })
            columns[coordinate.y].splice(coordinate.x, 1)
            setColumns([...columns])
        })
        setCoordinates([])
        setGameCounter(gameCounter + 1)
    }

    function checkIsFinished() {
        let gameFinshed = colors.every(color => colorsState[color] <= 1)

        if (gameFinshed) {
            
        }

    }

    function getColor(x, y) {
        // restituisce il colore di un cubo
        // se gli viene passato un valore superiore alla lunghezza della griglia non esegue la funzione
        if (y >= columns.length || y < 0 || x >= columns[y].length || x < 0) return null
        else return columns[y][x]
    }

    return {
        columns: columns,
        score: score,
        gameCounter: gameCounter,
        play: play
    }
}



export default useGame