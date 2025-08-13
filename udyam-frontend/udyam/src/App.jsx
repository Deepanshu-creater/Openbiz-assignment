import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext/authContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Registration from './pages/Registration';
import StatusCheck from './pages/StatusCheck';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';

// Protected Route Component with inline styles
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Admin Route Component with inline styles
const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/status/:id" element={<StatusCheck />} />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <div style={{ padding: '20px' }}>
                  <Dashboard />
                </div>
              </ProtectedRoute>
            } />
            
            <Route path="/admin" element={
              <AdminRoute>
                <div style={{ padding: '20px' }}>
                  <AdminPanel />
                </div>
              </AdminRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;