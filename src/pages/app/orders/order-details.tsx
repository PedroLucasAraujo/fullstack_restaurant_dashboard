import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface OrderDetailProps {}

export function OrderDetail() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: asdasdsadasoijop</DialogTitle>
        <DialogDescription>Detalhes do Pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Pendente</span>
                  </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                  Pedro Lucas Araujo
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                  (22) 9926-32108
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                  pedrolucas.araujo@cadastra.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                  Realizado há 3 minutos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">SubTotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                Pizza Pepperoni Maracanã
              </TableCell>
              <TableCell className="text-right" >
                2
              </TableCell>
              <TableCell className="text-right">
                R$ 69,90
              </TableCell>
              <TableCell className="text-right">
                R$ 139,90
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Pizza Bacon Maracanã
              </TableCell>
              <TableCell className="text-right" >
                1
              </TableCell>
              <TableCell className="text-right">
                R$ 69,90
              </TableCell>
              <TableCell className="text-right">
              R$ 69,90
              </TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                Total do Pedido
              </TableCell>
              <TableCell className="text-right font-medium">
                R$ 259,60
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>


      </div>

    </DialogContent>
  )
}