import React from 'react';

import { HealthCard } from 'components';

import styles from './CharacterCard.module.scss';

const CharacterCard = ({
    name,
    archetype,
    level,
    gender,
    race,
}) => (
    <div className={styles.container}>
        <div className={styles.charInfoWrapper}>
            <p className={styles.name}>{name}</p>
            <p className={styles.info}>
                {gender}{' '}{race}{' '}
            </p>
            <p className={styles.class}>{archetype}</p>
            <p className={styles.level}>Level <span>{level}</span></p>
        </div>
        <HealthCard max={50} current={50} />
    </div>);

export default CharacterCard;