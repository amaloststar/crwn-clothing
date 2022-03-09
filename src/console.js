const myObjectToStore = { name: 'yihua' };

window.localStorage.setItem('myItem',JSON.stringify(myObjectToStore));

const myRetrievedObject = window.localStorage.getItem('myItem');

myRetrivedObject = JSON.parse(myRetrivedObject);