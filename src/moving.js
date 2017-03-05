let moving = require ('./parse.js');

function movingViolations(){
  let movingData = moving('./traffic-data/simple_data/moving_jan_2016.csv');
  let ticketType = {};
  let mostTicketedType= {};


  movingData.forEach(function(item) {
      if (!ticketType[item[18]]) {
        ticketType[item[18]] = 1;
      } else {
       ticketType[item[18]]= ticketType[item[18]] + 1;
      }
    });


  let ticketKeys = Object.keys(ticketType);
  let mostCommonViolation=0;

    for (i=0; i<(ticketKeys.length); i++){
        if (ticketType[ticketKeys[i]] >= mostCommonViolation){
          mostCommonViolation = ticketType[ticketKeys[i]];
          highest_frequency_of_violations = ticketKeys[i];
        }
        mostTicketedType.most_common_moving_violation = highest_frequency_of_violations;
        }
        return mostTicketedType;
}
movingViolations();
console.log(movingViolations());
