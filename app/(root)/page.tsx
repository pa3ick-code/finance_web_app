import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react';

export default async function Home() {
  const isLoggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title= "Welcome"
            user={isLoggedIn?.name}
            subtext="Access and manage your finance transactions effectively."
          />
          <TotalBalanceBox 
            accounts ={[]}
            totalBanks = {1}
            totalCurrentBalance= {5441.00}
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
