let message = "There is no war in Ba Sing Se";
let words = message.split(" ");
let numberOfWords = words.length;
console.log("The message contains " + numberOfWords + " words.")

//second challenge 
let countries = ['China', 'Japan', 'South Korea', 'Vietnam', 'Malaysia'];
let capitals = ['Beijing', 'Tokyo', 'Seoul', 'Hanoi', 'Kuala Lumpur'];


if (countries.length === capitals.length) {

  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let capital = capitals[i];
    console.log("Your country: " + country + " has the capital named: " + capital);
  }

}

//Third challenge 
let randomizer = Math.floor(Math.random() * 4);


let fate;
switch (randomizer) {
  case 0:
    fate = "A certain victory";
    break;
  case 1:
    fate = "Not so certain victory";
    break;
  case 2:
    fate = "An uneasy victory";
    break;
  default:
    fate = "Your fate is unclear, ô chosen undead";
}

console.log("Your fate: " + fate);
//fourth challenge 
function checkSeason(month) {
 
  
  if (month === 'december' || month === 'january' || month === 'february') {
    return 'Winter';
  } else if (month === 'march' || month === 'april' || month === 'may') {
    return 'Spring';
  } else if (month === 'june' || month === 'july' || month === 'august') {
    return 'Summer';
  } else if (month === 'september' || month === 'october' || month === 'november') {
    return 'Autumn';
  } 
}
console.log(checkSeason('july'));