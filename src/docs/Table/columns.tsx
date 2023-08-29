import { ColumnDef } from '@tanstack/react-table';
import DataTableActions from '../../common/containers/DataTable/Actions';
import DataTableColumnHeader from '../../common/containers/DataTable/ColumnHeader';
import { Payment } from '../../core/mock/payment.mock';

const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
  },
  {
    id: 'actions',
    cell: () => <DataTableActions />,
    meta: {
      className: 'w-[8%]',
    },
  },
];

export default paymentColumns;
