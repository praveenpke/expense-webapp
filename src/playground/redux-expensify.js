import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';





// timestamps (milliseconds)
//january 1st 1970 9unix epoch)



store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibileExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})


// actions
const expense1 = store.dispatch(addExpense({description:'Rent',amount:500, createdAt:-2000}));

const expense2 = store.dispatch(addExpense({description:'Coffee',amount:300,createdAt:-1000}));


const expense3 = store.dispatch(addExpense({description:'shopping',amount:5000,createdAt:-3000}));

// store.dispatch(removeExpense({id:expense1.expense.id }));


// store.dispatch(editExpense(expense2.expense.id ,{ amount: 500}));
// store.dispatch(setStartDate(100));

// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

store.dispatch(sortByDate());



// store.dispatch(setEndDate(300));



//reducers
const demoState = {
    expenses:[{
        id:'expense_id',
        description:'January Rent',
        note:'This is final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortyBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
}