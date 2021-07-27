import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

Observable.prototype = {
  setPage: PropTypes.func, // () => void
};
function Observable({ setPage }) {
  const observableTrigger = useRef(null);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([{ isIntersecting }]) => {
        isIntersecting && setPage(page => page + 1);
      }),
    [setPage],
  );

  useEffect(() => {
    observer.observe(observableTrigger.current);
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return <div ref={observableTrigger} />;
}

export default Observable;

// 교차를 감지하고 page 값을 업데이트하는 컴포넌트
