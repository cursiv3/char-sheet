import React from 'react';
import PropTypes from 'prop-types';

import styles from './CombatInfoCard.module.scss';

const CombatInfoCard = ({ combatStats = [] }) => (
    <div className={ styles.container }>
        { combatStats.map(({ stat, value }) => <div className={ styles.stat }>
            <p className={ styles.name }>{ stat }</p>
            <hr />
            <p className={ styles.value }>{ value }</p>
        </div>
        ) }
    </div>
);


CombatInfoCard.propTypes = {
}

export default CombatInfoCard;