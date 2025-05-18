import React from 'react';
import { FaStar, FaEye } from 'react-icons/fa';
import { format } from 'date-fns';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    published_date = author?.published_date,
  } = news;

  const formattedDate = published_date
    ? format(new Date(published_date), 'yyyy-MM-dd')
    : 'Unknown';

  return (
    <div className="card shadow-xl mb-6 mx-5">
      {/* Author and Action Bar */}
      <div className="flex bg-base-200 rounded-t-xl items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author?.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="space-x-2">
          <button className="btn btn-ghost btn-sm">🔗</button>
          <button className="btn btn-ghost btn-sm">🔖</button>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg px-4 pt-4">{title}</h2>

      {/* Thumbnail */}
      <figure className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-52 object-cover rounded"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-4 text-sm text-gray-700">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...{' '}
            <span className="text-primary cursor-pointer font-medium">Read More</span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 text-sm border-t pt-3">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? '' : 'opacity-20'} />
          ))}
          <span className="ml-1 text-black">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
