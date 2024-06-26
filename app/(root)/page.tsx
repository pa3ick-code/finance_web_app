import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

export default function Home() {
  const isLoggedIn = {firstName: "Patrick", lastName: "Fidel", email: "patrickfidel@gmail.com"}
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title= "Welcome"
            user={isLoggedIn? isLoggedIn.firstName : "Guest"}
            subtext="Access and manage your finance transactions effectively."
          />
          <TotalBalanceBox 
            accounts ={[]}
            totalBanks = {1}
            totalCurrentBalance= {1400.00}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      
      <RightSidebar 
        user={isLoggedIn}
        transactions={[]}
        banks={[{}, {}]}
      />
    </section>
  );
}
