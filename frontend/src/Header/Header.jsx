

import "./Header.css"
import { Separator } from "@/components/ui/separator"
// import woods from "../assets/woods.jpg" 


export default function Header(){


 
    return(
        <>
        <div className="header-container"/>
        <Separator/>
        <div className="Name scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            {/* ask darby about the boldness and also font type and background color */}
            <h1>Darby Frederiksen</h1>
            {/* <button onClick={about}><a href="/#about">hello</a></button> */}
        </div>

        <div className="header-image-bio">
            {/* <img className="woods-image" alt="picture of woods" src={woods}></img> */}
            <div className="bio"> 
                <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    I am Darby Frederiksen and I do stuff. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus finibus gravida fermentum. Aenean in sapien elit. In hac habitasse platea dictumst. 
                    Vestibulum.
                    
                    </p>
                </div>

       


             
           


        </div>
        </>

    );
}