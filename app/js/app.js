var cousins = [ {
  first_name: Zach,
  last_name: Fessler
},
{
  first_name: Sam,
  last_name: Fessler
},
{
  first_name: Megan,
  last_name: Fessler
},
{
  first_name: Brigid,
  last_name: Daniels
},
{
  first_name: Katelyn,
  last_name: Daniels
},
{
  first_name: Claire,
  last_name: Daniels
},
{
  first_name: William,
  last_name: Daniels
},
{
  first_name: Dawson,
  last_name: Sheffield
},
{
  first_name: Reagan,
  last_name: Sheffield
},
{
  first_name: Gavin,
  last_name: Sheffield
},
{
  first_name: John,
  last_name: Montgomery
},
{
  first_name: Rob,
  last_name: Montgomery
},
{
  first_name: Danny,
  last_name: Montgomery
},
{
  first_name: Emma,
  last_name: Montgomery
}];

// randomly generate new cousin array
var pickCousins = function(){
  var cousinPicks = [];
  var giver = {};
  var recipient = {};
  for(var i = 0; i < cousins.length; i++){
    if(cousins[i].last_name === [add logic here]){ // giver and recipient last name cannot equal
      // do something here
    }
    console.log(cousinPicks);
  }
};

var makePicks = document.getElementById('pickButton');
    makePicks.addEventListener('click', function(){
      pickCousins(cousins);
    });
