import { FC, ReactNode } from 'react';
import { FiSettings } from 'react-icons/fi';
import Button from '../../components/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/Dropdown';

interface IDataTableActionsProps {
  render?: () => ReactNode;
}

const DataTableActions: FC<IDataTableActionsProps> = ({ render }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm">
          Actions
          <FiSettings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
        <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem>
        {render && render()}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableActions;
