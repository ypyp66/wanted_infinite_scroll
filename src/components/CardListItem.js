import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 500px;
  align-items: flex-start;
  background-color: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;

  & + & {
    margin-top: 14px;
  }
`;

const Item = styled.div`
  & + & {
    margin-top: 12px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  margin-right: 12px;
`;

function CardListItem({ data }) {
  return (
    <ItemContainer>
      <Item>
        <Title>Comment Id</Title>
        {data.id}
      </Item>
      <Item>
        <Title>Email</Title>
        {data.email}
      </Item>
      <Item>
        <div>
          <Title>Comment</Title>
        </div>
        {data.body}
      </Item>
    </ItemContainer>
  );
}

export default CardListItem;
