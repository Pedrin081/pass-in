import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-td"
import { TableRows } from "./table/table-rows"

export function Attendeelist() {

    return (
        <div className="flex flex-col gap-4">
            <div className=" flex gap-3 items-center ">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 b border border-white/10 rouded-lg text-sm flex items-center gap-3">
                    <Search className="size-4  text-emerald-300 " />
                    <input className="bg-transparent  flex-1 outline-none outline-0 border rounded-md" type="text" placeholder="Buscar participante" />
                </div>
            </div>

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
                    {Array.from({ length: 8 }).map((_, i) => {
                        return (
                            <TableRows key={i} className="border-b border-white/10 hover:bg-white/10 ">

                                <TableCell className="py-3 px-4 text-sm font-semibold">   <input type="checkbox" className="size-4 bg-black    /20 rounded border-white/10 " /> </TableCell>

                                <TableCell>2323</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white ">Pedro victor</span>
                                        <span>Email@2332</span>
                                    </div>
                                </TableCell>

                                <TableCell >7 dias atrás</TableCell>
                                <TableCell >2 dias atrás</TableCell>
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
                            Mostrando 10 de 200 itens
                        </TableCell>
                        <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300 text-right">

                            <div className="inline-flex items-center gap-8">
                                <span>pagina 1 de 100</span>

                                <div className="flex gap-1.5">
                                    <IconButton >
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton >
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton >
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton >
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