import React, { } from "react"
import styles from "../assets/components/CardsScreen.module.css"
import {usePlayerContext} from "../contexts/PlayerContext.js"
import {useGameContext} from "../contexts/GameContext.js"
import Card from "./Card.js"

const CardsScreen = () => {
	const {changePlayer, addPlayerScore } = usePlayerContext()
	const {cards} = useGameContext()

    let currentCard = null;
    
    const executeCardClick = ({card, closeCard}) => {
        try{
            console.log(' -- -- -- executeCardClick 1',currentCard)

            if(!currentCard){
                console.log(' -- -- -- executeCardClick 2',card)
                currentCard = {card, closeCard}
                console.log(' -- -- -- executeCardClick 2.5',currentCard)

                return;
            }
            else{
                console.log(' -- -- -- executeCardClick 3')
                if(currentCard.card.id !== card.id && currentCard.card.icon === card.icon){
                    addPlayerScore()
                    currentCard = null;
                    return;
                }
            }
            console.log(' -- -- -- executeCardClick 4')

            setTimeout(()=>{
                changePlayer()
                currentCard.closeCard();
                closeCard();
                currentCard = null
            },300)
        }catch(err){
            console.log('executeCardClick',err)
        }
    }

	return (
		<div className={styles.cardsContainer}>
			{cards.map((card, index) => {
				return <Card key={index} card={card} index={index} onClick={(executeCardClick)} />
			})}
		</div>
	)
}

export default CardsScreen
