const sheetID = "13i1FGpFM3MX1LSA7AydMsd4xo7ZGmqGrgUbM-HQmOMU";
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'pokedex';
const qu = 'Select *';
const query = encodeURIComponent(qu);
const invocation = new XMLHttpRequest();
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded', init);
let randNum;

const output = document.querySelector('.output');

function callOtherDomain() {
    if (invocation) {
      invocation.open("GET", url, true);
      invocation.withCredentials = true;
      invocation.onreadystatechange = handler;
      invocation.send();
    }
  }

//button that takes in a random number and outputs the result to the html side
document.getElementById("generateButton").onclick = function() {
    randNum = Math.floor(Math.random() * data.length);

    document.getElementById("xlabel").innerHTML = data[randNum].name + " " + data[randNum].type;
}

//function for turning the google spreadsheet into an array
function init() {
    console.log('ready');
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
        //console.log(jsData);
        const colz = [];
        jsData.table.cols.forEach((heading)=>{
            if(heading.label) {
            colz.push(heading.label.toLowerCase().replace(/\s/g,''));
            }
        })
        jsData.table.rows.forEach((main)=>{
            //console.log(main);
            const row = {};
            colz.forEach((ele,ind)=>{
                //console.log(main);
                row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
            })
            data.push(row);
        })
        //console.log(data);
    })
}

//need a way to reduce the list of megas and alternate forms
//either leave regional veriants alone or have a way for the button/output to say if the pokemon is a regional veriant or not.
