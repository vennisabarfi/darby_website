
import "./Header.css"
import { Separator } from "@/components/ui/separator"


export default function Header(){
    
    return(
        <>
        <div className="header-container"/>
        <Separator/>
        <div className="Name scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            {/* ask darby about the boldness and also font type and background color */}
            <h1>Darby Frederiksen</h1>
        </div>
        <div className="header-image-bio">
        


        </div>
        </>

    );
}