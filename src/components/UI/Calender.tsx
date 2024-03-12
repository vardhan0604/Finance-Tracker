"use client"
import { Calendar } from "@/components/ui/calendar"
import React from "react"

export const CalenderComp = () => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <Calendar
            mode="single"
            selected={date}
            className="rounded-md border"
            onSelect={setDate}
        />
    )
}


// "use client"
// import { Day, DayPicker } from // Import necessary components
// import React from "react"
// import { Day, DayPicker } from "react-day-picker"

// export const CalenderComp = () => {
//     const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date())

//     // Sample data for task completion
//     const taskCompletionData = {
//         "2024-03-09": true, // Example: Task completed on March 9, 2024
//         "2024-03-15": true, // Another example
//         // Add more dates as needed
//     }

//     // Function to determine whether a date should be highlighted
//     const shouldHighlightDate = (date: Date): boolean => {
//         const dateString = date.toISOString().split('T')[0] // Convert date to YYYY-MM-DD format
//         return !!taskCompletionData[dateString] // Check if the date exists in taskCompletionData
//     }

//     return (
//         <DayPicker>
//             {(date: any) => (
//                 <Day
//                     date={date}
//                     selected={selectedDate}
//                     onSelect={setSelectedDate}
//                     style={{
//                         backgroundColor: shouldHighlightDate(date) ? 'green' : 'transparent', // Highlight if date is in taskCompletionData
//                         color: shouldHighlightDate(date) ? 'red' : 'white' // Set text color for highlighted dates
//                     }}
//                 >
//                     {date.getDate()}
//                 </Day>
//             )}
//         </DayPicker>
//     )
// }


// import { Calendar } from "@/components/ui/calendar";
// import React from "react";

// export const CalendarComp = () => {
//     const [date, setDate] = React.useState<Date | undefined>(new Date());
//     const [completedDates, setCompletedDates] = React.useState<Date[]>([]);

//     // Function to toggle completed dates
//     const toggleCompletedDate = (selectedDate: Date) => {
//         const index = completedDates.findIndex((d) => d.getTime() === selectedDate.getTime());
//         if (index === -1) {
//             // If the date is not in the list, add it
//             setCompletedDates([...completedDates, selectedDate]);
//         } else {
//             // If the date is already in the list, remove it
//             setCompletedDates(completedDates.filter((_, i) => i !== index));
//         }
//     };

//     // Function to check if a date is completed
//     const isCompletedDate = (date: Date) => {
//         return completedDates.some((d) => d.getTime() === date.getTime());
//     };

//     // Custom renderer for each day
//     const renderDay = (date: Date) => {
//         const completed = isCompletedDate(date);
//         return (
//             <div
//                 className={`p-1 rounded-full ${completed ? 'bg-green-500 text-white' : ''}`}
//                 onClick={() => toggleCompletedDate(date)}
//             >
//                 {date.getDate()}
//             </div>
//         );
//     };

//     return (
//         <Calendar
//             mode="single"
//             selected={date}
//             className="rounded-md border"
//             onSelect={setDate}
//             // renderDay={renderDay}
//         />
//     );
// };
