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
