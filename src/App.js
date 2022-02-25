import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';

import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';

import { Row, Divider, Button } from 'antd';

function App() {
  return (
    <>
      <AddFoodForm />

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
