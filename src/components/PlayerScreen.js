import React from 'react';
import styles from '../assets/components/PlayerScreen.module.css';
import { usePlayerContext } from '../contexts/PlayerContext.js';

const PlayerScreen = () => {
    const { player, playerOneScore, playerTwoScore } = usePlayerContext();

    return (
        <div className={styles.playerContainer}>
            <label className={styles.player}>current player: {player}</label>
            <label className={styles.player1}> player 1 score: {playerOneScore}</label>
            <label className={styles.player2}> player 2 score: {playerTwoScore}</label>
        </div>
    );
}

export default PlayerScreen;