import default_room from "./assets/default_room.png"
import NavbarComponent from "./components/NavbarComponent"
import ImageScreen from "./components/ImageScreen"
import "bootstrap/dist/css/bootstrap.css"
import RecProducts from "./components/RecProducts"

export default function App() {
  return (
    <>
      <NavbarComponent />
      <div className="w-screen flex flex-col">
        <div className="flex w-full">
          <div className=" flex w-1/2 mr-6">
            <ImageScreen
              image={default_room}
              caption="Traditional / Living Room"
            />
          </div>
          <div className=" flex w-1/2">
            <RecProducts />
          </div>
        </div>
      </div>
    </>
  )
}
