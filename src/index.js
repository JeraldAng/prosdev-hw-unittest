const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
	if (typeof grade !== 'string' && grade !== null){
		grade = grade.toFixed(2);
		  if (grade >= 95 && grade <= 100)
			return "O - Outstanding";
		  else if (grade >= 90 && grade <= 94.99)
			return "V - Very Good";
		  else if (grade >= 85 && grade <= 89.99)
			return "G - Good";
		  else if (grade >= 80 && grade <= 84.99)
			return "S - Satisfactory";
		  else if (grade >= 75 && grade <= 79.99)
			return "N - Needs Improvement";
		  else if (grade >= 0 && grade <= 74.99)
			return "D - Did not Meet Expectation";
		  else
			return "Invalid Grade";
	}
	else	
		return "Invalid Grade";
  }
}

module.exports = functions;
