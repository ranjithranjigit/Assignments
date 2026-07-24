function gradeCalculation(score){
    let grade = ""
    switch(true){
        case (score>=80):
            grade = "A"
            break;
        case (score>=60 && score<=40):
            grade = "B"
            break;
        // default:
        //     grade = "C"
        //     break;
    }
    return grade
}
gradeCalculation (50)