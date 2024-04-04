import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"

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
                        <th style={{ width: 48 }} className="py-3 px-4 text-sm font-semibold text-left">
                            <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 " />
                        </th>
                        <th className="py-3 px-4 text-sm font-semibold text-left">código</th>
                        <th className="py-3 px-4 text-sm font-semibold text-left">participante</th>
                        <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
                        <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
                        <th style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 8 }).map((_, i) => {
                        return (
                            <tr key={i} className="border-b border-white/10 hover: bg-white/10 ">

                                <td className="py-3 px-4 text-sm font-semibold">   <input type="checkbox" className="size-4 bg-black    /20 rounded border-white/10 " /> </td>

                                <td className="py-3 px-4 text-sm text-zinc-300">2323</td>
                                <td className="py-3 px-4 text-sm text-zinc-300">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white ">Pedro victor</span>
                                        <span>Email@2332</span>
                                    </div>
                                </td>

                                <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
                                <td className="py-3 px-4 text-sm text-zinc-300">2 dias atrás</td>
                                <td className="py-3 px-4 text-sm text-zinc-300">
                                    <IconButton transparent={true}>
                                        <MoreHorizontal className="size-4" />
                                    </IconButton>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr >
                        <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300">
                            Mostrando 10 de 200 itens
                        </td>
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