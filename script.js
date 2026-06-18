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
                    document.querySelector(".herosection").style.display = "block"
                } else if (emailinput.value.trim() !== email && passwordinput.value.trim() !== pass) {
                    alert("both are incorrect")
                }
            }
        }
    })
}
loginfnc()

function theme() {
    let ibtn = document.querySelector(".ri-sun-line")
    ibtn.addEventListener("click", function () {
        ibtn.classList.toggle("ri-sun-line");
        ibtn.classList.toggle("ri-moon-line");
        if (ibtn.classList.contains("ri-sun-line")) {
            document.querySelector(".herosection").style.backgroundColor = " #FFEFB5"
            document.querySelector("#navpart1h1").style.color = "black"
            document.querySelector("#navpart2i").style.color = "black"
            document.querySelector(".circlediv").style.backgroundColor = "black"
            document.querySelector(".bordersection").style.borderColor = "black"
            document.querySelector(".heronav").style.borderColor = "black"
            document.querySelector(".color").style.backgroundColor = "#44d7ce"
            document.querySelector(".color").style.boxShadow = "5px 5px 0 #000"
            document.querySelector(".white").style.boxShadow = "5px 5px 0 #000"
            document.querySelector(".borderitem1").style.borderRight = "2px solid black"
            document.querySelector(".borderitem1").style.borderLeft = "2px solid black"
            document.querySelector(".borderitem2").style.borderRight = "2px solid black"
            document.querySelector(".borderitem2").style.borderLeft = "2px solid black"
            document.querySelector("#borderitemh3").style.color = "black"
            document.querySelector("#borderitemh2").style.color = "black"
            document.querySelector(".addtasksection").style.backgroundColor = "#FFEFB5"
            document.querySelector(".addtasksection").style.borderColor = "black";
            document.querySelector("#addtaskh1").style.color = "black"
            document.querySelector(".closediv").style.backgroundColor = "rgb(2, 2, 2)"
            document.querySelector(".ri-close-line").style.color = "white"
            document.querySelector(".closediv").style.border = "2px solid white"
            document.querySelector("#add").style.backgroundColor = "#44D7CE"
            document.querySelector("#add").style.color = "#000"
            document.querySelector("#Name").style.color = "black"
            document.querySelector("#discrip").style.color = "black"




        } else if (ibtn.classList.contains("ri-moon-line")) {
            document.querySelector(".herosection").style.backgroundColor = "black"
            document.querySelector("#navpart1h1").style.color = "white"
            document.querySelector("#navpart2i").style.color = "white"
            document.querySelector(".circlediv").style.backgroundColor = "white"
            document.querySelector(".bordersection").style.borderColor = "white"
            document.querySelector(".heronav").style.borderColor = "white"
            document.querySelector(".color").style.backgroundColor = "white"
            document.querySelector(".color").style.boxShadow = "2px 2px 0 rgb(206, 194, 194)"
            document.querySelector(".white").style.boxShadow = "2px 2px 0 rgb(206, 194, 194)"
            document.querySelector(".borderitem1").style.borderRight = "2px solid white"
            document.querySelector(".borderitem1").style.borderLeft = "2px solid white"
            document.querySelector(".borderitem2").style.borderRight = "2px solid white"
            document.querySelector(".borderitem2").style.borderLeft = "2px solid white"
            document.querySelector("#borderitemh3").style.color = "white"
            document.querySelector("#borderitemh2").style.color = "white"
            document.querySelector(".addtasksection").style.backgroundColor = "black"
            document.querySelector(".addtasksection").style.borderColor = "white";
            document.querySelector("#addtaskh1").style.color = "white"
            document.querySelector(".closediv").style.backgroundColor = "white"
            document.querySelector(".ri-close-line").style.color = "black"
            document.querySelector(".closediv").style.borderColor = "black"
            document.querySelector("#add").style.backgroundColor = "white"
            document.querySelector("#add").style.color = "black"
            document.querySelector("#Name").style.color = "white"
            document.querySelector("#discrip").style.color = "white"

        }
    })
}
theme()

function addtaskbtn() {
    let taskbtnon = false

    let taskbtn = document.querySelector("#addtask")
    let tasksection = document.querySelector("#task")

    taskbtn.addEventListener("click", function () {
        if (!taskbtnon) {
            tasksection.style.display = "block"
            document.querySelector(".herosection").style.filter = "blur(8px)"
            document.querySelector(".herosection").style.filter = "blur(8px)"
            document.querySelector(".herosection").style.pointerEvents = "none"
            taskbtnon = true  // Yahan 'taskbtnon' ko true karo, na ki 'taskbtn' ko

        } else {
            tasksection.style.display = "none"

            taskbtnon = false // Wapas false kar do taaki agli baar click karne par khule
            document.querySelector(".herosection").style.filter = "blur(0px)"

        }
    })
    let xclose = document.querySelector(".ri-close-line")

    xclose.addEventListener("click", function () {
        tasksection.style.display = "none"
        taskbtnon = false // Wapas false kar do taaki agli baar click karne par khule
        document.querySelector(".herosection").style.filter = "blur(0px)"
        document.querySelector(".herosection").style.pointerEvents = "all"
    })
document.querySelector("#canceltaskbtn").addEventListener("click",function(){
       tasksection.style.display = "none"
        taskbtnon = false // Wapas false kar do taaki agli baar click karne par khule
        document.querySelector(".herosection").style.filter = "blur(0px)"
        document.querySelector(".herosection").style.pointerEvents = "all"
})

}
addtaskbtn()

function signoutbtn() {
    document.querySelector("#sectionsignout").addEventListener("click", function () {
        document.querySelector(".loginsection").style.display = "flex"
        document.querySelector(".herosection").style.display = "none"
    })
}
signoutbtn()


 