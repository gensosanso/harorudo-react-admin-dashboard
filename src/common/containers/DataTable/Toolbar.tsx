import { Table } from '@tanstack/react-table';
import { XCircle } from 'lucide-react';
import * as React from 'react';

import Button from '../../components/Button';
import { Input } from '../../components/Input';
import DataTableFacetedFilter from './FacetedFilter';
import DataTableViewOptions from './ViewOptions';

// import { priorities, statuses } from "../data/data"

interface IDataTableToolbarProps<TData> {
  table: Table<TData>;
}

const DataTableToolbar = <TData,>({ table }: IDataTableToolbarProps<TData>) => {
  const [filteredValue, setFilteredValue] = React.useState('');

  const handleFilterData = (value: string) => {
    setFilteredValue(value);
    table.setGlobalFilter(value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={filteredValue}
          onChange={(event) => handleFilterData(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getAllColumns().map((column) => {
          const facet = column.columnDef.meta?.facetFilter;
          if (facet) {
            return (
              <DataTableFacetedFilter
                key={`${column.id}-facet-filter`}
                column={column}
                title={facet.title}
                options={facet.options}
              />
            );
          }
          return null;
        })}
        {Boolean(filteredValue) && (
          <Button onClick={() => handleFilterData('')} className="h-8 px-2 lg:px-3">
            <XCircle className="h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
};

export default DataTableToolbar;
