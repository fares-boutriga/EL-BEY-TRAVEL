 const  findObjectByType = (arr, type,idPeriode)=> {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === type &&arr[i].periodId===idPeriode            ) {
            return  arr[i].price;
        }
    }
    return null; // Return null if no match is found
}
function findPeriodId(periods, date) {
    const searchDate = new Date(date);

    for (const period of periods) {
        const startDate = new Date(period.start_date);
        const endDate = new Date(period.end_date);

        if (searchDate >= startDate && searchDate <= endDate) {
            return period.id;
        }
    }

    return false;
}
const sumUsingReduceArrow = arr => arr.reduce((acc, curr) => acc + curr, 0);

const handleRoomsPrice = (arrPrices,supp,roomData,periods,checkInDate,checkOutDate) => {
    let roomsPricesByDay={}
    let roomsPrice = {};
    let total=0
    const upresult=[]
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    for (let currentDate = checkIn; currentDate < checkOut; currentDate.setDate(currentDate.getDate() + 1)) {
      const idPeriod = findPeriodId(periods, currentDate.toISOString().split('T')[0]);
      const dayy=`day ${currentDate}`
      for (let i = 0; i < roomData.length; i++) {
        const roomNumber = `room${i + 1}`;
  
        if (roomData[i].nAdult === 1&&supp==='logementSimple') {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'logementSimple',idPeriod)
          // console.log('gares',findObjectByType(arrPrices,'logementSimple',idPeriod),i)
        } else if (roomData[i].nAdult > 1 &&supp==='logementSimple') {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="petitDej") {
        // console.log('this is hte message to chek the the role of the work',findObjectByType(arrPrices,'petitDej',idPeriod),idPeriod)
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'petitDej',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="petitDej") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="supplémentVueSurMer") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="supplémentVueSurMer") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="demiePension") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'demiePension',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="demiePension") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod) *2;
        }
        
        if (roomData[i].nAdult === 1&&supp==="pensionComplete") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'pensionComplete',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="pensionComplete") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="allInSoft") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'allInSoft',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="allInSoft") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="allIn") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'allIn',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="allIn") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="supplementSuite") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'supplementSuite',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="supplémentSuite") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod) *2;
        }
     
      }  
      roomsPricesByDay[dayy]=roomsPrice
      for (let key in roomsPrice) {
        total += roomsPrice[key];
      }
      
      total = total ;
      // console.log('this is the total', total);
      // upresult.push(total)
      // setResult(result.push(total))
      console.log('dsqfg,sqsgl,mlq,vlmq,gkblqer,gzrgrgr',periods)
  }
   
    // console.log("This is the number of adults:", roomData[0].nAdult === 1);
    // console.log("Rooms price:", roomsPrice);
    // console.log("Room data:", roomData);

  console.log('this is the romms peices',arrPrices)
    // hotels[index].tot=total
    // console.log('this is the result',roomsPricesByDay)
    // setTest(sumUsingReduceArrow(result))
    return total
  };


export  {findObjectByType, findPeriodId,sumUsingReduceArrow,handleRoomsPrice}
// Example usage:
// const periods = [
//     {
//         "start_date": "2024-01-01T00:00:00.000Z",
//         "end_date": "2024-04-30T00:00:00.000Z",
//     },
//     {
//         "start_date": "2024-05-01T00:00:00.000Z",
//         "end_date": "2024-08-31T00:00:00.000Z",
//     }
// ];

// const periodOfStayStart = new Date("2024-04-26");
// const periodOfStayEnd = new Date("2024-05-02");

// // Loop through each day in the period of stay
// for (let currentDate = periodOfStayStart; currentDate <= periodOfStayEnd; currentDate.setDate(currentDate.getDate() + 1)) {
//     const result = findPeriodId(periods, currentDate.toISOString().split('T')[0]);

//     if (result !== false) {
//         console.log(`On ${currentDate.toISOString().split('T')[0]}, the day belongs to period with ID ${result}`);
//     } else {
//         console.log(`On ${currentDate.toISOString().split('T')[0]}, the day doesn't belong to any period.`);
//     }
// }
