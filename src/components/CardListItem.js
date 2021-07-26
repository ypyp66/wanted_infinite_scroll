import React from 'react';
import PropTypes from 'prop-types';

CardListItem.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  body: PropTypes.string
}

function CardListItem({id, email, body}) {
  return (
    <div>
      <div>
        <span>Comment Id</span>
        <span>{id}</span>
      </div>
      <div>
        <span>Email</span>
        <span>{email}</span>
      </div>
      <div>
        <span>Comment</span>
        <p>{body}</p></div>
    </div>
  );
}

export default CardListItem;