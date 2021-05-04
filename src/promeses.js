function requestHandler(req,res){
    User.findById(req.userId, function(err,user){
       if (err){
           res.send(err);

       }else {
           task.findById(user.taskId,function(err,user){
              if(err){
                  return res.send(err);

              }
              else{
                  task.completed=true;
                  task.save(function(err){
                      if (err){
                          return res.send(err);
                      }
                      else{
                          res.send('task completd');
                      }
                  })
              }
           })
                         
       }
    })

}
 function requestHandler(req,res){
     User.findById(req.userId)
     .then(function(user){
         tasks.findById(user.taskId)
     })
     .then(function(task){
         task.completed=true;
         return tasks.save();
     })
     .them(function(){
         res.send('Tasks completed');
     })
     .catch(function(errors){
         res.send(errors)
     })
 }










