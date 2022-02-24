import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';

import foods from './foods.json';

function App() {
  return (
    <>
      <h2> Food List </h2>
      <hr />
      {
        foods.map((e) => {
          return(

            <FoodBox
              food={ {
                name: e.name,
                calories: e.calories,
                image: e.image,
                servings: e.servings
              }}
            />
          )
        })
      }
    </>
  );
}

export default App;
