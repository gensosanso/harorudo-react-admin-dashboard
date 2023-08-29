import { Column } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ArrowUpDown, Settings2 } from 'lucide-react';
import { FiEyeOff } from 'react-icons/fi';

import { cn } from '../../../core/utils/common.util';
import { Input } from '../../components/Input';
import {
  Popover,
  PopoverContent,
  PopoverItem,
  PopoverSeparator,
  PopoverTrigger,
} from '../../components/Popover';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/Dropdown';
import Label from '../../components/Label';

interface IDataTableColumnHeaderProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData>;
  title: string;
}

const DataTableColumnHeader = <TData,>({
  column,
  title,
  className,
}: IDataTableColumnHeaderProps<TData>) => {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center justify-between gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="rounded p-1 hover:bg-muted-background">
              {column.getIsSorted() === 'desc' ? (
                <ArrowDown className="h-4 w-4" />
              ) : column.getIsSorted() === 'asc' ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowUpDown className="h-4 w-4" />
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => column.clearSorting()}>
              <ArrowUpDown className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
              Normal
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
              <ArrowUp className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
              <ArrowDown className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
              Desc
            </DropdownMenuItem>
            <PopoverSeparator />
            <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
              <FiEyeOff className="mr-2 h-3.5 w-3.5 text-muted/70" />
              Hide
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <span>{title}</span>
      </div>
      <Popover>
        <PopoverTrigger>
          <div className="rounded p-1 hover:bg-muted-background">
            <Settings2 className="h-4 w-4" />
          </div>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-2">
          <PopoverItem className="space-y-2">
            <Label htmlFor={`${column.id}-filter-input`}>Filter {column.id}</Label>
            <Input
              id={`${column.id}-filter-input`}
              placeholder="Filter..."
              value={(column.getFilterValue() as string) || ''}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="h-8"
            />
          </PopoverItem>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DataTableColumnHeader;
