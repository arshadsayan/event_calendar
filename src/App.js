// src/App.js
import React from 'react';
import SixMonthCalendar from './components/SixMonthCalendar';
import Scheduler from './components/Scheduler';
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div>
      <h1>Six Month Calendar with Scheduler</h1>
      <SixMonthCalendar />
      <Scheduler />
      <Sidebar/>
    </div>
  );
};
export default App;





























// import React, { useState } from 'react';
// import { Container, Grid, Paper } from '@mui/material';
// import TopNav from './components/TopNav';
// import Sidebar from './components/Sidebar';
// import MyCalendar from './components/Calendar';
// import AcademicCalendar from './components/acal'; // Import AcademicCalendar component
// import './App.css';

// const App = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   return (
//     <div className="App">
//       <TopNav />
//       <Grid container>
//         <Grid item xs={2}>
//           <Sidebar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
//         </Grid>
//         <Grid item xs={10}>
//           <Container>
//             <Paper style={{ padding: '20px', marginTop: '20px' }}>
//               <MyCalendar selectedDate={selectedDate} />
//             </Paper>
//             <Paper style={{ padding: '20px', marginTop: '20px' }}>
//               <AcademicCalendar /> {/* Add AcademicCalendar component */}
//             </Paper>
//           </Container>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default App;
