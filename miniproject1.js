let sum = 0;

function calculateGPA(...grades) {
    // console.log(grades);
    for (grade in grades) {
        // console.log(grade);
        // console.log(grades[grade]);

        if (grades[grade] === 'A') {
            sum += 100;
        } else if (grades[grade] === 'B') {
            sum += 80;
        }else if (grades[grade] === 'C') {
             sum += 70;
        }else if (grades[grade] === 'D') {
             sum += 60;
        }
    }

        // console.log(sum);
    let average = sum / grades.length;

    if (average >= 90) {
        average = 'A';
    } else if (average >= 80) {
            average = 'B';
    }else if (average >= 70) {
            average = 'C';
    }else if (average >= 60) {
            average = 'D';
    }

    return console.log(average);
}

calculateGPA('A','B','D','C');