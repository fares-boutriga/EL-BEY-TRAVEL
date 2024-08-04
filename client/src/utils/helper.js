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

const handleRoomsPrice = (arrPrices,supp,roomData,periods,checkInDate,checkOutDate,RoomPromtonts) => {
  let roomsPricesByDay={}
  let roomsPrice = {};
  let total=0
  const {baby,hotelId,id,maxThreeKids,promotionTypePrtcentage,theardBad, towKisOneAdult,towKisTowAdult}=RoomPromtonts[0]
  const upresult=[]
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  for (let currentDate = checkIn; currentDate < checkOut; currentDate.setDate(currentDate.getDate() + 1)) {
    const idPeriod = findPeriodId(periods, currentDate.toISOString().split('T')[0]);
    const dayy=`day ${currentDate}`
    for (let i = 0; i < roomData.length; i++) {
      const roomNumber = `room${i + 1}`;
      let adultNumber=roomData[i].nAdult
      let kidsNumber=roomData[i].nKids
      let kidsAgesArray=roomData[i].kidsAge
      // startign the type of reservation logment simple 
      //oen single adult 
      if(supp==='logementSimple'){
        if (adultNumber===1){
          //one single adulte without kids
          if (kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'logementSimple',idPeriod)
          }
          //one single adult with kids 
          if(kidsNumber!==0&&kidsNumber<=2){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod)*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
            //condition when we dont remove the suppliment single
            roomsPrice[roomNumber] = (findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'logementSimple',idPeriod))*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
          } if(kidsNumber===3){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod)*(1+(3-((3*maxThreeKids)/100)))
          }else if (kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod)*(1+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))
          }
        }
        // tow adults
        if (adultNumber===2){
          //tow adult without kids
          if(kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod)*2
          }if(kidsNumber!==0&&kidsNumber<=2){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod)*(2+(kidsNumber-((kidsNumber*towKisTowAdult)/100)))
          }else if(kidsNumber===3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod)*(2+(3-((3*maxThreeKids)/100)))
          }else if(kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod)*(2+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))

          }
        }else if(adultNumber===3){
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod)*3

        }
      }
      //petitDej start
      if(supp==='petitDej'){
        if (adultNumber===1){
          //one single adulte without kids
          if (kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'petitDej',idPeriod)
          }
          //one single adult with kids 
          if(kidsNumber!==0&&kidsNumber<=2){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod)*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
            //condition when we dont remove the suppliment single
            roomsPrice[roomNumber] = (findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'petitDej',idPeriod))*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
          } if(kidsNumber===3){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod)*(1+(3-((3*maxThreeKids)/100)))
          }else if (kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod)*(1+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))
          }
        }
        // tow adults
        if (adultNumber===2){
          console.log("fffffffff")
          //tow adult without kids
          if(kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod)*2
          }if(kidsNumber!==0&&kidsNumber<=2){
            console.log('one or tow kids', towKisTowAdult)
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod)*(2+(kidsNumber-((kidsNumber*towKisTowAdult)/100)))
          }else if(kidsNumber===3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod)*(2+(3-((3*maxThreeKids)/100)))
            console.log('three kids')
          }else if(kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod)*(2+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))
            console.log('more thern three kids')
          }
        }else if(adultNumber===3){
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod)*3

        }
      }
      //petitDej end
      //supplémentVueSurMer start
      if(supp==='supplémentVueSurMer'){
        if (adultNumber===1){
          //one single adulte without kids
          if (kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'logementSimple',idPeriod)
          }
          //one single adult with kids 
          if(kidsNumber!==0&&kidsNumber<=2){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
            //condition when we dont remove the suppliment single
            roomsPrice[roomNumber] = (findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod))*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
          } if(kidsNumber===3){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)*(1+(3-((3*maxThreeKids)/100)))
          }else if (kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)*(1+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))
          }
        }
        // tow adults
        if (adultNumber===2){
          //tow adult without kids
          if(kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)*2
          }if(kidsNumber!==0&&kidsNumber<=2){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)*(2+(kidsNumber-((kidsNumber*towKisTowAdult)/100)))
          }else if(kidsNumber===3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)*(2+(3-((3*maxThreeKids)/100)))
          }else if(kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)*(2+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))

          }
        }else if(adultNumber===3){
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)*3

        }
      }
      //supplémentVueSurMer end
      //demiePension start
      if(supp==='demiePension'){
        if (adultNumber===1){
          //one single adulte without kids
          if (kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'demiePension',idPeriod)
          }
          //one single adult with kids 
          if(kidsNumber!==0&&kidsNumber<=2){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod)*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
            //condition when we dont remove the suppliment single
            roomsPrice[roomNumber] = (findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'demiePension',idPeriod))*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
          } if(kidsNumber===3){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod)*(1+(3-((3*maxThreeKids)/100)))
          }else if (kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod)*(1+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))
          }
        }
        // tow adults
        if (adultNumber===2){
          //tow adult without kids
          if(kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod)*2
          }if(kidsNumber!==0&&kidsNumber<=2){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod)*(2+(kidsNumber-((kidsNumber*towKisTowAdult)/100)))
          }else if(kidsNumber===3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod)*(2+(3-((3*maxThreeKids)/100)))
          }else if(kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod)*(2+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))

          }
        }else if(adultNumber===3){
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod)*3

        }
      }
      //demiePension end
      //pensionComplete start
      if(supp==='pensionComplete'){
        if (adultNumber===1){
          //one single adulte without kids
          if (kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'pensionComplete',idPeriod)
          }
          //one single adult with kids 
          if(kidsNumber!==0&&kidsNumber<=2){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod)*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
            //condition when we dont remove the suppliment single
            roomsPrice[roomNumber] = (findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'pensionComplete',idPeriod))*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
          } if(kidsNumber===3){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod)*(1+(3-((3*maxThreeKids)/100)))
          }else if (kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod)*(1+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))
          }
        }
        // tow adults
        if (adultNumber===2){
          //tow adult without kids
          if(kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod)*2
          }if(kidsNumber!==0&&kidsNumber<=2){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod)*(2+(kidsNumber-((kidsNumber*towKisTowAdult)/100)))
          }else if(kidsNumber===3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod)*(2+(3-((3*maxThreeKids)/100)))
          }else if(kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod)*(2+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))

          }
        }else if(adultNumber===3){
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod)*3

        }
      }
      //pensionComplete end
      //allInSoft start
      if(supp==='allInSoft'){
        if (adultNumber===1){
          //one single adulte without kids
          if (kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'allInSoft',idPeriod)
          }
          //one single adult with kids 
          if(kidsNumber!==0&&kidsNumber<=2){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod)*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
            //condition when we dont remove the suppliment single
            roomsPrice[roomNumber] = (findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'allInSoft',idPeriod))*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
          } if(kidsNumber===3){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod)*(1+(3-((3*maxThreeKids)/100)))
          }else if (kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod)*(1+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))
          }
        }
        // tow adults
        if (adultNumber===2){
          //tow adult without kids
          if(kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod)*2
          }if(kidsNumber!==0&&kidsNumber<=2){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod)*(2+(kidsNumber-((kidsNumber*towKisTowAdult)/100)))
          }else if(kidsNumber===3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod)*(2+(3-((3*maxThreeKids)/100)))
          }else if(kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod)*(2+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))

          }
        }else if(adultNumber===3){
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod)*3

        }
      }
      //allInSoft end
      //allIn start
      if(supp==='allIn'){
        if (adultNumber===1){
          //one single adulte without kids
          if (kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'allIn',idPeriod)
          }
          //one single adult with kids 
          if(kidsNumber!==0&&kidsNumber<=2){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod)*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
            //condition when we dont remove the suppliment single
            roomsPrice[roomNumber] = (findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'allIn',idPeriod))*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
          } if(kidsNumber===3){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod)*(1+(3-((3*maxThreeKids)/100)))
          }else if (kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod)*(1+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))
          }
        }
        // tow adults
        if (adultNumber===2){
          //tow adult without kids
          if(kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod)*2
          }if(kidsNumber!==0&&kidsNumber<=2){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod)*(2+(kidsNumber-((kidsNumber*towKisTowAdult)/100)))
          }else if(kidsNumber===3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod)*(2+(3-((3*maxThreeKids)/100)))
          }else if(kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod)*(2+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))

          }
        }else if(adultNumber===3){
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod)*3

        }
      }
      //allIn end
      //supplementSuite start
      if(supp==='supplementSuite'){
        if (adultNumber===1){
          //one single adulte without kids
          if (kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'supplementSuite',idPeriod)
          }
          //one single adult with kids 
          if(kidsNumber!==0&&kidsNumber<=2){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod)*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
            //condition when we dont remove the suppliment single
            roomsPrice[roomNumber] = (findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'supplementSuite',idPeriod))*(1+(kidsNumber-((kidsNumber*towKisOneAdult)/100)))
          } if(kidsNumber===3){
            //condione when we remove the suppliment single
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod)*(1+(3-((3*maxThreeKids)/100)))
          }else if (kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod)*(1+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))
          }
        }
        // tow adults
        if (adultNumber===2){
          //tow adult without kids
          if(kidsNumber===0){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod)*2
          }if(kidsNumber!==0&&kidsNumber<=2){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod)*(2+(kidsNumber-((kidsNumber*towKisTowAdult)/100)))
          }else if(kidsNumber===3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod)*(2+(3-((3*maxThreeKids)/100)))
          }else if(kidsNumber>3){
            roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod)*(2+(kidsNumber-3)+(3-((2*maxThreeKids)/100)))

          }
        }else if(adultNumber===3){
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod)*3

        }
      }
      //supplementSuite end
      
    }  
    roomsPricesByDay[dayy]=roomsPrice
    for (let key in roomsPrice) {
      total += roomsPrice[key];
    }
    
    total = total ;

}
 
  return total
};



export  {findObjectByType, findPeriodId,sumUsingReduceArrow,handleRoomsPrice}