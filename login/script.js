const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

     // Function to redirect to dashboard.html
     function admin() {
        window.location.href = "admin/index.html";
    }
        function user(){
            window.location.href = "user/index.html";
        }
        function nagrikmusu(){
            window.location.href="docs/sandhya_citizenship.pdf";
        }
        function nagrikpmc(){
            window.location.href="docs/parbhu_citizenship.pdf";
        }
// Function to check credentials and redirect
function checkCredentialsAndRedirect() {
    // Get the input values
    const email = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    // Check if email and password match the specified values
    if (email === "parbhu@admin.com" && password === "sandhya@023"
        ) {
        // Redirect to dashboard.html if matched
        admin();
    } 
    else if (email === "sandhya@user.com" && password === "sandhya@023"){
        user()
    }
    else if(email=== "9766303031" && password==="Sandhya@002"){
        nagrikmusu()
    }
    else if(email=== "9848612744" && password==="sandhayaa"){
        nagrikmusu()
    }
    else if(email=== "9804430709" && password==="Sandhya@002"){
        nagrikpmc()
    }
    else if(email==="" || password===""){
        alert("Enter valid username and password !!!");
    }
    else {
        // Show an alert if not matched
        alert("Wrong Candidate !!!");
    }
}
function failed(){
    alert("Sorry ! Failed to Register !!!");
}
