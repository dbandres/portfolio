import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"



const LinksSocials = () =>{

    const links = [
        {
            id: 1,
            child:(
                <>
                    LinkenIdn <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/dario-balmaceda-8048441b9/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child:(
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: "https://github.com/dbandres"  
        },
        {
            id: 3,
            child:(
                <>
                    E-mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:balmaceda.d265@gmail.com"
        },
        {
            id: 4,
            child:(
                <>
                    CV  <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: "/Dev-jr-cv2023.pdf",
            style: "rounded-br-md",
            download: true
        }
    ]


    return(
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
            <ul>

                {
                    links.map((link)=>{
                        return(
                            <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + link.style}>
                            <a href={link.href} className="flex justify-between items-center w-full text-white"
                            download={link.download}
                            target="_blank"
                            >
                        {link.child}
                    </a>
                </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LinksSocials;