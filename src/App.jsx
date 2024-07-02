import default_room from "./assets/default_room.png"
import NavbarComponent from "./components/NavbarComponent"
import ImageScreen from "./components/ImageScreen"
import "bootstrap/dist/css/bootstrap.css"

export default function App() {
  return (
    <>
    <NavbarComponent />
    <div className="w-screen h-full flex flex-col">
      
      <div className="flex w-full">
        <div className=" flex w-1/2">
          <ImageScreen image={default_room} caption="Traditional / Living Room" />
        </div>
        <div className=" flex w-1/2">page 2</div>
        </div>
      </div>
    </>
  )
}
