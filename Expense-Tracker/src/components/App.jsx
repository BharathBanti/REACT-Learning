import '../styles/App.css';
import Header from './Header';
import InputForm from './InputForm';
import ExpenseList from './ExpenseList';
import Footer from './Footer';
import { useState } from 'react';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 1500,
    category: 'Food',
    date: '2026-03-01',
  },
  {
    id: 'e2',
    title: 'Movie Night',
    amount: 800,
    category: 'Food',
    date: '2026-03-03',
  },
  {
    id: 'e3',
    title: 'Electricity Bill',
    amount: 3200,
    category: 'Bills',
    date: '2026-03-05',
  },
  {
    id: 'e4',
    title: 'New Shoes',
    amount: 4500,
    category: 'Shopping',
    date: '2026-03-07',
  },
  {
    id: 'e5',
    title: 'Flight Ticket',
    amount: 7500,
    category: 'Bills',
    date: '2026-03-10',
  },
];

function App() {
  const [expenseList, setExpenseList] = useState(dummyExpenses);
  const [filter, setFilter] = useState('All');
  const [sortby, setSortby] = useState('latest');

  let filteredExpenses =
    filter === 'All'
      ? expenseList
      : expenseList.filter((expense) => expense.category === filter);

  let sortedExpenses = [...filteredExpenses];

  if (sortby === 'latest') {
    sortedExpenses.sort((a, b) => b.date.localeCompare(a.date));
  } else {
    sortedExpenses.sort((a, b) => a.date.localeCompare(b.date));
  }

  const totalSpend = sortedExpenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const totalTransactions = sortedExpenses.length;

  function addExpenseHandler(expenseData) {
    setExpenseList((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  }

  function handleFilter(category) {
    setFilter(category);
  }

  function handleSortby(sortby) {
    setSortby(sortby);
  }

  /*   function handleDelete(expenseId){
    setExpenseList(prevExpenseList => prevExpenseList.filter(expense.filter(expense => expense.id)));
  } */

  return (
    <div className="app-shell">
      <main className="app-content">
        <Header onAddFilter={handleFilter} onAddSortby={handleSortby} />
        <InputForm onAddExpense={addExpenseHandler} />
        <ExpenseList expenseList={sortedExpenses} />
      </main>
      <Footer totalSpend={totalSpend} totalTransactions={totalTransactions} />
    </div>
  );
}

export default App;
