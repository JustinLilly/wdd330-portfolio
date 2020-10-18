let age = document.getElementById("age").value;

function amIOldEnough(age){
    
    if (age < 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}
amIOldEnough(age);
    
function amIOldEnough2(age){
    console.log(age);
    if (age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.';
    } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
    } else {
        console.log(`In the else with ${age}`);
        return 'Yep, come on in!';
    }
}

amIOldEnough2(age);
    