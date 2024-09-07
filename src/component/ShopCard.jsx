
import productImage from '../assets/productImage.jpg'
import Button from '../component/Button.jsx'
function ShopCard() {
  return (
    <section className='max-w-72 bg-gray-300 p-2 flex gap-2 flex-col items-center' >
        <img src={productImage} alt='product-image' />
        <h3 className='font-semibold tracking-wide'>Takrarishta</h3>
        <h3 className='font-bold'>&#8377;620.00</h3>
        <Button btnText={'ADD TO CART'} className='w-full' />
    </section>
  )
}

export default ShopCard