
import "./About.css"
import { Separator } from "@radix-ui/react-separator";
import darby_headshot from "./darby-pic.jpg";



export default function About(){

    // array holding experience information to be mapped
     const Experience =[
        { "id": 1,
           "Company": "Cunningham Restaurant Group",
           "Role": "Hourly Manager", 
           "Date": "Jun 2023 - Present",
           "Description": "Managed daily restaurant operations with a focus on reservations and customer interactions. Directly managed 15 employees and averaged $7000 in daily sales. "
        },
        { "id": 2,
            "Company": "Linguae Christi",
            "Role": "Linguistics Summer Intern",
            "Date":"July 2021",
            "Description": "Worked on projects aimed at the preservation of the Welsh language. Created impactful promotional materials towards the awareness and conservation of the Welsh language.", 
         },
         { "id": 3,
            "Company": "Calvin University",
            "Role": "French Tutor",
            "Date":"September 2019 - March 2020",
            "Description": "Tutored college students in French. Delivered progress reports to my supervisor showcasing student achievements and areas for improvement", 
         }
]

  

 
    return(
        <>
        <Separator/>
        <div className="about-container"/>
        <h3 className="section-header">About Me</h3>
        <img className="mobile-image" src={darby_headshot}/>

        <div className="resume-headshot">

            <div className="resume">
                <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight">Experience</h4> 
                <div className="description"><span className="leading-7 [&:not(:first-child)]:mt-6">I am an early career professional with a background in Linguistics, French and Global Development. I offer a solid foundation in language structures and cross-cultural awareness. </span></div>                
               
                {Experience.map((exp)=>(
                    <div className="experience" key={exp.id}> 
                    <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">{exp.Company} - {exp.Role}</h1>
             
                    <p className="text-sm text-muted-foreground">{exp.Date}</p>
                   
                    <h3>{exp.Description}</h3>

                    </div>

                    
                ))}

               
                  
                   
            </div>

            <hr className="mobile-divider"/>
            
            <div className="headshot">
                <img src={darby_headshot}/>

               
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Skills </h1>
                    <ul className="lang-list my-6 ml-6 list-disc [&>li]:mt-2">

                        
                    <li>French (Advanced Level C1)</li>
                    <li>Chinese (Level A2)</li> 
                    <li> Certificate - French (Level C1)</li>
                    Université Grenoble Alpes, 
                    Sep-Dec 2022
                    Grenoble, France
                    </ul>

                    <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Certificate(s) </h1>
                    <ul className="lang-list my-6 ml-6 list-disc [&>li]:mt-2">
                    <li> Certificate - French (Level C1)</li>
                    Université Grenoble Alpes, 
                    Sep-Dec 2022
                    Grenoble, France
                    </ul>

        
                  
           
            </div>

       

        </div>

        
        </>
    );
}
