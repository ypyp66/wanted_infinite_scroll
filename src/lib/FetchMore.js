import React, { useEffect, useRef } from 'react';

function FetchMore({ setPageNumber }) {
  const fetchMore = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPageNumber(page => page + 1);
  });

  useEffect(() => {
    fetchMoreObserver.observe(fetchMore.current);
  }, []);
  return <div ref={fetchMore} />;
}

export default FetchMore;
