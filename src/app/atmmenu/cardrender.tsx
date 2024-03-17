import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  export function Card2(props:any){
 return(   
 <Card className="border-2 border-solid border-black mx-2 box-border text-center">
  <CardHeader>
    {
      props.title == "Exit" ? <CardTitle className="bg-red-800">{props.title}</CardTitle> : <CardTitle >{props.title}</CardTitle>
    }
    
      </CardHeader>
  

</Card>
)
  }