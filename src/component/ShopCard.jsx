import productImage from '../assets/productImage.jpg';
import Button from '../component/Button.jsx';

function ShopCard() {
  return (
    <section className="max-w-xs bg-gray-300 p-4 flex flex-col items-center gap-4 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
      <img
        src={productImage}
        alt="Takrarishta product image"
        className="w-full h-auto rounded-md"
      />
      <h3 className="font-semibold tracking-wide text-lg text-center">Takrarishta</h3>
      <h3 className="font-bold text-xl text-green-600">&#8377;620.00</h3>
      <Button btnText="ADD TO CART" className="w-full" />
    </section>
  );
}

export default ShopCard;
