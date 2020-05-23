import React from 'react';
import ListCardSidebarTop from './ListCardSidebarTop';
import ListCardSidebar from './ListCardSidebar';

const CardMoviesSidebar = () => {

  const item = [0, 1, 2, 3, 4, 5, 6].map(res => {
    return (
      <ListCardSidebar key={res} />
    )
  });

  return (
    <>
      <ListCardSidebarTop />
      {item}
    </>
  )
}

export default CardMoviesSidebar;
