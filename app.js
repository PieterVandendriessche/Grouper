var groups = [3,3,2,2,2,1];
var content = null;
var alphabet = ['A','B','C','D','E','F'];
var chosenNumbers = [];
var names = ['Nathan','Delphine','Heavenly','Jorn','Alexander','Sander','Keanu','Dries','Dieter','Isabel','Kain','Mathias','Febe'];


function generateRandomNumber(){
do
{
 var number  = Math.floor(Math.random() * 13) + 1;
}while(chosenNumbers.includes(number));
 chosenNumbers.push(number);
 return number;
}


function generateGroup(length){
    var group = [length];
    for(var i=0;i<length;i++){
    group[i]=generateRandomNumber();
    }
    return group;
}


window.onload = () =>  {
     content = document.getElementById('content');
     document.getElementById('actionBtn').onclick = function(){
        content.innerHTML = '';
        chosenNumbers = [];
        for(var i=0;i<groups.length;i++){
            generateTable(i,groups[i])
}
     }
     document.getElementById('hideBtn').onclick = () => content.innerHTML = '';

};

function generateTable(groupNumber,numbersLength){
    var title = document.createElement('h2')
    title.innerText = 'Groep ' + alphabet[groupNumber]
    content.appendChild(title);
    var table = document.createElement('table');
    var tableRow = document.createElement('tr');
    var numbersGroup = generateGroup(numbersLength);
    numbersGroup.forEach(element => {
        var tableElement = document.createElement('td');
        tableElement.innerText = names[element- 1];
        tableRow.appendChild(tableElement);
    });
    table.appendChild(tableRow);
    content.appendChild(table);




};
