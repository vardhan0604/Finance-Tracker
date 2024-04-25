"use client"
import React from 'react'
import Navabar from './Navabar'
import { ScrollArea } from './ui/scroll-area'
import Accounts from './Accounts'
import Multigraph from './Multigraph'
import { LineC } from './ui/charts/LineChart'
import { Overview } from './ui/charts/BarChart'
import TransactionTable from './TransactionTable'
import { RecoilRoot } from 'recoil'

type Props = {
    user: string;
}

const Main = (props: Props) => {
   let user=props.user;
  return (
    <RecoilRoot>
    <div className=" grid grid-cols-4" style={{ height: "calc(100vh - 68px)" }}>
      <ScrollArea className="col-span-3">
        <div className=" flex flex-col gap-4 h-full ml-6 mr-6 " style={{ height: "inherit" }}>
        
          <Accounts user={user}/>

          <div className=" grid gap-3 pt-4 pb-4 shadow-sm flex-1 mb-4 lg:grid-cols-3" style={{ height: "inherit" }}>
            <div className="flex bg-card border rounded-lg p-4 lg:row-span-2 "> 
              <Multigraph />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <LineC />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <Overview />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <Overview />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <LineC />
            </div>
          </div>
        </div>
        </ScrollArea>
        <TransactionTable user={user}/>
      </div>

    </RecoilRoot>
  )
}

export default Main