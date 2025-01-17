// import regCheck from ../"regCheck"

describe('regCheck that can check if a registration number is for GP, L, EC, MP' , function(){
    it('registrationNumber should return true' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);

    });
    it('The registrationNumber should return false ' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        assert.equal(regCheck('5566 L', 'M'), false);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);


    });

});