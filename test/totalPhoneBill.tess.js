// import totalPhoneBill from "../totalPhoneBill"

describe('totalPhoneBill that takes in a string calls made and sms sent', function () {
    it('should return R7.45', function () {
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });

    it('should return R3.40', function () {
        assert.equal(totalPhoneBill('call, sms'), 'R3.40');
    });

    it('should return R1.30', function () {
        assert.equal(totalPhoneBill('sms, sms'), 'R1.30');
    });
});
