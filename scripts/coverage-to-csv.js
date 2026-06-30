// Converts Jest's coverage-summary.json into a CSV report
const fs = require('fs');
const path = require('path');

const summaryPath = path.join(__dirname, '..', 'coverage', 'coverage-summary.json');
const outputPath = path.join(__dirname, '..', 'coverage-report.csv');

if (!fs.existsSync(summaryPath)) {
  console.error('coverage-summary.json not found. Run "npm test" first.');
  process.exit(1);
}

const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
const rows = ['file,statements_pct,branches_pct,functions_pct,lines_pct'];

for (const [file, data] of Object.entries(summary)) {
  rows.push(
    `${file},${data.statements.pct},${data.branches.pct},${data.functions.pct},${data.lines.pct}`
  );
}

fs.writeFileSync(outputPath, rows.join('\n'));
console.log(`Coverage CSV written to ${outputPath}`);
