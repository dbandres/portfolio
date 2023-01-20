import imgPerfil from "./assets/imgPerfil.jpg"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"


const Home = () =>{
    return(
        <div name="inicio" 
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-50">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, officia aliquid. Atque alias hic at incidunt illum aliquid odit, inventore non deserunt voluptas eum magni iusto ipsum, sed saepe eveniet!
                    </p>
                    <div>
                        <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Coding...
                            <span className="group-hover:rotate-90 duration-500">
                                <MdOutlineKeyboardArrowRight size={25}
                                className="ml-1"
                                />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={imgPerfil} alt=""  className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>
        </div> 
    )
}

export default Home;