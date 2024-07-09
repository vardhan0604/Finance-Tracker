"use client"
import React, { use, useEffect } from 'react'
import Navabar from './Navabar'
import { ScrollArea } from './ui/scroll-area'
import Accounts from './Accounts'
import Multigraph from './Multigraph'
import { BarChartGraph } from './ui/charts/BarChart'
import { RadarChartGraph } from './ui/charts/RadialChart'
import TransactionDialog from './TransactionDialog'
import { RecoilRoot } from 'recoil'
import { getTotalTransactionsperCategory } from '@/lib/actions/transations.action'
import  { PieChartGraph } from './ui/charts/PieChart'
import { BarChart } from 'lucide-react'
import { AreaChartGraph } from './ui/charts/AreaChart'

type Props = {
    user: string;
}

const Main = (props: Props) => {

   let user=props.user;
   
useEffect(() => {
    const totalTransactionsperCategory = async () => {
      try {
        console.log('Generating transactions...');
        await getTotalTransactionsperCategory(user).then((res) => {
          console.log(res);
        });} catch (error) {
          console.error('Failed to generate transactions', error);
        }
    };

    // Call the function to generate transactions
    totalTransactionsperCategory();
  }
  , []);  

  return (
    <RecoilRoot>
    <div className=" grid grid-cols-4" style={{ height: "calc(100vh - 68px)" }}>
      <ScrollArea className="col-span-3">
        <div className=" flex flex-col gap-4 h-full ml-6 mr-6 " style={{ height: "inherit" }}>
        
          <Accounts user={user}/>

          <div className=" grid gap-4 pt-4 pb-4 shadow-sm flex-1 mb-4 lg:grid-cols-3" style={{ height: "inherit" }}>
            <div className="flex bg-card border rounded-lg p-4  "> 
              <Multigraph />
            </div>
            <div className="bg-card border rounded-lg p-4  ">
              <PieChartGraph />
            </div>
            {/* <div className="bg-card border rounded-lg p-4 lg:row-span-2 col-span-2">
              <TotalAmountPerCategory />
            </div> */}
            <div className="bg-card border rounded-lg p-4 ">
              <AreaChartGraph />
            </div> 
            
            <div className="bg-card border rounded-lg p-4">
              <RadarChartGraph />
            </div>
          </div>
        </div>
        </ScrollArea>
        <TransactionDialog user={user}/>
      </div>

    </RecoilRoot>
  )
}

export default Main