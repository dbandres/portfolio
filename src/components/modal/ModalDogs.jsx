import { DefaultPlayer as Video } from "react-html5video/dist";
import videoDogs from "../assets/video/React-App.mp4"

const ModalDogs = ({abrir, close}) => {
    if(!abrir) return null;
    return(
        <div className="fixed inset-0 h-screen w-full bg-slate-800 bg-opacity-70">
            <div className="flex justify-center items-center">
                <div className="fixed bg-red-900 w-10 h-10 rounded-full cursor-pointer left-32 sm:left-28">
                    <p className="text-center pt-2 text-white" onClick={close}>X</p>
                </div>
                <Video className="w-3/4 m-auto mt-20 sm:w-8/12" autoPlay loop>
                    <source src={videoDogs} />
                </Video>
            </div>
        </div>
    )
}

export default ModalDogs;