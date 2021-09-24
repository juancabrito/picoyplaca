const tests = [
    // true => Can be on the road; false => Can't be on the road
    ['PBQ1234', '2021-09-21', '05:00', true],
    ['PBQ1234', '2021-09-21', '07:00', false],
    ['PBQ1234', '2021-09-21', '08:00', false],
    ['PBQ1234', '2021-09-21', '19:00', false],
    ['PBQ1234', '2021-09-21', '21:30', true],
    ['PBQ1235', '2021-09-21', '05:00', true],
    ['PBQ1235', '2021-09-25', '08:24', true],
    ['PBQ1230', '2021-09-24', '18:15', false],
    ['PBQ1230', '2021-10-01', '08:15', null],
    ['PBQ1234', '2022-09-21', '07:00', null],
    ['P3212A4', '2022-09-21', '07:00', 'invalidPlate']
]

function runTests(tests) {
    for (let i=0; i < tests.length; i++) {
        let value = predict(parseInt(tests[i][0].slice(tests[i][0].length - 1)), tests[i][1], tests[i][2]);

        if (value === tests[i][3]) {
            console.log(i + 1 + ' Success');
        } else {
            console.log(i + 1 + ' Fail');
        }
    }
}
