import burger from '../Images/Menu/burger.png'
import dBurger from '../Images/Menu/double-burger.png'
import hotdog from '../Images/Menu/hotdog.png'
import frenchFriesCheese from '../Images/Menu/french-fries-cheese.png'
import chickenAlfredo from '../Images/Menu/chicken-alfredo.png'
import chickenBurger from '../Images/Menu/chicken-burger.png'
import peperoniPizza from '../Images/Menu/peperoni-pizza.png'
import { FoodCard } from '.'

export const Menu = () => {

  const foodMenu = [
    {id:0 ,name: 'Burger', price: '$20' , src: burger},
    {id:1 ,name: 'Double Burger', price: '$25' , src: dBurger},
    {id:2 ,name: 'HotDog', price: '$5' , src: hotdog},
    {id:3 ,name: 'French Fries Cheese', price: '$15' , src: frenchFriesCheese},
    {id:5 ,name: 'KFC Chicken Burger', price: '$30' , src: chickenBurger},
    {id:4 ,name: 'Chicken Alfredo', price: '$18' , src: chickenAlfredo},
    {id:7 ,name: 'Peperoni Pizza', price: '$25' , src: peperoniPizza},
    {id:6 ,name: 'French Fries Cheese', price: '$15' , src: frenchFriesCheese},
    {id:8 ,name: 'KFC Chicken Burger', price: '$30' , src: chickenBurger},
  ]

  return (
    <div className="flex justify-center flex-col py-10 px-5">
      <div className='text-center'>
        <h1 className="text-6xl pb-16">Our Menu</h1>
      </div>
      <div className='grid grid-cols-3 gap-9 px-56'>
        {foodMenu.map(({ id, name, price, src }) => (   
          <FoodCard key={id} src={src} name={name} price = {price}/>
        ))}
      </div>
    </div>
  )
}