const gradeAnalyzer = (grades) => {
    const total = grades.reduce((total, grade) => total + grade, 0);
    const average = total / grades.length;
    const highest = Math.max(...grades);
    const lowest = Math.min(...grades);
    const passing = average >= 60;
  
    return {
      total: total,
      average: average, 
      highest: highest,
      lowest: lowest,
      passing: passing
    };
  };
  
const grades = [74, 23, 57, 90, 88, 100, 75, 68]

gradeAnalyzer(grades)
  