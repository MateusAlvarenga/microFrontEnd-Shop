import Product from './components/Product';
import './App.css';

function App() {

  function getRandomArbitrary(min, max) {
    return Math.round((Math.random() * (max - min) + min) * 100) / 100
  }

  let productsList = [];
  for (let index = 1; index <= 10; index++) {
    productsList.push(<Product key={index} id={index} name={`product${index}`} price={getRandomArbitrary(20, 800)} />)
    if (index % 5 === 0)
      productsList.push(<hr key={index * -1} />)

  }

  return (
    <div className="App">
      {productsList.map((product) => product)}
    </div>
  );
}

export default App;
