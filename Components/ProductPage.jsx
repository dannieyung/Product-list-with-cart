import CartItem from "./CartItem"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, increaseAmount,decreaseAmount, removeProduct, OpenModal } from "../feature/Cart/cartSlice"
import ProductItem from "./ProductItem"
import CartModal from "./CartModal"

  
const ProductPage = () => {
   const { desserts } = useSelector((state) => state.cart)
   const { cartItems } = useSelector((state) => state.cart)
   const dispatch = useDispatch()

const increaseButton = (name)=>{
const newCart = {
  ...desserts.find((item) => item.name === name),
  isSelected: true,
}
dispatch(increaseAmount({ product: newCart }))
  }

  const decreaseButton = (name) => {
     const newCart = {
       ...desserts.find((item) => item.name === name)
       
     }

     dispatch(decreaseAmount({ product: newCart }))
    
  }

  const removeItem = (name) => {
   const newCart = {
     ...desserts.find((item) => item.name === name)}
    dispatch(removeProduct({product: newCart }))
  }

  const OpenModalbtn = ()=>{
    dispatch(OpenModal())
  }

   const handleClick = (name) => {
    const newCart = {...desserts.find((item)=> item.name === name ),isSelected: true}
     dispatch(addProduct({product: newCart }))
   }

  return (
    <div>
      <h1 className="align-element pl-20 text-4xl font-bold text-rose900 mb-6">
        Desserts
      </h1>
      <CartModal />
      <section className="align-element  grid md:flex w-full ">
        <div className=" align-element grid gap-8 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-8">
          
          {desserts.map((dessert) => {
            return (
              <ProductItem
                key={dessert.name}
                {...dessert}
                name={dessert.name}
                amount={dessert.amount}
                handleClick={handleClick}
                increaseButton={increaseButton}
                decreaseButton={decreaseButton}
              />
            )
          })}
        </div>

        <div>
          <CartItem removeItem={removeItem} OpenModalbtn={OpenModalbtn} />
        </div>
      </section>
    </div>
  )
}

export default ProductPage
