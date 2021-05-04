async function requestHandler(req,res){

try{

    const user=await User.findById(req.userId);
    const tasks=await tasks.findById(user.tasksId);
    tasks.completed=true;
    await tasks.save();
    res.send('task completed');
} catch(e)
{
    res.send(e);
}

  
}