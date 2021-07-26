import React from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';

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
  const data = [
    {
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium',
    },
    {
      postId: 1,
      id: 2,
      name: 'quo vero reiciendis velit similique earum',
      email: 'Jayne_Kuhic@sydney.com',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et',
    },
    {
      postId: 1,
      id: 3,
      name: 'odio adipisci rerum aut animi',
      email: 'Nikita@garfield.biz',
      body: 'quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione',
    },
    {
      postId: 1,
      id: 4,
      name: 'alias odio sit',
      email: 'Lew@alysha.tv',
      body: 'non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati',
    },
    {
      postId: 1,
      id: 5,
      name: 'vero eaque aliquid doloribus et culpa',
      email: 'Hayden@althea.biz',
      body: 'harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et',
    },
    {
      postId: 2,
      id: 6,
      name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
      email: 'Presley.Mueller@myrl.com',
      body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in',
    },
    {
      postId: 2,
      id: 7,
      name: 'repellat consequatur praesentium vel minus molestias voluptatum',
      email: 'Dallas@ole.me',
      body: 'maiores sed dolores similique labore et inventore et quasi temporibus esse sunt id et eos voluptatem aliquam aliquid ratione corporis molestiae mollitia quia et magnam dolor',
    },
    {
      postId: 2,
      id: 8,
      name: 'et omnis dolorem',
      email: 'Mallory_Kunze@marie.org',
      body: 'ut voluptatem corrupti velit ad voluptatem maiores et nisi velit vero accusamus maiores voluptates quia aliquid ullam eaque',
    },
    {
      postId: 2,
      id: 9,
      name: 'provident id voluptas',
      email: 'Meghan_Littel@rene.us',
      body: 'sapiente assumenda molestiae atque adipisci laborum distinctio aperiam et ab ut omnis et occaecati aspernatur odit sit rem expedita quas enim ipsam minus',
    },
    {
      postId: 2,
      id: 10,
      name: 'eaque et deleniti atque tenetur ut quo ut',
      email: 'Carmen_Keeling@caroline.name',
      body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla quia quas dolores velit et non aut quia necessitatibus nostrum quaerat nulla et accusamus nisi facilis',
    },
  ];
  return (
    <Conatiner>
      <Inner>
        {data.map(d => (
          <CardListItem key={d.id} data={d} />
        ))}
      </Inner>
    </Conatiner>
  );
}

export default CardList;
