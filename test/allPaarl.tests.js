// import allPaarl from "../allPaarl"


describe('allPaarl', function() {
    it('should return all registration numbers for Paarl (CJ)', function() {
        let regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

        let expected = ['CJ 678-543', 'CJ 67890'];
        let result = allPaarl(regNumbers);
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
    });

    it('should return an empty array if there are no Paarl registration numbers', function() {
        let regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        let expected = [];
        let result = allPaarl(regNumbers);
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
    });

    it('should return all Paarl registration numbers even if there are spaces', function() {
        let regNumbers = ' CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

        let expected = ['CJ 123-456', 'CJ 678-543', 'CJ 345-678'];
        let result = allPaarl(regNumbers);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
    });
});
