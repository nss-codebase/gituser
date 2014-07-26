var prompt = require('sync-prompt').prompt;
var exec = require('child_process').exec;
var name, newName, email, newEmail, command;

exec('git config --get user.name', function(err, stdout, stderr){
  name = stdout.trim() ;
  exec('git config --get user.email', function(err2, stdout2, stderr2){
    email = stdout2.trim();
    newName = prompt('Name (' + name + '): ');
    name = (newName) ? newName : name;
    newEmail = prompt('Email (' + email + '): ');
    email = (newEmail) ? newEmail : email;

    command = 'git config --global user.name  "'+name+'";';
    command    += 'git config --global user.email "'+email+'";';

    exec(command, function(){
      console.log('~/.gitconfig changed:', command);
    });
  });
});
