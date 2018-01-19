
import React from 'react';
import database from '../firebase/firebase';

//Actions creators
//--------------------
//add-expense

export const addExpense = (expense) =>({
    type:'ADD_EXPENSE',
    expense
});
//edit-expense

export const startAddExpense = (expenseData = {})=>{
    return (dispatch, getState)=>{

        const uid = getState().auth.uid;

        const{
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseData;

        const expense = { description, note, amount, createdAt};
            return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
                dispatch(addExpense({
                    id:ref.key,
                    ...expense
                }));
             });
    };
};


export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


export const startEditExpense = (id,updates)=>{
    return(dispatch,getState)=>{

        const uid = getState().auth.uid;

        const{
            description,
            note,
            amount,
            createdAt
        }=updates

        const expenseEdit = {description, note, amount, createdAt}
        database.ref(`users/${uid}/expenses/${id}`).update(expenseEdit).then(()=>{
            dispatch(editExpense(id,updates));
        });
    };
};

//remove-expense

export const removeExpense = ({id} = {})=>({
    type: 'REMOVE_EXPENSE',
    id
});


export const startRemoveExpense = ({id}={})=>{

    

    return(dispatch,getState)=>{

        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        });
    };
};



export const setExpenses = (expenses) =>({
    type:'SET_EXPENSES',
    expenses
});

export const startSetExpenses = ()=>{
    return(dispatch,getState)=>{

        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
            const expenses = [];

            snapshot.forEach((childsnapshot)=>{
                expenses.push({
                    id:childsnapshot.key,
                    ...childsnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};

