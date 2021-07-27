import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';
import Observable from './Observable';
import * as api from '../lib/api';

function CardList() {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const fetchComments = useCallback(async () => {
    try {
      const { data } = await api.fetchComments(page);
      setList(prev => [...prev, ...data]);
      setIsLast(data.length <= 0);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    setLoading(true);
    !isLast && fetchComments();
  }, [isLast, fetchComments]);

  if (page === 1 && loading) return <div>로딩 중...</div>;
  if (error) return <div>데이터 로드 실패</div>;
  if (!list) return <div>데이터 없음</div>;
  return (
    <CardOuter>
      {list.map(({ id, email, body }) => (
        <CardListItem key={id} id={id} email={email} body={body} />
      ))}
      <Observable setPage={setPage} />
    </CardOuter>
  );
}

const CardOuter = styled.div`
  margin-top: 33px;
`;

export default CardList;

// CardListItem 들을 보여주는 CardList 컴포넌트
