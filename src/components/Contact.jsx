
const Contact = () =>{
    return(
        <div name="contacto" className="w-full h-screen p-4 text-black">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full md:mt-28 sm:mt-24">
                <div className="pb-8 sm:text-center md:text-start">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contacto</p>
                </div>
                <div className="flex justify-center items-center sm:mt-10">
                    <form action="https://getform.io/f/8422826d-be6f-40a9-a679-68c3db11eb51" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Ingrese su nombre" className="p-2 bg-transparent border-2 text-black rounded-md focus:outline-none"/>

                        <input type="text" name="email" placeholder="Ingrese su email" className="my-5 p-2 bg-transparent border-2 text-black rounded-md focus:outline-none"/>

                        <textarea name="message" placeholder="Ingrese su mensaje" id="" cols="30" rows="10" className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;