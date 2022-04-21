// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(sign = "*") {
  function innerWrap(adj = "special") {
    let stringAdj = `You are ${sign}` + `${adj}` + `${sign}!`;
    return stringAdj;
  }
  return innerWrap;
}
