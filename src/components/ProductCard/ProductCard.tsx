import { productDetailCard } from "@/Data/productDetailCard";
import ProductCardMap from "./ProductCardMap";

const ProductCard = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-[1.25rem]">
      <ProductCardMap productDetailCard={productDetailCard} />
      {/* {productDetailCard.map((item, index: number) => (
        <div key={item.id}>
          <div>
            <div>
              <img src={item.img} alt="" />
            </div>
            <div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.type}</p>
              </div>
              <div>
                <img src="@/assets/three-dots-vertical-bold.svg" alt="" />
              </div>
            </div>
            <div>
              <h2>{item.price}</h2>
            </div>
          </div>
          <div>
            <h2>Summary</h2>
            <p>{item.summary}</p>
          </div>
          <div>
            <div>
              <p>Sales</p>
              <div>
                <p>{item.sales}</p>
              </div>
            </div>
            <div>
              <p>Remaining items</p>
              <div>
                <p>{item.remaining}</p>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default ProductCard;
