/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import '@tanstack/react-table';
import { CSSProperties } from 'react';

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends RowData, TValue> {
    styles?: CSSProperties;
    className?: string;
    facetFilter?: {
      title?: string;
      options: {
        label: string;
        value: string;
        icon?: React.ComponentType<{ className?: string }>;
      }[];
    } | null;
  }
}
