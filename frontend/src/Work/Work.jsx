import "./Work.css"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import {
    Card,
    CardContent,
   
  } from "@/components/ui/card"
  
import giraffe from "./giraffe.jpg"
import abstract from "./abstract.jpg"
import skull from "./skull.jpg"

export default function Work(){

    const Array =[
        {"id": 1,
          "img": giraffe,  
        },
        {"id": 2,
            "img": abstract,  
          },
          {"id": 3,
            "img": skull,  
          },
    
    ]
    return(
        <>
        <div className="image-carousel">
        <Carousel
      opts={{
        // align: "center",
      }}
      className="w-full max-w-sm"
      
    >
      <CarouselContent>
        {Array.map((array) => (
          <CarouselItem key={array.index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold"><img src={array.img}/></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

        </div>
        </>
    );
}