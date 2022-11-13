import React, { memo } from 'react';
import {
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
} from '@mui/material';
// import EmptyData from '@/components/EmptyData';

export type PaginationProps = {
  page: number;
  pageSize: number;
};

type ColumnProps = {
  id?: string;
  headerName: string;
  accessor: any;
  headerCellProps?: object;
  cellProps?: object;
  width: number;
};

type MuiTableProps = {
  width?: number;
  rows: any[];
  columns: ColumnProps[];
  containerClass?: string;
  tableClass?: string;
  headerClass?: string;
  usePagination?: boolean;
  loading?: boolean;
  page?: number;
  pageSize?: number;
  count?: number;
  onPageChange?: (e: any, page: any) => void;
  onRowsPerPageChange?: (e: any) => void;
  tableRowBodyProps?: any;
};

const MuiTable = ({
  width,
  rows,
  columns,
  headerClass,
  tableClass,
  containerClass,
  usePagination,
  page = 1,
  pageSize = 10,
  count,
  onPageChange,
  onRowsPerPageChange,
  tableRowBodyProps,
  loading,
  ...rest
}: MuiTableProps) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    onPageChange?.(event, newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onRowsPerPageChange?.(+event.target.value);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: rows?.length > 0 ? 'inherit' : '50vh !important',
      }}
    >
      <TableContainer className={containerClass}>
        <Table sx={{ minWidth: width }} className={tableClass} {...rest}>
          <TableHead>
            <TableRow>
              {columns.map((col, idx) => (
                <TableCell
                  className={headerClass}
                  component="th"
                  key={idx}
                  sx={{ minWidth: col.width, width: col.width }}
                  {...col.headerCellProps}
                >
                  <>{col.headerName}</>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.length > 0 && !loading ? (
              rows.map((item, idx) => (
                <TableRow
                  key={idx}
                  {...tableRowBodyProps}
                  onClick={() => tableRowBodyProps?.onClick(item)}
                >
                  {columns.map((col, colIdx) => (
                    <TableCell
                      key={colIdx}
                      {...col.cellProps}
                      sx={{ minWidth: col.width, width: col.width }}
                    >
                      {typeof col.accessor === 'function'
                        ? col.accessor(item)
                        : item[col.accessor]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : loading ? (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <LinearProgress />
                </TableCell>
              </TableRow>
            ) : (
              <Box className="absolute w-full flex flex-col justify-center items-center top-28">
                {/* <EmptyData sx={{ width: '10rem', height: '10rem' }} /> */}
              </Box>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {usePagination && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={count || 0}
          rowsPerPage={pageSize}
          page={page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Box>
  );
};

export default memo(MuiTable);
