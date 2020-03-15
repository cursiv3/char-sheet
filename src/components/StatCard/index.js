import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';

import styles from './StatCard.module.scss';

const StatCard = ({
    stat,
    value,
    bonus,
    statStyle,
    valueStyle,
    bonusStyle
}) => {
    return (
        <div className={ styles.container }>
            <div className={ styles.statWrapper }>
                <div className={ cx(styles.stat, statStyle) }>{ stat }</div>
                <hr />
                <div className={ cx(styles.primary, valueStyle) }>{ value }</div>
            </div>
            { bonus && <div className={ cx(styles.bonus, bonusStyle) }>+{ bonus }</div> }
        </div>
    )
}

StatCard.propTypes = {
    stat: PropTypes.string,
    value: PropTypes.oneOf(PropTypes.string, PropTypes.number),
    bonus: PropTypes.number,
    statStyle: PropTypes.string,
    valueStyle: PropTypes.string,
    bonusStyle: PropTypes.string
}

export default StatCard;

