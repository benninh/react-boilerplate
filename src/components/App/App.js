import React from 'react';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          Hello World from the Component!
        </div>
      </div>
    );
  }
} 

export default App;