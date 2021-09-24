const tests = [
    // true => Can be on the road; false => Can't be on the road
    [4, '2021-09-21', '05:00', true],
    [4, '2021-09-21', '07:00', false],
    [4, '2021-09-21', '08:00', false],
    [4, '2021-09-21', '19:00', true],
    [4, '2021-09-21', '21:30', true],
    [5, '2021-09-21', '05:00', true],
    [5, '2021-09-25', '08:24', true],
    [0, '2021-09-24', '18:15', false],
    [0, '2021-10-01', '08:15', null],
    [4, '2022-09-21', '07:00', null]
]

function runTests(tests) {
    for (let i=0; i < tests.length; i++) {
        let value = predict(tests[i][0], tests[i][1], tests[i][2]);

        if (value === tests[i][3]) {
            console.log(i + 1 + ' Success');
        } else {
            console.log(i + 1 + ' Fail');
        }
    }
}
