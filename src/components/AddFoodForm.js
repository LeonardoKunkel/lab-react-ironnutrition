import React from 'react'

import { useState } from 'react';

import { Divider, Input } from 'antd';

export default function AddFoodForm(props) {

    const [newFood, setNewFood] = useState({
        name: '',
        image: '',
        calories: '',
        servings: ''
    })

    // const [list, setList] = useState(props)

    const check = (event) => {

        // console.log(event.target.value);
        // console.log('El campo de texto en el que estás escribiendo es: ', event.target.name);

        setNewFood({
            ...newFood,
            [event.target.name]: event.target.value
        })

    }

    const submit = (event) => {

        event.preventDefault()

        // setList({
        //     ...list,
        //     newFood
        // })

        props.addFoods(newFood)

        setNewFood({
            name: '',
            image: '',
            calories: '',
            servings: ''
        })
    }
    return (
        <form
            onSubmit={ (event) => { submit(event) } }
            style={ {padding: '20px 45px 20px 45px'} }
        >

            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input
                name="name"
                value={newFood.name}
                type="text"
                onChange={event => { check(event) }}
            />

            <label>Image</label>
            <Input
                name="image"
                value={newFood.image}
                type="text"
                onChange={event => { check(event) }}
            />

            <label>Calories</label>
            <Input
                name="calories"
                value={newFood.calories}
                type="text"
                onChange={event => { check(event) }}
            />

            <label>Servings</label>
            <Input
                name="servings"
                value={newFood.servings}
                type="text"
                onChange={event => { check(event) }}
            />

            <button type="submit">Create</button>
        </form>
    )
}
