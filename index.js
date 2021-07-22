const {uniq, flattenDeep} = require('lodash');
console.log(
    uniq(
    flattenDeep([[[2]], [3, 4], [[[2], 6]]])
    )
)

const faker = require('faker');
console.log( faker.name.firstName() + ' ' + faker.name.lastName())

const { nanoid } = require('nanoid');
console.log(nanoid(10));

const bigInt = require('big-integer');
console.log(bigInt('999').plus('2').toString());

