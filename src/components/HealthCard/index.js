import React, { useState } from 'react';

import styles from './HealthCard.module.scss';

const HealthCard = ({ max, current }) => {
    const [health, setHealth] = useState({
        max,
        current,
        damage: 0,
        heal: 0
    });

    return (
        <div className={styles.container}>
            <div className={styles.health}>
                <p className={styles.current}>{health.current}</p>
                <p className={styles.max}>{health.max}</p>
            </div>
            <div className={styles.inputs}>
                <input className={styles.damageInput} name="damage" placeholder="Damage" />
                <input className={styles.healInput} name="heal" placeholder="Heal" />
            </div>
        </div>
    )
};

export default HealthCard;