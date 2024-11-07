import { IoIosCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/sliceCart";

const ProductCategory = ({ categoryName, text, products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section className="mt-20 px-5 bg-neutral-100 py-10 z-0">
      <div className="space-y-10">
        <h1 className="text-2xl font-[600]">{categoryName}</h1>
        <p className="text-[12px] text-neutral-500">{text}</p>
        <div className="flex justify-between items-center text-[13px] text-neutral-600">
          <p className="px-3 py-2 bg-neutral-200">
            Showing all {products.length} results
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
        {products.map((product, index) => (
          <div className="w-[200px] relative" key={index}>
            <div className="w-[240px] h-[240px] mb-2">
              <img src={product.link} alt={product.title} />

              <IoIosCart
                onClick={() => handleAddToCart(product)}
                size={20}
                className="hover:block absolute top-2 right-0 hover:scale-125 cursor-pointer"
              />
            </div>
            <p className="text-[12px] text-neutral-400">{categoryName}</p>
            <h1 className="font-[500]">{product.title}</h1>
            <p className="text-[12px] w-[90%] break-words">
              <span className="line-through text-neutral-400">
                {product.oldPrice}
              </span>
              <span> ${product.newPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
