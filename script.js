

async function sendRequest() {
  const response = await fetch("/pifilling", {
    method: "post",
    query: "this is a message"
  })
  if(response.status === 201){
    console.log(response.json)
  } else{
    console.log("It failed.")
  }
}
