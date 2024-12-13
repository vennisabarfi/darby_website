
import "./About.css"
import { Separator } from "@radix-ui/react-separator";
import darby_headshot from "./darby-headshot.jpg";

export default function About(){

    // array holding experience information to be mapped
     const Experience =[
        { "id": 1,
           "Company": "Cunningham Restaurant Group",
           "Role": "Manager", 
           "Description": "Yeah yeah"
        },
        { "id": 2,
            "Company": "Linguae Christi",
            "Role": "Linguistics Summer Intern",
            "Description": "yEAH yEAH", 
         }
]
    return(
        <>
        <Separator/>
        <div className="about-container"/>
        <h3 className="section-header">About</h3>

        <div className="resume-headshot">

            <div className="resume">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Experience</h4> 
                {Experience.map((exp)=>(
                    <div key={exp.id}> 
                    <span>{exp.Company} - {exp.Role}</span>
                    <br/>
                    <span>{exp.Description}</span>

                    </div>


                ))}
              

            </div>

            <div className="headshot">
                <img src={darby_headshot}/>
            </div>

       

        </div>

        
        </>
    );
}