
function mousemover() {
    let circle = document.querySelector(".circlediv")

    window.addEventListener("mousemove", function (dets) {
        circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
mousemover()

function loginfnc() {
    //selections
    //areaselection 
    let loginsection = document.querySelector(".loginpart1")
    let loginsection2 = document.querySelector(".loginsection")

    //textselections
    let loginheadh1 = document.querySelector("#loginheadh1")

    //email
    let emailtext = document.querySelector("#emailtext")
    let emailinput = document.querySelector("#email")

    //password
    let passtext = document.querySelector("#textpass")
    let passwordinput = document.querySelector("#password")

    //confirmpass
    let confirmpasstext = document.querySelector("#confirmpass")
    let confirmpassinp = document.querySelector("#confirmpassinp")

    //buttons
    let parrentbtn = document.querySelector("#mainbutton")
    let childbtn = document.querySelector("#loginbutton")

    //defaultmailpass
    let pass = "areeb@123"
    let email = "areeb@gmail.com"


    let alreadyuser = false
    document.addEventListener("click", function (e) {
        if (e.target.id === "loginbutton") {
            if (alreadyuser) {
                loginsection.innerHTML = `
                <h3 id="loginhead">Welcome! Let's <br> get started.</h3>
                <div class="inputparentdiv">
                    <div class="inputsection">
                        <div class="inputs">
                            <h4 id ="emailtext">Email</h4>
                            <input id="email" type="text">
                        </div>
                    </div>
                    <div class="inputsection">
                        <div class="inputs">
                            <h4 id="textpass">Password</h4>
                            <input id="password" type="text">
                        </div>
                    </div>
                    <div class="inputsection">
                        <div class="inputs">
                            <h4 id="confirmpass"> Confirm Password</h4>
                            <input id="confirmpassinp" type="text">
                        </div>
                    </div>
                    <button id="mainbutton">Sign up</button>
                 <h6>Already have an account?  <span id="loginbutton">Log in</span></h6>
                </div>
             `
                alreadyuser = false
            } else {
                loginsection.innerHTML = `   
                <h3 id="loginhead">Welcome Back! Let's <br> get started.</h3>
                <div class="inputparentdiv">
                    <div class="inputsection">
                        <div class="inputs">
                            <h4 id ="emailtext">Email</h4>
                            <input id="email" type="text">
                        </div>
                    </div>
                    <div class="inputsection">
                        <div class="inputs">
                            <h4 id="textpass">Password</h4>
                            <input id="password" type="text">
                        </div>
                    </div> 
                    <button id="mainbutton">Log in</button>
                 <h6>Don't have an account?<span id="loginbutton">Sign In</span></h6>
                </div>
           `
                alreadyuser = true
            }
        }

        if (e.target.id === "mainbutton") {
            let emailinput = document.querySelector("#email")
            let passwordinput = document.querySelector("#password")
            let confirmpassinp = document.querySelector("#confirmpassinp")
            if (!alreadyuser) {
                if (emailinput.value.trim() === "" && passwordinput.value.trim() === "") {
                    alert("enter email and password")
                } else if (emailinput.value.trim() === "" && passwordinput.value.trim() !== "") {
                    alert("please enter a mail")
                } else if (emailinput.value.trim() !== "" && passwordinput.value.trim() === "") {
                    alert("please enter a password")
                } else if (confirmpassinp.value.trim() === "" && passwordinput.value.trim() !== "") {
                    alert("please enter your confirm password")
                } else if (confirmpassinp.value.trim() !== "" && passwordinput.value.trim() === "") {
                    alert("please enter your password first")
                } else if (confirmpassinp.value.trim() !== passwordinput.value.trim()) {
                    alert("please enter same password and confirm passowrd")
                } else if (emailinput.value.trim() !== "" && passwordinput.value.trim() !== "") {
                    pass = passwordinput.value.trim()
                    email = emailinput.value.trim()
                    loginsection.innerHTML = `   
                <h3 id="loginhead">Welcome Back! Let's <br> get started.</h3>
                <div class="inputparentdiv">
                    <div class="inputsection">
                        <div class="inputs">
                            <h4 id ="emailtext">Email</h4>
                            <input id="email" type="text">
                        </div>
                    </div>
                    <div class="inputsection">
                        <div class="inputs">
                            <h4 id="textpass">Password</h4>
                            <input id="password" type="text">
                        </div>
                    </div> 
                    <button id="mainbutton">Log in</button>
                 <h6>Don't have an account?<span id="loginbutton">Sign In</span></h6>
                </div>  `
                    alreadyuser = true
                }
            } else if (alreadyuser) {
                if (passwordinput.value.trim() === pass && emailinput.value.trim() !== email) {
                    alert("please enter correct mail")
                } else if (passwordinput.value.trim() !== pass && emailinput.value.trim() === email) {
                    alert("please enter correct password")
                } else if (emailinput.value.trim() === email && passwordinput.value.trim() === pass) {
                    loginsection2.style.display = "none"
                } else if (emailinput.value.trim() !== email && passwordinput.value.trim() !== pass) {
                    alert("both are incorrect")
                }
            }
        }
    })
}
loginfnc()