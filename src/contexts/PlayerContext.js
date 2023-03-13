import React, {useState, createContext, useContext} from "react"

export const PlayerContext = createContext()

export const PlayerContextProvider = (props) => {
	const [player, setPlayer] = useState(1)
	const [playerOneScore, setPlayerOneScore] = useState(0)
	const [playerTwoScore, setPlayerTwoScore] = useState(0)

	const changePlayer = (currectPlayer) => {
		setPlayer((prev) => {return prev == 1?2:1})
	}

	const addPlayerScore = () => {
		if (player === 1) {
      //todo: fix with prev
			setPlayerOneScore(prev => prev+1)
		} else if (player === 2) {
			setPlayerTwoScore(prev => prev+1)
		}
	}

	return <PlayerContext.Provider value={{player, changePlayer, playerOneScore, playerTwoScore, addPlayerScore}}>{props.children}</PlayerContext.Provider>
}

export const usePlayerContext = () => useContext(PlayerContext)
