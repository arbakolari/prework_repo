// JavaScript source code
var nameArray = ["Retta", "Vern", "Michaele", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell"];
var longest_name ="1";
var answer;
for (var i = 0; i < nameArray.length; i++) {
    if (nameArray[i].length > longest_name.length) {
        longest_name = nameArray[i]
    }
}

answer = longest_name;
console.log(answer);