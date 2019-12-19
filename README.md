# reportingjs
Export your data from browsers in different formats with few lines of codes!

## Usage
`yarn install reportingjs` or `npm install reportingjs`
```javascript
import report from 'reportingjs';

// bind this function to your button
// data: any[][]
// filename: string
const triggerSaveCSV = (data, filename) => report.createCSVExporterElement(data, filename).click();
```

## Contribution
Welcome any contributions.

## License
[MIT](https://github.com/jjkoh95/reportingjs/blob/master/LICENSE)
