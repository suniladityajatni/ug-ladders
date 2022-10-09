var form = document.querySelector("form");
function handleForm(event)
{ 
    event.preventDefault();
    const cf_handle=document.getElementById("handle").value;
    console.log(cf_handle);
    

} 
form.addEventListener('submit', handleForm);
