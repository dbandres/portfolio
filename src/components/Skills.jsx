import html from "./assets/img/html.png";
import css from "./assets/img/css.png";
import github from "./assets/img/github.png";
import javascript from "./assets/img/javascript.png";
import node from "./assets/img/node.png";
import react from "./assets/img/react.png";
import tailwind from "./assets/img/tailwind.png";
import postgres from "./assets/img/Postgresql.png";
import sequelize from "./assets/img/sequelizejs.png"
import auth0 from "./assets/img/auth0.png"
import redux from "./assets/img/redux.png"
import express from "./assets/img/node-express.png"


const Skills = () =>{

        const skills =[
            {
                id: 1,
                src: html,
                title: "HTML",
                style: "shadow-orange-500"
            },
            {
                id: 2,
                src: css,
                title: "CSS",
                style: "shadow-blue-500"
            },
            {
                id: 3,
                src: github,
                title: "GitHub",
                style: "shadow-yellow-100"
            },
            {
                id: 4,
                src: javascript,
                title: "JavaScript",
                style: "shadow-yellow-500"
            },
            {
                id: 5,
                src: node,
                title: "Node Js",
                style: "shadow-green-500"
            },
            {
                id: 6,
                src: react,
                title: "React",
                style: "shadow-blue-600"
            },
            {
                id: 7,
                src: tailwind,
                title: "Tailwind",
                style: "shadow-sky-400"
            },
            {
                id: 8,
                src: postgres,
                title: "Postgres SQL",
                style: "shadow-sky-700"
            },
            {
                id: 9,
                src: sequelize,
                title: "Sequelize",
                style: "shadow-sky-700"
            },
            {
                id: 10,
                src: auth0,
                title: "Auth0",
                style: "shadow-orange-500"
            },
            {
                id: 11,
                src: redux,
                title: "Redux",
                style: "shadow-violet-700"
            },
            {
                id: 12,
                src: express,
                title: "Express",
                style: "shadow-yellow-100"
            }
        ]



    return(
        <div name="skills" className="w-full h-screen bg-gradient-to-b from-gray-50 to-black " >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full md:text-black sm:mt-24 md:mt-64">
                <div className="sm:text-center md:text-start">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        SkillS
                    </p>
                </div>
                <div className="py-8 px-12 sm:px-0 w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:mt-10">

                    {
                        skills.map(({id,src,title,style})=>(
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className="w-20 mx-auto"/>
                                <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;