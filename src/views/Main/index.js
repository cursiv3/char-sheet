import React from 'react';

import PropTypes from 'prop-types';

import {
    CharacterCard,
    HealthCard,
    StatCard,
    CombatInfoCard,
    SavesSection
} from 'components';

import styles from './Main.module.scss';

const Main = ({ stats, combatStats }) => (
    <div className={ styles.container }>
        <div className={ styles.header }>
            <CharacterCard
                name={ 'Qip Hardtree' }
                archetype={ 'Barbarian' }
                level={ 4 }
                gender={ 'Male' }
                race={ 'Human' }
            />
            <div>
                <HealthCard
                    max={ 50 }
                    current={ 50 }
                />
            </div>
        </div>
        <CombatInfoCard combatStats={ combatStats } />

        <div className={ styles.stats }>
            { stats.map(stat => <StatCard
                valueStyle={ styles.statValue }
                key={ stat.stat }
                color={ 'red' }
                { ...stat }
            />) }
        </div>
        <div className={ styles.saves }>
            <SavesSection />
        </div>
    </div >
);

Main.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({})),
    modifiers: PropTypes.arrayOf(PropTypes.shape({})),
}

Main.defaultProps = {
    stats: [],
    modifiers: []
}

export default Main;