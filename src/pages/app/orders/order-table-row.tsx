import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { Dialog } from "@/components/ui/dialog";
import { Search, ArrowRight, X } from "lucide-react";

export function OrderTableRow() {
  return (
    <TableRow >
    <TableCell>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="xs">
            <Search className="w-3 h-3" />
            <span className="sr-only">Detalhes do Pedido</span>
          </Button>
        </DialogTrigger>
        
      </Dialog>
    </TableCell>
    <TableCell className="font-mono text-xs font-medium">6516a51sd6a5</TableCell>
    <TableCell className="text-muted-foreground">Há 15 minutos</TableCell>
    <TableCell>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
        <span className="font-medium text-muted-foreground">Pendente</span>
      </div>
    </TableCell>
    <TableCell className="font-medium">
      Pedro Lucas Araujo
    </TableCell>
    <TableCell className="font-medium">R$ 149,99</TableCell>
    <TableCell>
    <Button variant="outline" size="xs">
        <ArrowRight className="h-3 w-3 mr-2" />
        Aprovar
      </Button> 
    </TableCell>
    <TableCell>
      <Button variant="ghost" size="xs">
        <X className="h-3 w-3 mr-2" />
        Cancelar
      </Button>
    </TableCell>
  </TableRow>
  )
}