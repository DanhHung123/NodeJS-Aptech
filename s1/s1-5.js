var readline = require('readline'),
    rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt("--> ");
rl.prompt();

var toDoList = [];

var command = {
    ls: function() {
        console.log(toDoList);
    },
    add: function(item) {
        toDoList.push(item);
    },
    rm: function(item) {
        console.log("I want to remove", item,"!!");
    }
}

rl.on('line',function(line) {
    var words = line.split(' '),
        command = words.shift(),
        argsStr = words.join(' ');
    
    command[command](argsStr);
    

    rl.prompt();
})