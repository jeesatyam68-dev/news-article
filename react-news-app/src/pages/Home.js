import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from '../components/NewsList';

const Home = ({ category, searchQuery }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      try {
        const API_KEY = 'a2e00beeb12c4070a198bf79ddbd0da6';

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

        if (searchQuery) {
          url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`;
        }

        const response = await axios.get(url);
        setNews(response.data.articles);

      } catch (error) {
        console.error("Error fetching the news", error);
      }

      setLoading(false);
    };

    fetchNews();
  }, [category, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Page Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : `Top ${category.charAt(0).toUpperCase() + category.slice(1)} Headlines`}
        </h2>

        <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* News */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-lg font-semibold text-slate-500">
            Loading news...
          </div>
        </div>
      ) : (
        <NewsList news={news} />
      )}

    </div>
  );
};

export default Home;