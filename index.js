var prompt = require('sync-prompt').prompt;
var exec = require('child_process').exec;

var name  = prompt('Name (Bob Smith): ');
var email = prompt('Email (bob.smith@gmail.com): ');

var command = 'git config --global user.name  "'+name+'";';
command    += 'git config --global user.email "'+email+'";';

exec(command);

console.log('~/.gitconfig changed:', command);

