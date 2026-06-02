
document.getElementById('form').addEventListener('submit',e=>{
e.preventDefault();
const body=`Name:${name.value}%0D%0AEmail:${email.value}%0D%0APhone:${phone.value}%0D%0ARequirement:${req.value}`;
window.location=`mailto:dilip1100@gmail.com?subject=Business Intelligence Demo Request&body=${body}`;
});
