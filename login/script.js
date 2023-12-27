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
    
    else {
        // Show an alert if not matched
        alert("Please enter valid username or password !!!");
    }
}
function failed(){
    alert("Sorry ! Failed to Register !!!");
}