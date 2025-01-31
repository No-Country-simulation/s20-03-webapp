import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const CardTeacher = ({ title, info, icon }) => {
  return (
    <Card className="flex h-[106px] w-[332.33px] items-center justify-between shadow-md shadow-slate-300">
      <div>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">{title}</CardTitle>
        </CardHeader>
        <CardContent className=" ">
          <p className="text-2xl font-bold">{info}</p>
        </CardContent>
      </div>

      <div className="mb-9 mr-5">{icon}</div>
    </Card>
  )
}
