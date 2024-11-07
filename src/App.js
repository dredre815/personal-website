import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Blog from './pages/Blog';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <GlobalStyles />
        <div className="App">
          <Navbar />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Layout>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App; 