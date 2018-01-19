import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({expenseCount, expensesTotal})=>{
    const expenseWord = expenseCount === 1 ? 'expense':'expenses';
    const formattedTotal = numeral(expensesTotal/100).format('$0,0.00')
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedTotal}</h1>
        </div>
    );
};

const mapStateProps = (state) =>{
    const visibleExpenses = selectExpenses(state.expenses,state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal:selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateProps)(ExpenseSummary);