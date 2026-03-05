import ExpenseCard from './ExpenseCard';

function ExpenseList({expenseList}){
  return (
    <ul className="expense-list">
        {expenseList.map((expense, index) => {
          return (
            <li
              className="expense-list__item"
              key={`${expense.title}-${expense.date}-${index}`}
            >
              <ExpenseCard expense={expense} />
            </li>
          );
        })}
      </ul>
  )
}

export default ExpenseList;