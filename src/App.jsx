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

var products1_arr = [
  {
    id: 1,
    title: "Brycin Coffee Table",
    imgUrl:
      "https://assets.wfcdn.com/im/12611661/resize-h3200-w3200%5Ecompr-r85/4719/47194069/Brycin+Coffee+Table.jpg",
  },
  {
    id: 2,
    title: "Eoghan Lift Top Coffee Table",
    imgUrl:
      "https://assets.wfcdn.com/im/44138724/resize-h3200-w3200%5Ecompr-r85/2361/236106708/Eoghan+Lift+Top+Coffee+Table+with+2+Drawers.jpg",
  },
  {
    id: 3,
    title: "Santos Coffee Table",
    imgUrl:
      "https://assets.wfcdn.com/im/02880165/resize-h1000-w1000%5Ecompr-r85/4986/49863211/Santos+Coffee+Table.jpg",
  },
  {
    id: 4,
    title: "Larenda Coffee Table",
    imgUrl:
      "https://assets.wfcdn.com/im/69813446/resize-h3200-w3200%5Ecompr-r85/7229/72298063/Larenda+Coffee+Table.jpg",
  },
  {
    id: 5,
    title: "Angleca Coffee Table",
    imgUrl:
      "https://assets.wfcdn.com/im/49024646/resize-h800-w800%5Ecompr-r85/1619/161902727/Angeleca+Coffee+Table.jpg",
  },
]
var products2_arr = [
  {
    id: 1,
    title: "Barnwell Glass Table Lamp",
    imgUrl:
      "https://assets.wfcdn.com/im/91710290/resize-h445%5Ecompr-r85/2473/247388158/Barnwell+Glass+Table+Lamp.jpg",
  },
  {
    id: 2,
    title: "Holyfield Table Lamp",
    imgUrl:
      "https://assets.wfcdn.com/im/88902079/resize-h445%5Ecompr-r85/1598/159825098/Holyfield+Table+Lamp.jpg",
  },
  {
    id: 3,
    title: "Pridmore Table Lamp",
    imgUrl:
      "https://assets.wfcdn.com/im/03589516/resize-h445%5Ecompr-r85/2237/223765609/Pridmore+Table+Lamp.jpg",
  },
  {
    id: 4,
    title: "Pottorff Table Lamp",
    imgUrl:
      "https://assets.wfcdn.com/im/82595039/resize-h445%5Ecompr-r85/1967/196715895/Pottorff+Table+Lamp.jpg",
  },
  {
    id: 5,
    title: "Heavener Glass Table Lamp",
    imgUrl:
      "https://assets.wfcdn.com/im/21091286/resize-h445%5Ecompr-r85/1203/120339848/Heavener+Glass+Table+Lamp.jpg",
  },
]
import { Entity, Scene } from "aframe-react"
import "aframe"
import sky from "./p3.jpg"
import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"

export default function App() {
  const [imageIndex, setImageIndex] = useState(0)
  const [spinnerState, setSpinnerState] = useState(false)
  const [products1, setProducts1] = useState(products1_arr)
  const [products2, setProducts2] = useState(products2_arr)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
      caption: "Larenda Coffee Table selected",
    },
    {
      image: room3,
      caption: "Switched cabinet and sofa positions",
    },
    {
      image: room4,
      caption: "Switched to evening lighting",
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
    if (nextIndex == images.length) {
      handleShow()
    } else {
      setImageIndex(nextIndex)
      handleSpinner()
    }
  }

  const reorderTables = () => {
    var tables = products1
    var selectedTable = tables.splice(3, 1)
    tables.splice(0, 0, selectedTable[0])
    setProducts1(tables)
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
              <ImageScreen
                imageInfo={images[imageIndex]}
                handleImageBack={handleImageBack}
              />
            )}
          </div>
          <div className=" flex w-1/2">
            <RecProducts
              products1={products1}
              products2={products2}
              handleImageChange={handleImageChange}
              handleSpinner={handleSpinner}
              reorderTables={reorderTables}
            />
          </div>
        </div>
      </div>
      <Button
        variant="primary"
        onClick={handleShow}
        className="ml-[347px] rounded-full text-lg font-medium"
      >
        Launch 360 View
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Scene>
            <a-assets>
              <img id="sky" src={sky} />
            </a-assets>
            <Entity
              primitive="a-sky"
              src="#sky"
              height="2048"
              rotation="0 -130 0"
            />
          </Scene>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
