import React from 'react';
import { connect } from 'react-redux';


// Actions
import { fetchRates } from '../actions/fetchRates'

const CurrencySelector = props => {

    return (
        <div>
            <button onClick={() => props.fetchRates()}>Convert CAD</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {}
  }

export default connect(mapStateToProps, { fetchRates })(CurrencySelector);