//Compute Function
function Com() {
    var n, x, b;
    n = document.getElementById("name").value.toUpperCase();
    b = f1.n1.value / (f1.n2.value * f1.n2.value);
    document.getElementById("bmi").innerHTML = "<hr color=brown>" + n + " your Body Mass Index (BMI) is " + b + ".";

    if (b <= 18.5) {
        document.getElementById("ex").innerHTML = "<hr color=brown><u>Precautions</u> :- You are in the category of Underweight.<br> So, Your body needs abundant amount of some healthy foods not any junk foods.<hr color=brown>";
    }
    else if (b >= 18.6 && b <= 23) {
        document.getElementById("ex").innerHTML = "<hr color=brown><b style=color:red>No precaution, because you are in the category of Normal human being.<br> It means that you are healthy but, it doesn't mean that you will eat junk foods & also do regular Surya namaskar for maintaining this good health.</b><br>Remember that, <u>Health is Wealth.</u><hr color=brown> ";
    }
    else if (b >= 23.1 && b <= 27.5) {
        document.getElementById("ex").innerHTML = "<hr color=brown><u>Precaution</u> :- You are in the category of Pre-Obese.<br>So, you need to do exercise at 6:00 am in the morning only for 45 minutes & don't eat junk foods. <hr color=brown> ";
    }
    else if (b > 27.6) {
        document.getElementById("ex").innerHTML = "<hr color=brown><u>Precaution</u> :- You are in the category of obese.<br>It means that you are too fat.<br>So, you need to do exercise & jogging at 6:00 am in the morning atleast 1 hours 30 minutes & don't eat junk foods. <hr color=brown> ";
    }
    
    if (f1.n2.value == "" && f1.n1.value == "") {
        alert("Please !! Enter all the details in textbox for calculating your Body Mass Index(BMI).");
        document.getElementById("bmi").innerHTML = "";
        document.getElementById("ex").innerHTML = "";
    }
    else if (f1.n2.value == "") {
        alert("Please !! Enter your height in textbox for calculating your Body Mass Index(BMI).");
        document.getElementById("bmi").innerHTML = "";
        document.getElementById("ex").innerHTML = "";
    }
    else if (f1.n1.value == "") {
        alert("Please !! Fill up your mass in textbox for calculating your Body Mass Index(BMI).");
        document.getElementById("bmi").innerHTML = "";
        document.getElementById("ex").innerHTML = "";
    }
}

//Clear All Function
function Clr() {
    document.getElementById("name").value = f1.n1.value = f1.n2.value =  "";
    document.getElementById("bmi").innerHTML = "";
    document.getElementById("ex").innerHTML = "";
}
