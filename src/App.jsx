
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>

      <Header />
      <main className="pt-20">
      {/* declaring routes to navigate  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="p-6 text-center text-2xl text-red-500">
              404 - Page Not Found
            </div>
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
