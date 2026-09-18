import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {

  if (news.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-slate-600">
          No articles found.
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <NewsItem
          key={index}
          index={index}
          article={article}
        />
      ))}
    </div>
  );
};

export default NewsList;