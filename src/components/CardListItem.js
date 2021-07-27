import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

CardListItem.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  body: PropTypes.string,
};

function CardListItem({ id, email, body }) {
  return (
    <Card>
      <InfoGroup>
        <Title>Comment Id</Title>
        <span>{id}</span>
      </InfoGroup>
      <InfoGroup>
        <Title>Email</Title>
        <span>{email}</span>
      </InfoGroup>
      <InfoGroup>
        <Title>Comment</Title>
        <Comment>{body}</Comment>
      </InfoGroup>
    </Card>
  );
}

const Card = styled.div`
  width: 500px;
  height: 100%;
  padding: 20px;
  margin-bottom: 14px;
  background: #f8f9fa;
  border: solid #ced4da 0.5px;
  border-radius: 20px;
  font-size: 18px;
  color: #212529;
  line-height: 21px;
`;

const InfoGroup = styled.div`
  & + & {
    margin-top: 12px;
  }
`;

const Title = styled.span`
  font-weight: bold;

  & + span {
    margin-left: 12px;
  }
  & + p {
    margin-top: 2px;
  }
`;

const Comment = styled.p`
  width: 460px;
`;

export default CardListItem;
