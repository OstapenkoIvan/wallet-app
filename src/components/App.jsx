import StatisticsTable from './StatisticsTable/StatisticsTable';
import TableMobile from './TableMobile/TableMobile';
import TableTransactions from './TableTransactions/TableTransactions';

export const App = () => {
  return (
    <div
      style={{
        fontFamily: 'poppins_bold',
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template upd */}
      <StatisticsTable></StatisticsTable>
      <TableTransactions></TableTransactions>
      <TableMobile></TableMobile>
    </div>
  );
};
