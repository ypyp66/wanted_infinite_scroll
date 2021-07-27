import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

Observable.prototype = {
  setPage: PropTypes.func, // () => void
};
function Observable({ setPage }) {
  const observableTrigger = useRef(null);
  const observer = new IntersectionObserver(([{ isIntersecting }]) => {
    isIntersecting && setPage(page => page + 1);
  });

  useEffect(() => {
    observer.observe(observableTrigger.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={observableTrigger} />;
}

export default Observable;
