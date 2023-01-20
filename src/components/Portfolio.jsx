import proyect1 from "./assets/img/dog.png"
import proyect2 from "./assets/img/todoList.png"
import proyect3 from "./assets/img/notif.jpg"
import proyect4 from "./assets/img/rating.jpg"



const Portfolio = () =>{

    const proyects = [
        {
            id: 1,
            src: proyect1
        },
        {
            id: 2,
            src: proyect2
        },
        {
            id: 3,
            src: proyect3
        },
        {
            id: 4,
            src: proyect4
        },
    ]


    return(
        <div name="coding" className="w-full text-black md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 ">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Mis trabajos...</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        proyects.map(({id, src})=>{
                            return(
                                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 w-80 h-72" />
                                    <div className="flex items-center justify-center">
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                            Demo
                                        </button>
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                            Code
                                        </button>
                                    </div>
                                </div> 
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio;