// Given the array orders, which represents the orders that customers have done in a restaurant. More specifically orders[i]=[customerNamei,tableNumberi,foodItemi] where customerNamei is the name of the customer, tableNumberi is the table customer sit at, and foodItemi is the item customer orders.

// Return the restaurant's “display table”. The “display table” is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is “Table”, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.

 

// Example 1:

// Input: orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
// Output: [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]] 
// Explanation:
// The displaying table looks like:
// Table,Beef Burrito,Ceviche,Fried Chicken,Water
// 3    ,0           ,2      ,1            ,0
// 5    ,0           ,1      ,0            ,1
// 10   ,1           ,0      ,0            ,0
// For the table 3: David orders "Ceviche" and "Fried Chicken", and Rous orders "Ceviche".
// For the table 5: Carla orders "Water" and "Ceviche".
// For the table 10: Corina orders "Beef Burrito". 

// medium, hashtable, 74% acceptable, no hints

var displayTable = function(orders) {
    
    let tables = {};
    let typesOfMeals = new Set();

    for (let i = 0; i<orders.length; i++) {
        let currentOrder = orders[i];
        let tableNumber = currentOrder[1];
        let item = currentOrder[2];
        typesOfMeals.add(item);
        if (!tables[tableNumber]) {
            tables[tableNumber] = {};
            tables[tableNumber][item] = 1;
        } else {
            if (!tables[tableNumber][item]) {
                tables[tableNumber][item] = 1;
            } else {
                tables[tableNumber][item] += 1;
            }
        }
    }
    let displayTable = [];    
    const sortedMeals = Array.from(typesOfMeals).sort();
    let row1 = ["Table", ...sortedMeals]
    displayTable.push(row1)
    const keysOfTables = (Object.keys(tables).sort((a, b) => a-b)).map((tableNum) => parseInt(tableNum));
    for(let i = 0 ; i<keysOfTables.length; i++) {
        let tableRow = [ keysOfTables[i].toString()  ];
        let currentTablesOrders = tables[keysOfTables[i]];
        for (let j = 0; j<sortedMeals.length; j++) {
            let currentMealType = sortedMeals[j];
            if (!currentTablesOrders[currentMealType]) {
                tableRow.push("0")
            } else {
                tableRow.push(currentTablesOrders[currentMealType].toString())
            }
        }
        displayTable.push(tableRow);
    }
    return displayTable;
};