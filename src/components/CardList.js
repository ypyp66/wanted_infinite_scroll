import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';
import * as api from '../lib/api';
import FetchMore from '../lib/FetchMore';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getComments();

    console.log(pageNumber);
  }, [pageNumber]);

  const getComments = async () => {
    const result = await api.getComments(pageNumber);
    setComments(prev => [...prev, ...result.data]);
    setLoading(false);
  };

  return (
    <Conatiner>
      <Inner>
        {comments.map(d => (
          <CardListItem key={d.id} data={d} />
        ))}
        {!loading && <FetchMore setPageNumber={setPageNumber} />}
      </Inner>
    </Conatiner>
  );
}

export default CardList;
