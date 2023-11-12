import { Link } from "react-router-dom";
import { items } from "./AllData";
import CountdownTimer from "./CountdownTimer";
import { AiOutlinePlus } from "react-icons/ai";

function CategoriesItem() {
  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {items.map((item) => (
              <div key={item.id} className="bg-white w-full shadow-sm rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg  border p-4">
                <Link
                  onClick={() => window.top(0, 0)}
                  to={`/categories/product/${item.id}`}
                >
                  <div className="product-header">
                    <div className="relative">
                      <img src={item.img} className="w-full" alt="product1" />
                      <div
                        className="absolute top-2 right-2"
                      >
                        <div className="shadow-sm w-12 h-12 text-white bg-red-500 hover:bg-red-700  cursor-pointer p-5  rounded-full  relative">
                          <AiOutlinePlus size={20} className="absolute text-xl font-medium top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-data">

                  </div>
                  <div className="product-details text-xl">
                    <p className=" font-semibold mb-4">{item.description}</p>

                    <CountdownTimer endTime='Mar 25 2024' />
                    <div className="flex items-center text-black justify-between">
                      <div className="">Starting bid</div>
                      <div className="font-medium text-red-500 cursor-pointer">$45</div>
                    </div>
                    {/* <div className="flex items-center text-black justify-between ">
                <div className="">Selling price </div>
                <div className="font-medium text-red-500 cursor-pointer">$100</div>
              </div> */}
                    <div className="flex items-center text-black justify-between mt-3">
                      <div className="font-medium">Total bids</div>

                      <div className="font-medium">0 bids</div>

                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesItem;
