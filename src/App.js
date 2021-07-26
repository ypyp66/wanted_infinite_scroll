import styled from 'styled-components';
import CardList from './components/CardList';

const Conatiner = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return <CardList />;
}

export default App;
