import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';

import foods from './foods.json';

function App() {
  return (
    <>
      <h2> Food List </h2>
      <hr />
      
      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
    }} />
    </>
  );
}

export default App;
