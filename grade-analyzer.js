const gradeAnalyzer = (grades) => {
    const total = grades.reduce((total, grade) => total + grade, 0);
    const average = total / grades.length;
    const roundedAverage = average.toFixed(1)
    const highest = Math.max(...grades);
    const lowest = Math.min(...grades);
    const passing = average >= 60;
  
    return {
      total: total,
      average: parseFloat(roundedAverage), 
      highest: highest,
      lowest: lowest,
      passing: passing
    };
  };
  
  const runGradeAnalyzer = () => {
    const input = prompt("Enter any number between 0-100, separated by commas (e.g. 74, 10, 56): ")
    const grades = input.split(',').map(num => parseFloat(num.trim()));
    if (grades.some(isNaN)) {
      alert("Invalid input. Please enter numbers separated by commas.");
      return;
    }
    
    const results = gradeAnalyzer(grades);
    console.log(results)
    alert(`Total: ${results.total}, Average: ${results.average}, Highest Score: ${results.highest}, Lowest Score: ${results.lowest}, Passing: ${results.passing}`);
}