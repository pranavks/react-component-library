import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FoundationsPage from './layout/FoundationsPage/FoundationsPage';
import ElementsPage from './layout/ElementsPage/ElementsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={FoundationsPage} />
        <Route path="/elements" component={ElementsPage} />
      </div>
    </Router>
  );
}

export default App;
