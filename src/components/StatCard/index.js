import React from 'react'
import PropTypes from 'prop-types'

import styles from './StatCard.module.scss';

const StatCard = ({ stat, value, bonus }) => {
    return (
        <div className={ styles.container }>
            <div className={ styles.stat }>{ stat }</div>
            <div className={ styles.primary }>{ value }</div>
            { bonus && <div className={ styles.bonus }>+{ bonus }</div> }
        </div>
    )
}

StatCard.propTypes = {

}

export default StatCard;

