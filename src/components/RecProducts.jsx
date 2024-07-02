import Assortment from "./Assortment"
import { FaArrowUp } from "react-icons/fa"

const RecProducts = ({
  products1,
  products2,
  handleImageChange,
  handleSpinner,
}) => {
  return (
    <div className="flex flex-column content-center justify-center mt-5">
      <div className="">
        <p className="font-bold text-2xl text-center">Products You May Like</p>
        <p className="text-sm text-slate-400 text-center">
          Here are a few products to get you started on your design journey.
        </p>
      </div>
      <div className="-space-y-4">
        <Assortment
          title="Coffee Tables"
          product={products1}
          handSpinner={handleSpinner}
        />
        <Assortment
          title="Lamps"
          product={products2}
          handSpinner={handleSpinner}
        />
      </div>
      <hr className="-mt-5" />
      <div>
        <h1 className="py-3 text-xl font-bold  text-center">
          Personalize Your Room with Chat Prompt!
        </h1>
        <div className="w-full relative flex space-y-3">
          <input
            type="text"
            className="py-3 px-4 block w-100 border border-stone-600 border-2 rounded-lg text-lg pr-20"
            placeholder="Enter prompt here..."
          />
          <div
            className=" absolute rounded-full w-10 h-10 bg-purple-800 text-white flex justify-center items-center right-2 cursor-pointer"
            onClick={handleImageChange}
          >
            <FaArrowUp size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecProducts
