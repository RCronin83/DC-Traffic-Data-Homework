let parking = require ('./parse.js');

function parkingViolations(){
  let parkingData = parking('./traffic-data/simple_data/parking_feb_2016.csv');
  let ticketType = {};
  let mostTicketedType= {};

  parkingData.forEach(function(item) {
      if (!ticketType[item[10]]) {
        ticketType[item[10]] = 1;
      } else {
       ticketType[item[10]]= ticketType[item[10]] + 1;
      }
    });

  let ticketKeys = Object.keys(ticketType);
  let mostCommonViolation=0;
  let number_of_different_violations = ticketKeys.length;
    for (i=0; i<(ticketKeys.length); i++){
        if (ticketType[ticketKeys[i]] >= mostCommonViolation){
          mostCommonViolation = ticketType[ticketKeys[i]];
          most_common_violation = ticketKeys[i];
        }
        mostTicketedType.number_of_different_parking_violations = number_of_different_violations;
        mostTicketedType.most_common_parking_violation = most_common_violation;
        }
        return mostTicketedType;
}
parkingViolations();
console.log(parkingViolations());
