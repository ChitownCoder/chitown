import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './pages/HomePage';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes path='/' element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
