import React from "react";
import './App.css';
import Header from "./components/Header";

import View from "./components/View";

import CardComponent from "./components/Card";
import ButtonComponent from "./components/Button";

import ModalComponent from "./components/modal";

const totalCredit = (listData) => {
  return listData.reduce(function(prev, cur) {
    return prev + cur.credit || 0;
  }, 0);
};

const totalDebit = (listData) => {
  return listData.reduce(function(prev, cur) {
    return prev + cur.debit || 0;
  }, 0);
};

const currentBalance = (listData) => {
  return listData[0] ? listData[0].balance : 0;
};

function App() {
const [listData,setListData]=React.useState([])


  return (
    <div className="App">
     <Header/>

     <div style= {{display:"flex", justifyContent:"center"}}>
     <CardComponent Header={[
      {key: "Net Balance", value: parseInt(currentBalance(listData), 10), type:"primary"},
      {key: "Total Credit", value: parseInt(totalCredit(listData), 10), type:"success"},
      {key: "Total Debit", value: parseInt(totalDebit(listData), 10), type:"danger"}]}/>
     </div>
     <div style={{padding:"12px"}}>
     <ButtonComponent listData={listData} setListData={setListData}/></div>
     <View list={listData}/>
     
     <ModalComponent/>
   
    </div>
    
  );
};

export default App;
