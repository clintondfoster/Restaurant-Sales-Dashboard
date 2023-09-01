import React, { useState } from 'react';
import './App.css';
import TransactionLog from './components/TransactionLog';
import GeoMap from './components/GeoMap.jsx'
import { mockTransactions } from './data/mockData';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

function App() {
  const [toggle, setToggle] = useState(false);



//monitor sales and revenue from food items
//data {sales}, {newClients}, {revenueGenerated}, {trafficGenerated}, display in dashboard
//user can view data and additional info (pop-up)
{/* <button onClick={toggleSideBar}>Toggle Sidebar</button> */}

return (
  <>
  <div className='app'>
    <header className='header'>
      <h1>DASHBOARD</h1>
      <p>Welcome to your dashboard</p>
      <MenuSharpIcon onClick={()=>setToggle(!toggle)}></MenuSharpIcon>
      {toggle && <GeoMap />}
    </header>
    <div className="menu" style={{left: toggle?'0':'-100%'}}></div>
  </div>
  <div className="content">
    <h2 className="recent-trans">Recent Transactions</h2>
    <table className="transaction-table">
      <tbody>
        {mockTransactions.map((transaction, idx) => (
            <TransactionLog key={idx + 1} transaction={transaction}/>
          ))}
      </tbody>
    </table>
    </div>
    {/* <GeoMap /> */}
  </>
  )
}

export default App;
