import Assortment from "./Assortment"
import { FaArrowUp } from "react-icons/fa";

const RecProducts = ({products1, products2, handleImageChange}) => {

  return (
    <div className="flex flex-column content-center justify-center mt-5">
      <div className="">
        <p className="font-bold text-lg text-center">Products You May Like</p>
        <p className="text-sm text-slate-400 text-center">
          Here are a few products to get you started on your design journey.
        </p>
      </div>
      <div className="-space-y-4">
        <Assortment title="Accent Chairs" product={products1} />
        <Assortment title="End Tables" product={products2} />
      </div>
      <hr />
      <div>
        <h1 className="py-3 text-2xl font-bold text-center">Edit your room here!</h1>
        <div class="w-full relative flex space-y-3">
          <input type="text" class="py-3 px-4 outline block w-100 border-black rounded-lg text-lg pr-20" placeholder="Enter prompt here..."/>
          <div className=" absolute rounded-full w-10 h-10 bg-purple-800 text-white flex justify-center items-center right-2 cursor-pointer" onClick={handleImageChange}>
            <FaArrowUp size={20}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default RecProducts
