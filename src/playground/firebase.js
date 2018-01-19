import * as firebase from "firebase";


var config = {
    apiKey: "AIzaSyB0K0K0Ayt2D41AfsdnQ7kz_NfJ2mUfGrs",
    authDomain: "expensify-f8d7c.firebaseapp.com",
    databaseURL: "https://expensify-f8d7c.firebaseio.com",
    projectId: "expensify-f8d7c",
    storageBucket: "expensify-f8d7c.appspot.com",
    messagingSenderId: "766336871557"
  };

  firebase.initializeApp(config);


  const database = firebase.database();

//fetch data again and again whenever database changes

database.ref().on('value',(snapshot)=>{
    console.log(snapshot.val());
});


database.ref('expenses').once('child_removed',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});


database.ref('expenses').once('child_changed',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});



database.ref('expenses').once('child_added',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});


//setting the values into database
database.ref().set({
    name: "Praveen kumar",
    age: 26,
    isSingle: false,
    location:{
        city:'Philadelphia',
        country:"United states"
    }
}).then(()=>{
    console.log('Data is saved');

}).catch((e)=>{
    console.log('This failed.',e); 
});

//database.ref().set('This is my data');

database.ref('age').set(24);

database.ref('location/city').set('Wichita');

//attributes
//height
//weightf

database.ref('attributes').set({
    height:73,
    weight:150
});


//removing data from database
database.ref('isSingle').remove()
.then(()=>{
    console.log('removed');
})
.catch((e)=>{
    console.log('not removed');
});


//updating data from database
database.ref().update({
    name: 'MIKE',
    age: 29,
    job:'Software dev',
    'location/city':'Boston'
});

//gettting data from database to react component

database.ref()
 .once('value')
 .then((snapshot)=>{
    const val = snapshot.val();
    console.log(val);
 }).catch(()=>{
    console.log('error getting data');
 })


 //arrays in to database

 const notes = [{
     id:'12',
     title:'First note!',
     body:'This is my note'
 },{
     id:'761ase',
     title:'Another note',
     body:'This is my note'
 }];

 database.ref('notes').set(notes);


 const firebaseNotes = {
     notes:{
         id:{
             title:'First note',
             body:'This is my note'
         },
         id2:{
             title:'second note',
             body:'this is my note'
         }
     }
 };


 //generates random id for arrays trees
 database.ref('notes2').push({
    title:"To Do",
    body:'Go for a run'
 });

 database.ref('notes2').push({
    title:"new data",
    body:'Go for a run2'
 });




 database.ref('expenses').push({
     description:'Rent',
     note:'',
     amount:109500,
     createdAt:97812349343
 });


 database.ref('expenses').push({
    description:'Phone bill',
    note:'',
    amount:109500,
    createdAt:97812349343
});





//getting data from the array

database.ref('expenses')
    .once('value')
    .then((snapshot)=>{
        const expenses = [];

        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                 id:childSnapshot.key,
                 ...childSnapshot.val()
            });
        });

        console.log('expenses');
       console.log(expenses);
    });














