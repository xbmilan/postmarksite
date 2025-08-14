import { Route, Router } from 'wouter';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
