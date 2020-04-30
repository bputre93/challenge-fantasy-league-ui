import React, { Component } from 'react';
import RuleInstanceChart from '../components/RuleInstanceChart';
import PointsByWeek from '../components/PointsByWeek';


class Statistics extends Component {

    render() {
        return (
            <div>
                <RuleInstanceChart/>
                <PointsByWeek/>
            </div>
        )
    }
}

export default Statistics;