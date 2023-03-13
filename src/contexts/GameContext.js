import React, {useState, createContext, useContext} from "react"

export const GameContext = createContext()

//TODO create shuffle cards function
const cardsArray = [
	{ id: 1, icon: "A"},
	{ id: 2, icon: "B"},
	{ id: 3, icon: "C"},
	{ id: 4, icon: "D"},
	{ id: 5,  icon: "E"},
	{ id: 6,  icon: "F"},
	{ id: 7,  icon: "G"},
	{ id: 8,  icon: "H"},
	{ id: 9, icon: "A"},
	{ id: 10, icon: "B"},
	{ id: 11, icon: "C"},
	{ id: 12, icon: "D"},
	{ id: 13,  icon: "E"},
	{ id: 14,  icon: "F"},
	{ id: 15,  icon: "G"},
	{ id: 16,  icon: "H"}
]

export const GameContextProvider = (props) => {
	//TODO: file with constants
	const [gameState, setgameState] = useState("idle")
	const [cards, setCards] = useState(cardsArray);

	const changeGameState = (state) => {
		if(state) setgameState(state)
	}

	return <GameContext.Provider value={{gameState, changeGameState,cards, setCards}}>{props.children}</GameContext.Provider>
}

export const useGameContext = () => useContext(GameContext)
