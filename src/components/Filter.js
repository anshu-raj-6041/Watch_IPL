// import React, { useState } from 'react';
// import data from '../data';
// import Card from './Card';

// const Filter = () => {
//     const [tours, setTours] = useState(data);

//     const filterItem = (categItem) => {
//         const up = data.filter((curElem) => {
//             return curElem.category === categItem;
//         });
//         setTours(up);

//     }

//     return (
//         <div className="menu-tabs con">
//             {/* Filter Buttons */}
//             <div className="menu-tab">
//                 <button onClick={() => filterItem('MI')}>MI</button>
//                 <button onClick={() => filterItem('CSK')}>CSK</button>
//                 <button onClick={() => filterItem('RCB')}>RCB</button>
//                 <button onClick={() => filterItem('SRH')}>SRH</button>
//                 <button onClick={() => filterItem('All')}>All</button>
//             </div>

//             {/* Render Filtered Tours */}
//             {/* <div className="tour-container">
//                 {
//                     filterItem()?.map((course) => {
//                         return (<Card key={tours.id} tours={tours} setTours={setTours} />)
//                     })
//                 }

//             </div> */}
//         </div>
//     );
// };

// export default Filter;
