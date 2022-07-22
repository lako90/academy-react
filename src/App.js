import Container from './layout/Container';
import Albums from './modules/Albums';
import Photos from './modules/Photos';

function App() {
  return (
    <Container>
      <Albums />
      <Photos />
    </Container>
  );
}

export default App;
