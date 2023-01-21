import proyect1 from "./assets/img/dog.png"
import proyect2 from "./assets/img/todoList.png"
import proyect3 from "./assets/img/notif.jpg"
import proyect4 from "./assets/img/rating.jpg"



const Portfolio = () =>{

    const proyects = [
        {
            id: 1,
            src: proyect1,
            href: "https://github.com/dbandres/Proyecto_Individual"
        },
        {
            id: 2,
            src: proyect2,
            href: "https://github.com/dbandres/pern"
        },
        {
            id: 3,
            src: proyect3,
            href: "https://github.com/dbandres/FEmentor-notification-page"
        },
        {
            id: 4,
            src: proyect4,
            href: "https://github.com/dbandres/FEmentor-rating-component"
        },
    ]


    return(
        <div name="coding" className="w-full text-black md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:pt-32 md:mt-52">
                <div className="pb-8 sm:text-center md:text-start">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Coding</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 md:pb-12 sm:mt-10">
                    {
                        proyects.map(({id, src, href})=>{
                            return(
                                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 w-80 h-72 md:m-auto" />
                                    <div className="flex items-center justify-center">
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                            <a href={href} target="_blank">Demo</a>
                                        </button>
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        <a href={href} target="_blank">Code</a>
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