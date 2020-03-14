import React from 'react';
import { CharacterCard, HealthCard } from 'components';

import styles from './Main.module.scss';

const Main = () => (
    <div className={styles.container}>
        <div className={styles.header}>
            <CharacterCard
                name={'Qip Hardtree'}
                archetype={'Barbarian'}
                level={4}
                gender={'Male'}
                race={'Human'}
            />
            <HealthCard
                max={50}
                current={50}
            />
        </div>
    </div>
);


export default Main;