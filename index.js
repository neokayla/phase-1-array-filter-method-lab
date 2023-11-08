// Code your solution here
function findMatching(drivers, query) {
    const uppercaseQuery = query.toUpperCase();
    const matchingDrivers = drivers.filter(driver => {
      const uppercaseDriverName = driver.toUpperCase();
      return uppercaseDriverName.includes(uppercaseQuery);
    });
    return matchingDrivers;
}

function fuzzyMatch (drivers, query){
    return drivers.filter((driver) => driver.startsWith(query))

}
 function matchName (driver, query){
    return driver.filter((driver => driver.name === query))

 }