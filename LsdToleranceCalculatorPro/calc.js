const doses = [];

function addDoseToList(dose, days){
    doses.push({
        'dose': dose,
        'days': days
    });
}

function calculate() {
    //validate input
    if(!isNormalInteger($('#inputDesiredDose').val())){
        $('#alert-only-number-desired-dose').fadeIn().delay(3000).fadeOut();

        return;
    }
    

    var desiredDose = parseFloat($('#inputDesiredDose').val());

    var lineData = lineChart.data.datasets[0].data;

    lineData.splice(0, lineData.length);

    for(var i=0; i<32; i++){
        var calcDose = 0;
        doses.forEach(dose => {
            if(dose.days + i > 32){
                return;
            }

            // calcDose += ((280.059565 * (Math.pow(dose.days + i, -0.412565956))) * (parseFloat(dose.dose) / 100) - dose.dose);
            calcDose += ((280.059565 * (Math.pow(dose.days + i, -0.412565956))) * (parseFloat(dose.dose) / 100) - dose.dose);
            if(calcDose <= 0){
                calcDose = 0;
            }
        });
        

        lineData.push(calcDose + desiredDose);
    }

    lineChart.update();

    /*var dose = ((280.059565 * (Math.pow(n, -0.412565956))) * (x / 100) - x);
    var dose1 = parseFloat(y) + parseFloat(dose);
    var dose2 = parseFloat(y) - parseFloat(dose);
    if (dose2 < 0) {
        document.getElementById("amt2").innerHTML = "If you take a <strong>" + y + "μg</strong> dose, it will have very little to no effectiveness at all.";
    } else {
        document.getElementById("amt2").innerHTML = "If you take a <strong>" + y + "μg</strong> dose, it will have the effectiveness of a <strong>" + dose2 + "μg</strong> dose.";
    }
    document.getElementById("amt").innerHTML = "To feel the same as your desired dose, you would need to take <strong>" + dose1 + "μg.</strong>";*/
}
