console.log("Hello wikipedia");


// load the airtable library
var Airtable = require('airtable');

// configure the site to point to your Airtable
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyUllAIAD6srH2Zj'
});
var base = Airtable.base('appl79cJ0lmQgJ5It');


// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
base('Hello').select({
    // If you want to sort the records, include that here:
    //  sort: [
    //     {field: 'Title', direction: 'asc'}
    // ],
}).eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable, 
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
    console.log("gotPageofRows()");

    rows.push(...records);

    fetchNextPage();
}



// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
    console.log("gotAllRows()");

    // first, if there's an error we're going to log that.
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }

    // if no error, we're going to run two more functions.
    consoleLogRows();
    // showRows();
    var random_row = rows[Math.floor(Math.random()*rows.length)];
    showRow(random_row);
}

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    
    console.log("consoleLogRows()");
    
    rows.forEach((row) => {
        console.log("Row:", row);
    });

}

var myArray = [];

// showRows is what puts the content onto the HTML page
function showRows() {
    console.log("showRows()");
    rows.forEach((row) => {
        
        const h2 = document.createElement("h2");
        h2.innerText = row.fields.Ftime;
        document.body.appendChild(h2);

        const why = document.createElement("div");
        why.innerText = row.fields.Wtime;
        why.classList.add("headline");
        document.body.appendChild(why);

        // uncomment this code to add the images from the table.
        if (row.fields.Image) {
            const image = document.createElement("img");
            image.src = row.fields.Image[0].url;
            document.body.appendChild(image);

            // $("body").css("background-image", "url('"+  row.fields.Image[0].url +"')");
        }
       

        // myArray.push(row.fields.Fav-time);

    //  console.log("FUNCTION 1 is calling" + myArray);
  
    // var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
    // document.body.innerHTML = randomItem;
  
  

        // uncomment this code to add the description column from the table.
        // const div = document.createElement("div");
        // div.innerText = row.fields.Description;
        // document.body.appendChild(div);

        
    })
}

function showRow(row) {
        // const time = document.getElementById('time');
        // time.innerText = row.fields.Ftime;

        console.log("showRow()");

        const why = document.getElementById('why');
        why.innerText = row.fields.Wtime;

        // uncomment this code to add the images from the table.
        if (row.fields.Image) {
            // const image = document.getElementbyId("image");
            // image.src = row.fields.Image[0].url;

            $("body").css("background-image", "url('"+  row.fields.Image[0].url +"')");
        }
}

setInterval(function(){
    var random_row = rows[Math.floor(Math.random()*rows.length)];
    showRow(random_row);
}, 5500);