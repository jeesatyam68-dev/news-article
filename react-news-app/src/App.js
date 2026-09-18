import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import './App.css'; // <-- Yahi wo jadui line hai jo CSS layegi

function App() {
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
        <Header setCategory={setCategory} setSearchQuery={setSearchQuery} />
        
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<Home category={category} searchQuery={searchQuery} />} 
            />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;