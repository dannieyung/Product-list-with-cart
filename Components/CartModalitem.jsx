import { useSelector } from "react-redux"
import CartModalSingleItem from "./CartModalSingleItem"

const CartModalitem = () => {
  const { cartItems } = useSelector((state) => state.cart)
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <CartModalSingleItem key={item.name} {...item}  />
        )
      })}
    </div>
  )
}

export default CartModalitem
