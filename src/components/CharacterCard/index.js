import React from 'react';

import styles from './CharacterCard.module.scss';

const CharacterCard = ({
    name,
    archetype,
    level,
    gender,
    race,
}) => (<div className={styles.container}>
    <p>{name}</p>
    <p>{gender}{' '}{race}{' '}{archetype}</p>
    <p>Level: {level}</p>
</div>);

export default CharacterCard;