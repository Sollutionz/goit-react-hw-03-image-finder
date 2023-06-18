import React from 'react';

export const Button = ({ onLoadMore }) => {
  return (
    <button className="Button" type="button" onClick={onLoadMore}>
      Load More
    </button>
  );
};