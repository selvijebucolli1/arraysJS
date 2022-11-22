/*
// 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether 
//it is bought or not. Write a few functions for working with this array. 

// Display the entire list, so that the not yet purchased items go before the bought ones. 
// Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in 
//the existing purchase, not in a new one. 
// Purchasing a product. The function accepts the name of a product and marks it as bought.

let groceryList = [
{
    name:'milk',amount:24, bought:false
},
{
    name:'coffee',amount:100, bought:true
},
{
    name:'apples',amount:40, bought:true
},
{
    name:'cereal',amount:9, bought:false
},
  ];

  document.write(`groceryList:<br>`);
for(let i=0;i<groceryList.length;i++){
    document.write(`${groceryList[i].name},${groceryList[i].amount},${groceryList[i].bought} <br>`);

}

function add(name,amount){
    let flag=false;
    for(let i=0;i<groceryList.length;i++){
        if(name == groceryList[i].name){
            groceryList[i].amount += amount;
            flag=true;
            break;
        }
    }
    if(!flag){
        groceryList.push( {name:name,amount:amount,bought:false});
    }
}
add('bananas',30);

document.write(`<br> Lista e re:<br>`);
for(let i=0;i<groceryList.length;i++){
    document.write(`${groceryList[i].name},${groceryList[i].amount},${groceryList[i].bought} <br>`);
}


function purchase(name){
    for(let i=0;i<groceryList.length;i++){
        if(name == groceryList[i].name){
            groceryList[i].bought=true;
        }
    }
}
purchase(milk); // ?? milk undefined
*/

//2.Create an array that describes a shop receipt. Each element of the array
//consists of the name of the product, an amount bought, and price per item. 
//Write the following functions. 
// Print the receipt out on the screen.
// Counting the sum of the purchase.
// Extracting the most expensive item on the receipt.
// Counting an average item price on the receipt.

let receipt = [
    {
        name:'milk',amount:24, price:2
    },
    {
        name:'coffee',amount:100, price:1
    },
    {
        name:'apples',amount:40, price:3
    },
    {
        name:'cereal',amount:9, price:4
    },
      ];
      
  document.write(`Receipt:<br>`);
  for(let i=0;i<receipt.length;i++){
      document.write(`${receipt[i].name},${receipt[i].amount},${receipt[i].price} <br>`);
  
  }
  function total(){
    let sum=0;
    for(let i=0;i<receipt.length;i++){
        sum+=receipt[i].price;
    }
    document.write("Totali:" + sum);
  }
  total();

  function mostExpensiveItem(){
    let max=0;
    for(let i=0;i<receipt.length;i++){
       if(receipt[i].price>max){
        max=receipt[i].price;
       }
    }
    console.log(max);
  }
  mostExpensiveItem();
  
  function averageItem(){
    let sum=0;
    for(let i=0;i<receipt.length;i++){
        sum+=receipt[i].price;
    }

    document.write("<br>Average:" + sum/receipt.length);
  }
  averageItem();


  //3. Create an array of css-styles (color, font size, alignment, underline etc.)
//    Each element of the array is an object consisting of two properties: style name 
//    and style value, Write a function that accepts the style array and a text and
//    puts out this text via document.write() in the <p></p> tags, adding the style
//     attribute with all the styles in the array to the opening tag.
      
let cssStyles = [
    {
        color:'color',
        color_value:'green'
    },
    {
        font_size:'font-size',
        font_value:12
    },
    {
        align_self:'align-self',
        align_value:'center'
    },
];

function style(cssStyles,text) {
    document.write(`<p style="${cssStyles.color}:${cssStyles.color_value};${cssStyles.font_size}:${cssStyles.font_value}px;${cssStyles.align_self}:${cssStyles.align_value};${cssStyles.font_width}:${cssStyles.width_value}px;">${text}</p>`)
}
style(cssStyles,'bllabllablla');


// 4. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it.
// Display all the classrooms.
// Display all the classrooms for a given faculty.
// Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
// A function for sorting all the classrooms by number of seats.
// A function for sorting all the classrooms by name in alphabetical order.


let classes = [
    { 
        name: 'Java',
        seats: 60,
        faculty: 'FIEK'
    },
    {
        name: 'Elektronika',
        seats: 120,
        faculty: 'FIEK'
    },
    {
        name: 'Python',
        seats: 50,
        faculty: 'FSHMN'
    },
  
] 

  
document.write(`Classrooms:<br>`);
for(let i=0;i<classes.length;i++){
    document.write(`${classes[i].name},${classes[i].seats},${classes[i].faculty} <br>`);
}

function displayByFaculty(faculty){
    classes.forEach(classes => {
        if(classes.faculty == faculty){
            document.write(`<br>Classes in ${faculty} are: ${classes.name}`); 
        }
    });
}
displayByFaculty('FIEK');




