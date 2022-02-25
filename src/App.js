import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';

import foodsJSON from './foods.json';
import AddFoodForm from './components/AddFoodForm';

import { useState } from 'react';

import { Row, Divider, Button } from 'antd';

function App() {

  const[foods, setFoods] = useState(foodsJSON)

  const addFood = (newFood) => {

    const updatedFoods = [newFood, ...foods]

    setFoods(updatedFoods)

  }

  return (
    <>
      <AddFoodForm addFoods={ addFood }/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>

        {
          foods.map((e, index) => {
            return(

              <FoodBox
                key={index}
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

        </Row>
    </>
  );
}

export default App;
