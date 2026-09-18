import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ article, index }) => {

  if (!article.urlToImage) {
    return null;
  }

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

      {/* Image */}
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Date */}
        <p className="text-sm text-slate-500 mb-2">
          {new Date(article.publishedAt).toDateString()}
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 line-clamp-2">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
          {article.description || 'No description available for this article.'}
        </p>

        {/* Button */}
        <Link
          to={`/article/${index}`}
          state={{ article }}
          className="mt-auto inline-block w-fit px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Read Full Article →
        </Link>

      </div>

    </article>
  );
};

export default NewsItem;