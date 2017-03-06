let moving = require ('./parse.js');

function movingViolations(){
  let movingData = moving('./traffic-data/simple_data/moving_jan_2016.csv');
  let ticketData = {};


  let violation_type = {};
  movingData.forEach(function moving(violationType) {
      if (!violation_type[violationType[18]]) {
        violation_type[violationType[18]] = 1;
      } else {
        violation_type[violationType[18]]= violation_type[violationType[18]] + 1;
      }
    });
    let ticketKeys = Object.keys(violation_type);


    let mostCommonViolation=0;
    for (i=1; i<(ticketKeys.length); i++){
        if (violation_type[ticketKeys[i]] > mostCommonViolation){
          mostCommonViolation = violation_type[ticketKeys[i]];
          highest_frequency_of_violations = ticketKeys[i];
        }
        ticketData.most_common_moving_violation = highest_frequency_of_violations;
      };



      let fineTotal = 0;
      let fineTemp = 0;
      let fineLength = 0;
      let fineAverage = [];

      movingData.forEach(function average(fines) {
          fineAverage = fines[10];

        if (!fineAverage===NaN){
          fineTemp = Number(fines[10]);
          fineTotal = fineTotal + fineTemp;
          fineAverage = (fineTotal / fineLength);
          }
      });

      let fine_average_temp = fineAverage;
      ticketData.fine_average = '$'+ fine_average_temp;



     let photoTotal = 0;
     let photoTemp = 0;
     let ticketType = 0;
     let otherTotal = 0;
     let otherTemp = 0;
     let totalIncome = 0;

     movingData.forEach(function ticketIncome(index) {
         ticketType = index[9];
         if (ticketType === 'Photo'){
           photoTemp = Number(index[11]) + Number(index[12]) + Number(index[13]);
           photoTotal = photoTotal + photoTemp;
         }else{
               otherTemp = Number(index[11]) + Number(index[12]) + Number(index[13]);
               console.log(index[12]);
               otherTotal = otherTotal + otherTemp;
             }
         totalIncome = photoTotal + otherTotal;
           });
           ticketData.photoIncome = '$'+ photoTotal;
           ticketData.totalIncome = '$'+ totalIncome;

        return ticketData;
}
movingViolations();
console.log(movingViolations());
