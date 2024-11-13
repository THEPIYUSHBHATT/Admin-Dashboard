import {
  Column,
  TableInstance,
  TableOptions,
  TableState,
  UseExpandedOptions,
  UseFiltersOptions,
  UseGlobalFiltersOptions,
  UseGroupByOptions,
  UsePaginationOptions,
  UseResizeColumnsOptions,
  UseRowSelectOptions,
  UseRowStateOptions,
  UseSortByOptions,
} from 'react-table'

declare module 'react-table' {
  export interface TableOptions<D extends Record<string, unknown>>
    extends UseExpandedOptions<D>,
      UseFiltersOptions<D>,
      UseGlobalFiltersOptions<D>,
      UseGroupByOptions<D>,
      UsePaginationOptions<D>,
      UseResizeColumnsOptions<D>,
      UseRowSelectOptions<D>,
      UseRowStateOptions<D>,
      UseSortByOptions<D>,
      Record<string, unknown> {}

  export interface TableInstance<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends TableOptions<D> {}

  export interface TableState<
    D extends Record<string, unknown> = Record<string, unknown>
  > {}

  export interface ColumnInterface<
    D extends Record<string, unknown> = Record<string, unknown>
  > {}

  export interface ColumnInstance<
    D extends Record<string, unknown> = Record<string, unknown>
  > {}

  export interface Row<
    D extends Record<string, unknown> = Record<string, unknown>
  > {}
}
