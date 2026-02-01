app.get('/employees', async(req, res)=>{
    const employees = await Employee.findAll({
        include: [
            {model:Department},
            {model:LeaveRequest}
        ]
    })
});

app.listen(3000, ()=> console.log('Server is running now'))