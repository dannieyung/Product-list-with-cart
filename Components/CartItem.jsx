import { useSelector } from "react-redux"
import CartSingleItem from "./CartSingleItem"
import CartItemButton from "./CartItemButton"
import CartCarbon from "./CartCarbon"
import CartTotal from "./CartTotal"



const CartItem = ({removeItem,OpenModalbtn}) => {
  

  

  const { numItemsInCart } = useSelector((state) => state.cart)
   const { cartItems } = useSelector((state) => state.cart)
  if (numItemsInCart < 1 ) {
    return (
      <div className="bg-[#fcf9f7] p-6 rounded-xl md:min-w-[350px] sm:mt-8">
        <h2 className="text-2xl text-dark-red font-bold">
          Your Cart ({numItemsInCart})
        </h2>
        <div className="flex flex-col gap-4 items-center justify-center mt-8">
          <img src="/src/New Cart/assets/illustration-empty-cart.svg" alt="empty" />
          <p className="text-rose400 font-medium">
            Your added items will appear here
          </p>
        </div>
      </div>
    )
  }
  return (
    <section className="bg-[#fcf9f7] p-6 rounded-xl md:min-w-[350px] sm:mt-8">
      <h2 className="text-2xl text-dark-red font-bold">
        Your Cart ({numItemsInCart})

      </h2>
      
        {cartItems.map((item) => {
          
          return (
            <CartSingleItem key={item.name} {...item} removeItem={removeItem} />
          )
            
          
        })}
        <CartTotal/>
        <CartCarbon/>
        <CartItemButton text="Confirm Order" OpenModalbtn={OpenModalbtn} />
      
    </section>
  )
}

export default CartItem
