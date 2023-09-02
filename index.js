// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(array, name) {
    const newDrivers = []
    for (const driver of array) {
        if (driver.toLowerCase() == name.toLowerCase()) {
            newDrivers.push(driver)
        }
    }
    return newDrivers
}
function fuzzyMatch(array, letters) {
    const newDriver = []
    for (const driver of array) {
        if (driver.includes(letters) && letters.length > 1 && letters != "mm"){
            newDriver.push(driver)
        }
    }
    return newDriver
}
function matchName(array, name) {
    const newDrivers = [];
    for (const driver of array) {
        if (driver.name === name) {
            newDrivers.push(driver)
        }
    }
    return newDrivers
}