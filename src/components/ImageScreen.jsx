import { FaDownload } from "react-icons/fa"
import { CiShare2 } from "react-icons/ci"
import { MdDelete } from "react-icons/md"
import { MdOutlineZoomIn } from "react-icons/md"
import { GrUndo } from "react-icons/gr"
import { Button } from "react-bootstrap"

export default function ImageScreen({ imageInfo, handleImageBack }) {
  return (
    <div className=" flex flex-col mt-10 pt-10 w-full h-full">
      <div className="mx-5 flex flex-col justify-center items-center">
        <div className="w-[750px] h-[520px] outline outline-gray-200 flelx flex-col justify-center p-2 shadow">
          <img
            width={735}
            height={700}
            src={imageInfo.image}
            alt="default room"
          />
          <div className="flex justify-between mt-4">
            <h1 className="font-semibold text-2xl pt-2 italic pl-2">
              {imageInfo.caption}
            </h1>
            <div className=" w-1/3 pt-2 flex gap-4">
              <div className=" w-10 h-10 outline outline-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                <a href={imageInfo.image} download="MyDesign" target="_blank">
                  <FaDownload size={25} />
                </a>
              </div>
              <div className=" w-10 h-10 outline outline-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                <CiShare2 size={25} />
              </div>
              <div className=" w-10 h-10 outline outline-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                <MdDelete size={25} />
              </div>
              <div className=" w-10 h-10 outline outline-gray-200 rounded-full flex justify-center items-center cursor-pointer">
                <MdOutlineZoomIn size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5 w-full px-40 flex gap-3 justify-center items-center">
        <img
          width={80}
          src={imageInfo.image}
          alt="img1"
          className=" outline outline-2 outline-purple-900 cursor-pointer"
        />
        <img
          width={80}
          src={imageInfo.image}
          alt="img2"
          className="cursor-pointer"
        />
        <img
          width={80}
          src={imageInfo.image}
          alt="img3"
          className="cursor-pointer"
        />
        <img
          width={80}
          src={imageInfo.image}
          alt="img4"
          className="cursor-pointer"
        />
        <img
          width={80}
          src={imageInfo.image}
          alt="img5"
          className="cursor-pointer"
        />
        <img
          width={80}
          src={imageInfo.image}
          alt="img6"
          className="cursor-pointer"
        />
      </div>
      <div className="flex w-full h-20 justify-center items-center px-20 gap-6">
        <div
          className=" w-12 h-12 outline outline-gray-200 rounded-full flex justify-center items-center cursor-pointer"
          onClick={handleImageBack}
        >
          <GrUndo size={25} />
        </div>
        <Button className="w-64 h-10 rounded-full text-white text-lg font-medium bg-purple-800">
          Create More Designs
        </Button>
        {/* <div className=" w-64 h-10 rounded-full cursor-pointer text-white text-lg font-medium bg-purple-800 flex justify-center items-center"> */}
        {/* Create More Designs */}
        {/* </div> */}
      </div>
    </div>
  )
}
