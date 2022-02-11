import React from 'react';
import { useTable } from 'react-table';
import styles from './SummaryTable.module.css';

function SummaryTable() {
// function SummaryTable({title, data}) {

  const title = "СВОДКА";
 const data = React.useMemo(
     () => [
       {
         month: 'Ноябрь',
         amount: '10 000.00',
       },
       {
         month: 'Октябрь',
         amount: '30 000.00',
       },
       {
         month: 'Сентябрь',
         amount: '30 000.00',
         },
       {
         month: 'Август',
         amount: '20 000.00',
         },
       {
         month: 'Июль',
         amount: '15 000.00',
         },
       {
         month: 'Июнь',
         amount: '18 000.00',
       },
     ],
     []
 )

 const columns = React.useMemo(
    () => [
      {
        Header: 'Сводка',
        columns: [
          {
            accessor: 'month',
          },
          {
            accessor: 'amount',
          },
        ],
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
      <table className={styles.table} {...getTableProps()}>
          <thead className={styles.tableHead}>
              <tr>
                  <th colSpan={2} className={styles.header}>{title}</th>
              </tr>
          </thead>
          <tbody className={styles.tableBody} {...getTableBodyProps()}>
              {rows.map((row, i) => {
                  prepareRow(row)
                  return (
                      <tr className={styles.tableRows} {...row.getRowProps()}>
                          {row.cells.map(cell => {
                              return <td className={styles.tableCell}{...cell.getCellProps()}>
                                  {cell.render('Cell')}
                              </td>
                          })}
                      </tr>   
                  ) 
              })}
          </tbody>
      </table>
  )
}

export default SummaryTable;

