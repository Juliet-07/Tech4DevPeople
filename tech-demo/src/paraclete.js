// this is just a coloraboration
test('postdepartments', async ({ request }) => {
  const response = await request.post ('http://localhost:5000/departments',{
    headers:{'content-Type':'application/json'},
    data:{"name":"Product Design"}
  })
  const obj = await response.json()
  console.log(obj)
})