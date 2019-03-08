function composeChart(name, age, weight, heightCm) {

    const calcBMI = (weight, heightM) => {
        return Math.round(weight / heightM ** 2)
    }

    const generateStatus = (bmi) => {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese'
        }
    }

    const bmi = calcBMI(weight, heightCm / 100)
    
    let chart = {
        name,
        personalInfo: {
            age,
            weight,
            height: heightCm
        },
        BMI: bmi,
        status: generateStatus(bmi)
    }

    if (chart.status === 'obese') {
        chart.recommendation = 'admission required';
    }

    return chart;
}

console.log(composeChart("Peter", 29, 75, 182));

console.log();

