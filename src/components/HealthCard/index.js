import React, {useState} from 'react';

import styles from './HealthCard.module.scss';

const HealthCard = ({max, current}) => {
    const [health, setHealth] = useState({
        max,
        current,
    });
return (
    <div className={styles.container}>
        <div className={styles.health}>
            <p>{health.current}</p>
            <p>{health.max}</p>
        </div>
        <div className={styles.inputs}>
            <input name="damage" placeholder="Damage" />
            <input name="heal" placeholder="Heal" />
        </div>
    </div>
)}; 

export default HealthCard;