// import allFromTown from "../allFromTown

describe('allFromTown that takes a string parameter with registration numbers', function() {
    it('should return all registration numbers for the specified town', function() {
        let regNumbers = 'CL 124,CY 567,CL 345, CJ 456,CL 341';
        let expected = ['CL 124', 'CL 345', 'CL 341'];
        let result = allFromTown(regNumbers, 'CL');
        assert.deepEqual(result, expected);
    });

    it('should return registration numbers for a different town code', function() {
        let regNumbers = 'CL 124,CY 567,CL 345, CJ 456,CL 341';
        let expected = ['CJ 456'];
        let result = allFromTown(regNumbers, 'CJ');
        assert.deepEqual(result, expected);
    });

    it('should return an empty array if there are no registration numbers for the specified town', function() {
        let regNumbers = 'CL 124,CY 567,CL 345, CJ 456,CL 341';
        let expected = [];
        let result = allFromTown(regNumbers, 'CF');
        assert.deepEqual(result, expected);
    });
});



