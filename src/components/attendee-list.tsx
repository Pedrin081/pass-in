import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-td"
import { TableRows } from "./table/table-rows"
import { ChangeEvent, useEffect, useState } from "react"   
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')


interface Attendee{
    id: string,
    name: string,
    email: string,
    createdAT: string,
    chekedInAT: string | null;
}

export function Attendeelist() {

    const [valorDoInput, alteraValorDoInput] = useState ('')
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [attendees, setAttendees] = useState<Attendee[]>([])

    const TotalPages =  Math.ceil(total / 10)

    useEffect(() => {

        
        fetch(`http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees?pageIndex=${page - 1}`)
        .then(response => response.json())
        .then(data =>{
            setAttendees(data.attendees)
            setTotal(data.total)
        })

    }, [page])

        function onSearchInputChenged(event: ChangeEvent<HTMLInputElement>) {
            alteraValorDoInput(event.target.value)
        }

        function goToNextPage(){
            setPage(page + 1)
        }
        function goTopreviousPage(){
            setPage(page - 1)
        }
        function goToFinishPage(){
            setPage(TotalPages)
        }
        function goToFirstPage(){
            setPage(1)
        }

    return (
        <div className="flex flex-col gap-4">
            <div className=" flex gap-3 items-center ">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rouded-lg flex items-center gap-3">
                    <Search className="size-4  text-emerald-300 " />
                    <input onChange = {onSearchInputChenged}  className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" type="text" placeholder="Buscar participante" />
                </div>
            </div>

                {valorDoInput}
            <Table>
                <thead>
                    <tr className="border border-white/10">
                        <TableHeader style={{ width: 48 }} >
                            <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 " />
                        </TableHeader>
                        <TableHeader >código</TableHeader>
                        <TableHeader >participante</TableHeader>
                        <TableHeader >Data de inscrição</TableHeader>
                        <TableHeader >Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }} ></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {attendees.map((attendee) => {
                        return (
                            <TableRows key={attendee.id} className=" border-b border-white/10 hover:bg-white/10 ">

                                <TableCell className="py-3 px-4 text-sm font-semibold">   <input type="checkbox" className="size-4 bg-black    /20 rounded border-white/10 " /> </TableCell>

                                <TableCell>{attendee.id}</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white ">{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>

                                <TableCell>{dayjs().to(attendee.createdAT)}</TableCell>
                                <TableCell>
                                
                                {attendee.chekedInAT === null ?   
                                (
                                    <span className="text-zinc-400">Não fez check-in</span>
                                 )         
                                 :(
                                    dayjs().to(attendee.chekedInAT)
                                  )}
                                
                                </TableCell>
                               
                                <TableCell >
                                    <IconButton transparent={true}>
                                        <MoreHorizontal className="size-4" />
                                    </IconButton>
                                </TableCell>
                            </TableRows>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr >
                        <TableCell colSpan={3} className="py-3 px-4 text-sm text-zinc-300">
                            Mostrando {attendees.length} de {total} itens
                        </TableCell>
                        <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300 text-right">

                            <div className="inline-flex items-center gap-8">
                                <span>pagina {page} de {TotalPages}</span>

                                <div className="flex gap-1.5">
                                    <IconButton onClick={goToFirstPage} disabled={page === 1} >
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton  onClick={goTopreviousPage} disabled={page === 1}>
                                        <ChevronLeft className="size-4"  />
                                    </IconButton>
                                    <IconButton onClick={goToNextPage} disabled={page === TotalPages} >
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToFinishPage} disabled={page === TotalPages}>
                                        <ChevronsRight className="size-4" />
                                    </IconButton>

                                </div>
                            </div>
                        </td>
                    </tr>


                </tfoot>
            </Table>

        </div>
    )

}