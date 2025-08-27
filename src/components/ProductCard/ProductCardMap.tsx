import type { productDetailCardType } from "@/Data/productDetailCard";
import { Link } from "react-router-dom";

interface productData {
  productDetailCard: productDetailCardType[];
}

const ProductCardMap: React.FC<productData> = ({ productDetailCard }) => {
  return (
    <>
      {productDetailCard.map((item) => (
        <Link key={item.id} to={`/product-details/${item.id}`}>
          <div
            key={item.id}
            className="bg-white rounded-xl !p-4 flex flex-col gap-4"
          >
            <div className="flex gap-2">
              <div className="w-[6rem] rounded-xl">
                <img src={item.img} alt="" className="rounded" />
              </div>
              <div className="flex flex-col justify-between w-[100%] ">
                <div className="flex justify-between ">
                  <div>
                    <h2 className="text-[18px]">{item.title}</h2>
                    <p className="text-gray-500">{item.category}</p>
                  </div>
                  <div className="bg-gray-300 h-[30px] !py-2 !px-1.5 flex justify-center items-center rounded">
                    <img
                      src="/src/assets/three-dots-vertical-bold.svg"
                      alt=""
                      className="rotate-90"
                    />
                  </div>
                </div>
                <div>
                  <h2 className=" font-bold">${item.regularPrice}</h2>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[18px]">Summary</h2>
              <p className="text-gray-500">{item.summary}</p>
            </div>
            <div className="border !p-4 flex flex-col gap-2 rounded-xl border-gray-300">
              <div className="flex justify-between border-b border-gray-300 !pb-2">
                <p>Sales</p>
                <div className="flex items-center gap-1">
                  <img src="/src/assets/arrow_up_orange.svg" alt="" />
                  <p>{item.sales}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p>Remaining items</p>
                <div className="flex items-center gap-1">
                  <div className="w-[80px] h-[6px] rounded-4xl bg-gray-300">
                    <div className="w-[50%] bg-[#FFA52F] h-[6px] z-10 rounded"></div>
                  </div>
                  <p>{item.remaining}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCardMap;
