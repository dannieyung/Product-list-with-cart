
const CartModalSingleItem = ({image, name, amount, price}) => {
  
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <img
            src={image.thumbnail}
            alt=""
            width={60}
            height={60}
          ></img>
          <div className="flex flex-col gap-2 w-4/6">
            <p className="text-black font-medium text-ellipsis overflow-hidden whitespace-nowrap ">
              {name}
            </p>
            <div className="flex gap-2">
              <span className="text-dark-red font-medium mr-2">
                {amount}x
              </span>
              <span className="text-rose300">
                @ ${price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <span className="text-rose400 font-medium">
          ${(price * amount).toFixed(2)}
        </span>
      </div>
      <hr className="border border-1 border-[#f4edeb] w-full" />
    </div>
  ) 
  
}

export default CartModalSingleItem
