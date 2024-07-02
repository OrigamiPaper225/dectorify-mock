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
            <div className=" flex flex-col mt-10 pt-10 w-full h-full">
              <div className="mx-5 flex flex-col justify-center items-center">
                <div className="w-[750px] h-[550px] outline outline-gray-200 flelx flex-col justify-center p-2">
                  <img
                    width={735}
                    height={700}
                    src={default_room}
                    alt="default room"
                  />
                  <div className="flex"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex w-1/2">
            <RecProducts></RecProducts>
          </div>
        </div>
      </div>
    </>
  )
}
