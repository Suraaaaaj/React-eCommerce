import { Header } from './components/Header/Header';
import { MainRoutes } from './routes/MainRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes  />
    </Router>
  );
}

export default App;
