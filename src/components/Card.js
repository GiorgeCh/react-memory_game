import React, { useState } from 'react';
import styles from '../assets/components/Card.module.css';

const Card = (props) => {
    const [flipped, setFlipped] = useState(false)
    console.log('card:', props.card.id, props.card.icon)

    const closeCard = () => {
        setFlipped(false)
    }

    const onClickAction = () => {
        console.log('flipped:', props.card.id, props.card.icon)
        setFlipped(true)
        props.onClick({ card: props.card, closeCard })
    }

    return (
        <div className={`${styles.card} ${(flipped) ? styles.card_inactive : styles.card_active}`} onClick={onClickAction}>
            {flipped ? props.card.icon : 'XXX'}
        </div>
    );
}

export default Card;