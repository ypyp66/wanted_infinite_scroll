import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';
import { reducer, loadingStart, success, getError } from '../lib/api';
import { request } from '../utils/axios';

function CardList() {
  const PAGE = 1;
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchComments = async () => {
    dispatch(loadingStart());
    try {
      const response = await request(
        'get',
        `${API_URL}_page=${PAGE}&_limit=10`,
      );
      dispatch(success(response));
    } catch (e) {
      dispatch(getError(e));
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const { loading, data: comments, error } = state;
  console.log(comments);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>데이터 로드 실패</div>;
  if (!comments) return <div>데이터 없음</div>;
  return (
    <CardOuter>
      {comments.map(({ id, body, email }) => (
        <CardListItem key={id} id={id} body={body} email={email} />
      ))}
    </CardOuter>
  );
}

const CardOuter = styled.div`
  margin-top: 33px;
`;

export default CardList;

const API_URL = 'https://jsonplaceholder.typicode.com/comments?';
