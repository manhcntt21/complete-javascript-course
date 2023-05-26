'use-strict';
function convertToCamelCase(str) {
  const data = str.split(' ');
  const result = [];
  for (e of data) {
    let i = e.indexOf('_');
    const e1 = e.toLowerCase().replace(i + 1, e[i + 1].toUpperCase());

    // e1.replace(i + 1, e1[i + 1].toUpperCase());

    result.push(e1);
  }
  // console.log(result);
}

const str =
  'underscore_case first_name Some_Variable calculate_AGE delayed_departure';
// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;
convertToCamelCase(str);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    // console.log(i, row);
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
