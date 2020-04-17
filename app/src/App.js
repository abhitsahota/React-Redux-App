import React from 'react';
import './App.css';
import { connect } from 'react-redux';

// Component imports
import CurrencySelector from './components/currencySelector';
import { CurrencyList } from './components/currencyList';


function App(props) {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Currency Exchange</h1>
      </header>
      <main>
        <CurrencySelector />
        <CurrencyList />
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {  })(App);
