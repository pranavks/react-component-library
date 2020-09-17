import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FoundationsPage from './pages/FoundationsPage/FoundationsPage';
import ElementsPage from './pages/ElementsPage/ElementsPage';
import DemoPage from './pages/DemoPage/DemoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/foundations" exact component={FoundationsPage} />
        <Route path="/elements" component={ElementsPage} />
        <Route path="/demo" component={DemoPage} />
      </div>
    </Router>
  );
}

export default App;
