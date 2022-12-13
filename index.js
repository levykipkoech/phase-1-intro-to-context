// Your code here
const createEmployeeRecord = function(arr) {
    return {
        firstName: arr[0],
        familyName:arr[1],
        title:arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
  
  }
  
  let testEmployee =createEmployeeRecord(["Gray", "Worm", "Security", 1]);
  console.log(testEmployee.firstName);
  console.log(testEmployee.familyName);
  console.log(testEmployee.title);
  console.log(testEmployee.payPerHour);
  console.log(testEmployee.timeInEvents);
  console.log(testEmployee.timeOutEvents);
  
  
  function createEmployeeRecords(newArr){
    return newArr.map(createEmployeeRecord)
  }
  
  function createObj(getType, dateStamp) {
    return {type: getType, date: dateStamp.slice(0,10), hour: parseInt(dateStamp.slice(-4))}
  }
  
  function createTimeInEvent(obj, dateStamp){
    obj.timeInEvents.push(createObj("TimeIn", dateStamp))
    return obj;
  }
  
  
  function createTimeOutEvent(obj, dateStamp){
    obj.timeOutEvents.push(createObj("TimeOut", dateStamp))
    return obj;
  }
  
  function hoursWorkedOnDate(obj, dateYMD){
    const timeIn = obj.timeInEvents.find((e) => e.date === dateYMD).hour;
    const timeOut = obj.timeOutEvents.find((e) => e.date === dateYMD).hour;
    return (timeOut - timeIn)/100;
  }
  
  function wagesEarnedOnDate(obj, dateYMD){
  
    const wage = obj.payPerHour;
    const hoursWorked = hoursWorkedOnDate(obj, dateYMD);
    return wage * hoursWorked;
  }
  
  function allWagesFor(obj){
    const allWages = obj.timeInEvents.map((day) => {return wagesEarnedOnDate(obj, day.date)})
    return allWages.reduce((acc, cv) => acc + cv)
  }
  
  function calculatePayroll(rec){
    const allPay = (rec.map((empl) => {return allWagesFor(empl)}))
    return allPay.reduce((acc, cv) => acc + cv)
  }
  
  function findEmployeeByFirstName(srcArr, first_Name){
    return srcArr.find((rec) => rec.firstName === first_Name)
  }
  
  
        