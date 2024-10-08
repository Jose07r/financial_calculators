import { formatNumberWithCommas } from '@/utils/formatNumber';

function getTableColumns(breakdownChoice) {
  const columns = [
    {
      header: breakdownChoice === 'yearly' ? 'Year' : 'Month',
      accessorKey: breakdownChoice === 'yearly' ? 'year' : 'month',
    },
    {
      header: 'Init. Amount',
      accessorFn: (row) => `$${formatNumberWithCommas(row.principal)}`,
    },
    {
      header: 'Acc. Deposits',
      accessorFn: (row) =>
        `$${formatNumberWithCommas(row.accrued_contributions)}`,
    },
    {
      header: 'Interest',
      accessorFn: (row) => `$${formatNumberWithCommas(row.interest)}`,
    },
    {
      header: 'Acc. Interest',
      accessorFn: (row) => `$${formatNumberWithCommas(row.accrued_interest)}`,
    },
    {
      header: 'Balance',
      accessorFn: (row) => `$${formatNumberWithCommas(row.balance)}`,
    },
  ];

  return columns;
}
export default getTableColumns;
