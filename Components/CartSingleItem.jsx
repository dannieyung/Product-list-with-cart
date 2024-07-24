import { FaTimes } from 'react-icons/fa'


const CartSingleItem = ({ name, amount, price, removeItem }) => {
  
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-black font-medium">{name}</p>
          <div className="flex gap-2">
            <span className="text-dark-red font-medium mr-2">{amount}x</span>
            <span className="text-rose300">@ ${price.toFixed(2)}</span>
            <span className="text-rose400 font-medium">
              ${(price * amount).toFixed(2)}
            </span>
          </div>
        </div>
        <button
          className="w-4 h-4 flex items-center transition-colors outline outline-2 text-rose300 outline-rose300 rounded-full p-1 hover:outline-black hover:text-black"
          onClick={() => removeItem(name)}
        >
          <FaTimes />
        </button>
      </div>
      <hr className="border border-1 border-[#f4edeb] w-full" />
    </div>
  )
}

export default CartSingleItem
