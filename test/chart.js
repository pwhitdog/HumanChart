let Chart = artifacts.require('../Chart.sol')

contract('Chart Tests', function(entries){
    let chart
    let entry
    
    beforeEach(async function(){
        chart = await Chart.new("Test", "User")
        entry = entries[0]
    })

    it('Should create initial chart with name.', async function (){
        const fname = await chart.getFirstName()
        const lname = await chart.getLastName()
        expect(fname).to.equal("Test")
        expect(lname).to.equal("User")
    })
})

