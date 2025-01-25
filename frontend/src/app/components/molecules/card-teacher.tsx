
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const CardTeacher = ({title, info, icon}) => {
    return (

        
            <Card className="h-[106px] w-[332.33px] flex justify-between items-center shadow-md shadow-slate-300">
                <div>
                    <CardHeader className="pb-2  ">
                        <CardTitle className="text-sm ">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className=" ">
                        <p className="text-2xl font-bold">{info}</p>
                    </CardContent>
                </div>

                <div className=" mr-5 mb-9">
                    {icon}
                </div>
            </Card>


    )
}
