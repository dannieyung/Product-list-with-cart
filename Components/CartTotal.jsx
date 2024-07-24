import { useSelector } from 'react-redux'

const CartTotal = () => {
  const {cartTotal} = useSelector((state)=>state.cart)
  return (
    <div className="flex items-center justify-between text-black py-8">
      Order Total
      <span className="font-bold text-rose900 text-2xl">
        ${cartTotal.toFixed(2)}
      </span>
    </div>
  )
}

export default CartTotal
