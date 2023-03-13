import styles from '../assets/App.module.css';

import {GameContextProvider} from "../contexts/GameContext.js"
import {PlayerContextProvider} from "../contexts/PlayerContext.js"
import PlayerScreen from "../components/PlayerScreen.js"
import CardsScreen from "../components/CardsScreen.js"

function App() {
	return (
		<div className={styles.App}>
			<GameContextProvider>
				<PlayerContextProvider>
					<PlayerScreen />
					<CardsScreen />
				</PlayerContextProvider>
			</GameContextProvider>
		</div>
	)
}

export default App
