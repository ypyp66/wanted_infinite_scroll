import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';
import * as api from '../lib/api';

const Conatiner = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 33px 0;
  box-sizing: border-box;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function CardList() {
  const [pageNumber, setPageNumber] = useState(1);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.getComments(pageNumber).then(res => setComments(comments.concat(res)));
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight !== scrollTop + clientHeight) return;

    setPageNumber(prev => prev + 1);
  };

  return (
    <Conatiner>
      <Inner>
        {comments.map(d => (
          <CardListItem key={d.id} data={d} />
        ))}
      </Inner>
    </Conatiner>
  );
}

export default CardList;
