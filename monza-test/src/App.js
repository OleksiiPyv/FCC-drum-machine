import Footer from './sections/Footer';
import Header from './sections/Header';
import Offers from './sections/Offers';
import Questions from './sections/Questions';
import Subscribe from './sections/Subscribe';

function App() {
  return (
    <div className="App">
        <Header />
        <Offers />
        <Subscribe />
        <Questions />
        <Footer />
    </div>
  );
}

export default App;
