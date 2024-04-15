// import React, { useState } from 'react'
// import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// type Props = {}

// const Multigraph = (props: Props) => {
//   const [activeTab, setActiveTab] = useState("account");

//   const handleTabChange = (value: string) => {
//     setActiveTab(value);
//   };

//   return (
//     <div className='relative'>
//       <div className='absolute top-3 right-5 p-0'>
//         <Select>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue>{activeTab === 'account' ? 'Account' : 'Password'}</SelectValue>
//           </SelectTrigger>
//           <SelectContent>
//             <div onClick={() => {
//               console.log("clicked")
//               console.log(activeTab)
//               handleTabChange('account')
//               console.log(activeTab)

//             }} >
//               <SelectItem value="account">
//                 Account
//               </SelectItem>
//             </div>

//             <div  onClick={() => handleTabChange('password')}>
//               <SelectItem value="password">
//                 Password
//               </SelectItem>
//             </div>


//           </SelectContent>
//         </Select>
//       </div>
//       <div>
//         {activeTab === "account" && <h1>systum h bhai</h1>}
//         {activeTab === "password" && <h1>Other tab content</h1>}
//       </div>
//     </div>
//   )
// }

// export default Multigraph



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CustomTabs, CustomTabsList, CustomTabsTrigger, CustomTabsContent } from './ui/customTabs'
import { Overview } from './ui/charts/BarChart'
import { LineC } from './ui/charts/LineChart'


type Props = {}

const Multigraph = (props: Props) => {

  return (
    <div className="h-96  relative pt-8 w-full">
      <Tabs defaultValue="password" className="h-full z-10">
        <div className="">
          <div className=' absolute -top-2 -right-2 p-0 z-10'>
            <TabsList className="">
              <Select defaultValue='account'>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="account">
                    <TabsTrigger className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground" value="account">
                      Account
                    </TabsTrigger>

                  </SelectItem>
                  <SelectItem value="password" >
                    <TabsTrigger className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground" value="password">
                      Password
                    </TabsTrigger>
                  </SelectItem>
                </SelectContent>
              </Select>
            </TabsList>
          </div>
        </div>
        <TabsContent value="account" className="h-full"><Overview />
        </TabsContent>
        <TabsContent value="password" className="h-full"><LineC />
        </TabsContent>
        {/* <Overview /> */}
      </Tabs>
    </div>
  )
}

export default Multigraph




// <Tabs defaultValue="account" className="w-[400px] ">
//     <TabsList className=" w-[100px] absolute top-3 right-5 p-0">
//         {/* <TabsTrigger value="account">Account</TabsTrigger>
//         <TabsTrigger value="password">Password</TabsTrigger> */}
//         < Select >
//             <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="account" />
//             </SelectTrigger>
//             <SelectContent>


//                 <SelectItem value="account">
//                 <TabsTrigger className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-inherit" value="password">Password</TabsTrigger>
//                 </SelectItem>
//                 <SelectItem value="password">
//                 <TabsTrigger className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" value="account">Password</TabsTrigger>
//                 </SelectItem>

//             </SelectContent>
//         </Select >

//     </TabsList>
//     <TabsContent value="account">Account</TabsContent>
//     <TabsContent value="password">Password</TabsContent>
// </Tabs>
//     <Tabs value={activeTab} className="w-[400px]">
//     <TabsList className="w-[100px] absolute top-3 right-5 p-0">
//         <Select>
//             <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Select tab" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectItem value="account">
//                     <TabsTrigger className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground" value="account">
//                         Account
//                     </TabsTrigger>
//                 </SelectItem>
//                 <SelectItem value="password">
//                     <TabsTrigger className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground" value="password">
//                         Password
//                     </TabsTrigger>
//                 </SelectItem>
//             </SelectContent>
//         </Select>
//     </TabsList>
//     <TabsContent value="account">Account</TabsContent>
//     <TabsContent value="password">Password</TabsContent>
// </Tabs>

//     <CustomTabs defaultValue="3">
//   <CustomTabsList>
//     <CustomTabsTrigger value={'1'}>Tab 1</CustomTabsTrigger>
//     <CustomTabsTrigger value={'2'}>Tab 2</CustomTabsTrigger>
//     <CustomTabsTrigger value={'3'}>Tab 3</CustomTabsTrigger>
//   </CustomTabsList>
//   <CustomTabsContent value={'1'}>
//     <div>Content for Tab 1</div>
//   </CustomTabsContent>
//   <CustomTabsContent value={'2'}>
//     <div>Content for Tab 2</div>
//   </CustomTabsContent>
//   <CustomTabsContent value={'3'}>
//     <div>Content for Tab 3</div>
//   </CustomTabsContent>
// </CustomTabs>