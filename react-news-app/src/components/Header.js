import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ setCategory, setSearchQuery }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(input);
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header */}
        <div className="flex items-center justify-between py-4 gap-6">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setSearchQuery('')}
            className="text-2xl font-bold text-slate-900 whitespace-nowrap hover:text-blue-600 transition"
          >
            📰 Global News
          </Link>

          {/* Search Area */}
          <form
            className="flex flex-1 max-w-2xl gap-2"
            onSubmit={handleSearch}
          >

            {/* Category */}
            <select
              onChange={(e) => {
                setCategory(e.target.value);
                navigate('/');
              }}
              className="px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="general">General</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="sports">Sports</option>
              <option value="entertainment">Entertainment</option>
            </select>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search news..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 min-w-0 px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Search Button */}
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition"
            >
              Search
            </button>

          </form>

        </div>

      </div>

    </header>
  );
};

export default Header;