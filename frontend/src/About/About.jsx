
import "./About.css"
import { Separator } from "@radix-ui/react-separator";
import darby_headshot from "./darby-headshot.jpg";
import { Button } from "@/components/ui/button"

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
            "Description": "Worked on projects aimed at the preservation of the Welsh languaged. Created impactful promotional materials towards the awareness and conservation of the Welsh language.", 
         },
         { "id": 3,
            "Company": "Calvin University",
            "Role": "French Tutor",
            "Date":"September 2019 - March 2020",
            "Description": "Tutored college students in French. Delivered progress reports to my supervisor showcasing student achievements and areas for improvement", 
         }
]

    const resume_link_icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
    <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
    <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
  </svg>
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

                <div className="mobile-link">
                <Button  className="resume-link" variant="link"><a href="/resume" target="_blank">View Full Resume</a>{resume_link_icon}
</Button>
                </div>
                  
                   
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