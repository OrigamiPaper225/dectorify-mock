import { useState, useEffect } from "react"
import room0 from "./assets/room_pictures/rooms_0.jpg"
import room1 from "./assets/room_pictures/rooms_1.jpg"
import NavbarComponent from "./components/NavbarComponent"
import ImageScreen from "./components/ImageScreen"
import "bootstrap/dist/css/bootstrap.css"
import RecProducts from "./components/RecProducts"

export default function App() {

  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    console.log("image Index:", imageIndex)
  }, [imageIndex])
  
  const images = [
    {
      image: room0,
      caption: "Uploaded Room",
    },
    {
      image: room1,
      caption: "Modified Room"
    }
  ]
  const products1 = [
    {
      id: 1,
      title: "Sherry Leather Power Recliner",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F54014212%2Fresize-h300-w300%255Ecompr-r85%2F2247%2F224729460%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 2,
      title: "Arshanti Armchair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F05653766%2Fresize-h300-w300%255Ecompr-r85%2F2044%2F204435549%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 3,
      title: "Libra Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F32147374%2Fresize-h300-w300%255Ecompr-r85%2F1685%2F168542398%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 4,
      title: "Mona Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F25444504%2Fresize-h300-w300%255Ecompr-r85%2F2497%2F249753127%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 5,
      title: "Mona Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F25444504%2Fresize-h300-w300%255Ecompr-r85%2F2497%2F249753127%2Fdefault_image.jpg&w=384&q=75",
    },
  ]
  const products2 = [
    {
      id: 1,
      title: "Sherry Leather Power Recliner",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F42518546%2Fresize-h300-w300%255Ecompr-r85%2F2541%2F254164462%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 2,
      title: "Arshanti Armchair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F20925873%2Fresize-h300-w300%255Ecompr-r85%2F1451%2F145125221%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 3,
      title: "Libra Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F61702629%2Fresize-h300-w300%255Ecompr-r85%2F7235%2F72357247%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 4,
      title: "Mona Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F02158420%2Fresize-h300-w300%255Ecompr-r85%2F1934%2F193411511%2Fdefault_image.jpg&w=384&q=75",
    },
    {
      id: 5,
      title: "Mona Upholstered Chair",
      imgUrl:
        "https://www.wayfairnext.com/decorify/_next/image?url=https%3A%2F%2Fsecure.img1-fg.wfcdn.com%2Fim%2F11351060%2Fresize-h300-w300%255Ecompr-r85%2F2402%2F240299613%2Fdefault_image.jpg&w=384&q=75",
    },
  ]

  const handleImageChange = () => {
    const nextIndex = imageIndex + 1
    if (nextIndex < images.length) {
      setImageIndex(nextIndex)
    }
  }
  return (
    <>
      <NavbarComponent />
      <div className="w-screen flex flex-col">
        <div className="flex w-full">
          <div className=" flex w-1/2 mr-6">
            <ImageScreen
              imageInfo={images[imageIndex]}
            />
          </div>
          <div className=" flex w-1/2">
            <RecProducts products1={products1} products2={products2} handleImageChange={handleImageChange} />
          </div>
        </div>
      </div>
    </>
  )
}
