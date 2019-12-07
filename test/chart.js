let Chart = artifacts.require('../Chart.sol')

contract('Chart Tests', function(entries){
    let chart
    let entry

    function toNumber(bigNumbers) {
        return bigNumbers.map(function(bigNumber){
            return bigNumber.toNumber()
        })
    }
    
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

    it('Should be able to add an entry',  async function() {
        const originalChartEentries = await chart.getEntries()
        const originalChartEentriesLength = originalChartEentries.length

        chart.addEntry(entry)
        const chartWithAddedEntries = await chart.getEntries()
        const chartWithAddedEntriesLength = chartWithAddedEntries.length

        expect(originalChartEentries).to.not.equal(chartWithAddedEntries)
        expect(originalChartEentriesLength + 1).to.equal(chartWithAddedEntriesLength)
    })
})

