const days = {
    1: 'MONDAY',
    2: 'TUESDAY',
    3: 'WEDNESDAY',
    4: 'THURSDAY',
    5: 'FRIDAY'
}

const rules = {
    prohibition: {
        MONDAY: [0,1,2,3],
        TUESDAY: [2,3,4,5],
        WEDNESDAY: [4,5,6,7],
        THURSDAY: [6,7,8,9],
        FRIDAY: [0,1,8,9]
    },
    expiration: 'Sep 30, 2021',
    hours: ['07:00','19:00']
}

const messages = {
    noGo: 'This licence plate can not be on the road',
    canGo: 'This licence plate can be on the road',
    noRulesYet: 'Rules for this date are yet to be set'
}
