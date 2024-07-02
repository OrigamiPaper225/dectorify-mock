import { useState, useEffect } from "react"
import room0 from "./assets/room_pictures/rooms_0.jpg"
import room1 from "./assets/room_pictures/rooms_1.jpg"
import room2 from "./assets/room_pictures/rooms_2.jpg"
import room3 from "./assets/room_pictures/rooms_3.jpg"
import room4 from "./assets/room_pictures/rooms_4.jpg"
import NavbarComponent from "./components/NavbarComponent"
import ImageScreen from "./components/ImageScreen"
import "bootstrap/dist/css/bootstrap.css"
import RecProducts from "./components/RecProducts"
import Spinner from "react-bootstrap/Spinner"

export default function App() {
  const [imageIndex, setImageIndex] = useState(0)
  const [spinnerState, setSpinnerState] = useState(false)
  useEffect(() => {
    console.log("image Index:", imageIndex)
  }, [imageIndex])

  const images = [
    {
      image: room0,
      caption: "Default room",
    },
    {
      image: room1,
      caption: "New curtains, chairs, and table",
    },
    {
      image: room2,
      caption: "New table selected",
    },
    {
      image: room3,
      caption: "Switched cabinet and sofa"
    },
    {
      image: room4,
      caption: "Switched to evening lighting"
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

  const handleSpinner = () => {
    setSpinnerState(true)

    setTimeout(() => {
      setSpinnerState(false)
    }, 2000)
  }
  const handleImageChange = () => {
    const nextIndex = imageIndex + 1
    if (nextIndex < images.length) {
      setImageIndex(nextIndex)
    }
    handleSpinner()
  }
  
  const handleImageBack = () => {
    const prevIndex = imageIndex - 1
    if (prevIndex >= 0) {
      setImageIndex(prevIndex)
    }
  }

  return (
    <>
      <NavbarComponent />
      <div className="w-screen flex flex-col">
        <div className="flex w-full">
          <div className=" flex w-1/2 mr-6">
            {spinnerState ? (
              <div className="flex w-full h-full justify-center align-center mt-52">
                <Spinner animation="border" role="status" variant="primary">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <ImageScreen imageInfo={images[imageIndex]} handleImageBack={handleImageBack} />
            )}
          </div>
          <div className=" flex w-1/2">
            <RecProducts
              products1={products1}
              products2={products2}
              handleImageChange={handleImageChange}
              handleSpinner={handleSpinner}
            />
          </div>
        </div>
      </div>
    </>
  )
}
