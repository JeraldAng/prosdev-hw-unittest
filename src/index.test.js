const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  test('For value O', () => {
	  // Arrange
	  const grade = 95;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("O - Outstanding");	
  })
  
  test('For value V', () => {
	  // Arrange
	  const grade = 93;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("V - Very Good");	
  })
  
  test('For value G', () => {
	  // Arrange
	  const grade = 86;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("G - Good");	  
  })
  
  test('For value S', () => {
	  // Arrange
	  const grade = 81;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("S - Satisfactory");	
  })
  
  test('For value N', () => {
	  // Arrange
	  const grade = 76;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("N - Needs Improvement");	
  })
  
  test('For value D', () => {
	  // Arrange
	  const grade = 70;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("D - Did not Meet Expectation");	
  })
  
  test('For equal value in edge of range', () => {
	  // Arrange
	  const grade = 74.99;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("D - Did not Meet Expectation");	
  })
  
  test('For more than 2 decimal places', () => {
	  // Arrange
	  const grade = 89.9912;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("G - Good");	
  })
  
  test('For invalid negative', () => {
	  // Arrange
	  const grade = -22;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("Invalid Grade");	
  })
  
  test('For invalid overflow', () => {
	  // Arrange
	  const grade = 202;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("Invalid Grade");	
  })
  
  test('For non-numerical inputs', () => {
	  // Arrange
	  const grade = "seventy-eight";

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("Invalid Grade");	
  })
  
  test('For null / blank value', () => {
	  // Arrange
	  const grade = null;

	  // Act
	  const result = gradeClassifier(grade);
	  
	  // Assert
	  expect(result).toEqual("Invalid Grade");	
  })
});
