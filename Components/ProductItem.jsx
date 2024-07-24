import  { useEffect, useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import AddTocartButton from './AddTocartButton'
import ValueButton from './ValueButton'



const ProductItem = ({image,name,category,price,isSelected, handleClick,increaseButton,decreaseButton,amount}) => {
  
  const [Imgsrc,setImgSrc] = useState(image.mobile)
  const { width } = useWindowSize()
  useEffect(()=>{
      if (width >= 768) {
        setImgSrc(image.tablet)
      } else if (width >= 1280) {
        setImgSrc(image.desktop)
      } else setImgSrc(image.mobile)
    }, [width])
  
  return (
    <div key={name}>
      <div className="relative">
        <img
          src={Imgsrc}
          alt={name}
          width={150}
          height={100}
          className={` w-full rounded-xl ${
            isSelected ? 'outline outline-2 outline-orange' : null
          }`}
        />
        {!isSelected ? (
          <AddTocartButton key={name} handleClick={handleClick} name={name} />
        ) : (
          <ValueButton
            key={name}
            name={name}
            amount={amount}
            increaseButton={increaseButton}
            decreaseButton={decreaseButton}
          />
        )}
      </div>
      <div className="mt-8">
        <p className="text-rose300 text-sm">{category}</p>
        <h2 className="text-rose900 font-semibold">{name}</h2>
        <p className="text-dark-red font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductItem
