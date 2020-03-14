import React from 'react';

import { HealthCard } from 'components';

import styles from './CharacterCard.module.scss';

const CharacterCard = ({
    name,
    archetype,
    level,
    gender,
    race,
}) => (<div className={styles.container}>
    <p className={styles.name}>{name}</p>
    <p className={styles.info}>
        {gender}{' '}{race}
    </p>
    <p className={styles.class}>{archetype}</p>
    <p className={styles.level}>Level <span>{level}</span></p>
</div>);

export default CharacterCard;