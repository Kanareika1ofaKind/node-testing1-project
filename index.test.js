const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
    // test('[2] returns a copy, leaving the original object intact', () => {})

    test('[2] returns a copy, leaving the original object intact', () => {
        const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
        const original = { ...input } // Create a copy of the original object
        const actual = utils.trimProperties(input)
        expect(actual).not.toBe(input) // Ensure the returned object is a different reference
        expect(actual).toEqual({ foo: 'foo', bar: 'bar', baz: 'baz' }) // Ensure the properties are trimmed
        expect(input).toEqual(original) // Ensure the original object remains unchanged
    })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
    // test('[3] returns an object with the properties trimmed', () => {})
    test('[3] returns an object with the properties trimmed', () => {
        const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
        const actual = utils.trimPropertiesMutation(input)
        expect(actual).toBe(input)

    })
  // test('[4] the object returned is the exact same one we passed in', () => {})
})

describe('[Exercise 3] findLargestInteger', () => {
    // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
    test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const expected = 3
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(expected)
    })
})

describe('[Exercise 4] Counter', () => {
    let counter
    beforeEach(() => {
        counter = new utils.Counter(3) // each test must start with a fresh couter
    })
    // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
    test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
        const expected = 3
        const actual = counter.countDown()
        expect(actual).toBe(expected)
    })
    // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
    test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
        counter.countDown() // First call
        const expected = 2
        const actual = counter.countDown() // Second call
        expect(actual).toBe(expected)
    })
    // test('[8] the count eventually reaches zero but does not go below zero', () => {})
    test('[8] the count eventually reaches zero but does not go below zero', () => {
        counter.countDown() // First call
        counter.countDown() // Second call
        const expected = 1
        const actual = counter.countDown() // Third call
        expect(actual).toBe(expected)
        const zeroCount = counter.countDown() // Fourth call, should reach zero
        expect(zeroCount).toBe(0)
        const belowZeroCount = counter.countDown() // Fifth call, should still be zero
        expect(belowZeroCount).toBe(0)
    })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
    // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
    test('[9] the FIRST call of seasons.next returns "summer"', () => {
        const expected = 'summer'
        const actual = seasons.next()
        expect(actual).toBe(expected)
    })
    // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
    test('[10] the SECOND call of seasons.next returns "fall"', () => {
        seasons.next() // First call
        const expected = 'fall'
        const actual = seasons.next() // Second call
        expect(actual).toBe(expected)
    })
    // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
    test('[11] the THIRD call of seasons.next returns "winter"', () => {
        seasons.next() // First call
        seasons.next() // Second call
        const expected = 'winter'
        const actual = seasons.next() // Third call
        expect(actual).toBe(expected)
    })
            
    // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
    test('[12] the FOURTH call of seasons.next returns "spring"', () => {
        seasons.next() // First call
        seasons.next() // Second call
        seasons.next() // Third call
        const expected = 'spring'
        const actual = seasons.next() // Fourth call
        expect(actual).toBe(expected)
    })
    // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
    test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
        seasons.next() // First call
        seasons.next() // Second call
        seasons.next() // Third call
        seasons.next() // Fourth call
        const expected = 'summer'
        const actual = seasons.next() // Fifth call
        expect(actual).toBe(expected)
    })
    // test('[14] the 40th call of seasons.next returns "spring"', () => {})
    test('[14] the 40th call of seasons.next returns "spring"', () => {
        for (let i = 0; i < 39; i++) {
            seasons.next() // Call next 39 times
        }
        const expected = 'spring'
        const actual = seasons.next() // 40th call
        expect(actual).toBe(expected)
    })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
    // test('[15] driving the car returns the updated odometer', () => {})
    test('[15] driving the car returns the updated odometer', () => {

        const distance = 60 // Distance to drive
        const expectedOdometer = 60 // Expected odometer after driving
        const actualOdometer = focus.drive(distance) // Drive the car
        expect(actualOdometer).toBe(expectedOdometer) // Check if odometer is updated correctly

    })
    // test('[16] driving the car uses gas', () => {})

    test('[16] driving the car uses gas', () => {

        const initialTank = focus.tank; // Initial fuel in the tank
        const distance = 60; // Distance to drive
        focus.drive(distance); // Drive the car
        const expectedTank = initialTank - (distance / focus.mpg); // Calculate expected fuel after driving
        expect(focus.tank).toBeCloseTo(expectedTank, 1); // Check if tank is updated correctly

    })

    // test('[17] refueling allows to keep driving', () => {})

    test('[17] refueling allows to keep driving', () => {
        const initialTank = focus.tank; // Initial fuel in the tank
        const distance = 60; // Distance to drive
        focus.drive(distance); // Drive the car
        const gallonsToAdd = 10; // Gallons to refuel
        focus.refuel(gallonsToAdd); // Refuel the car
        const expectedTankAfterRefuel = initialTank - (distance / focus.mpg) + gallonsToAdd; // Calculate expected fuel after refueling
        expect(focus.tank).toBeCloseTo(expectedTankAfterRefuel, 1); // Check if tank is updated correctly

    })
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
    // test('[19] resolves true if passed an even number', () => {})
    test('[19] resolves true if passed an even number', () => {
        return utils.isEvenNumberAsync(4).then(result => {
            expect(result).toBe(true); // Check if the promise resolves to true for an even number
        });
    })
    // test('[20] resolves false if passed an odd number', () => {})
    test('[20] resolves false if passed an odd number', () => {
        return utils.isEvenNumberAsync(5).then(result => {
            expect(result).toBe(false); // Check if the promise resolves to false for an odd number
        });
    })
})
