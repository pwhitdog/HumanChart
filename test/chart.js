let Chart = artifacts.require('../Chart.sol')

contract('Chart Tests', function(entries){
    let chart
    let entry
    let originalChartEentries 

    beforeEach(async function(){
        chart = await Chart.new("Test", "User")
        entry = entries[0]
        originalChartEentries = await chart.getEntries()
    })

    it('Should create initial chart with name.', async function (){
        const fname = await chart.getFirstName()
        const lname = await chart.getLastName()
        expect(fname).to.equal("Test")
        expect(lname).to.equal("User")
    })

    it('Should be able to add an entry', async function() {
        const originalChartEentriesLength = originalChartEentries.length

        chart.addEntry(entry)
        const chartWithAddedEntries = await chart.getEntries()
        const chartWithAddedEntriesLength = chartWithAddedEntries.length

        expect(originalChartEentries).to.not.equal(chartWithAddedEntries)
        expect(originalChartEentriesLength + 1).to.equal(chartWithAddedEntriesLength)
    })

    it('Should be able to retrieve all entries', async function() {
        for (let i = 0; i < 5; i++) {
            chart.addEntry(entry)
        }
        const chartWithAddedEntries = await chart.getEntries()
        const chartWithAddedEntriesLength = chartWithAddedEntries.length

        expect(originalChartEentries).to.not.equal(chartWithAddedEntries)
        expect(chartWithAddedEntriesLength).to.equal(5)
    })

    it('Should be able to retrieve one entry', async function() {
        chart.addEntry(entry)
        chart.addEntry(entries[1])

        const firstEntry = await chart.getEntry(0)
        const secondEntry = await chart.getEntry(1)

        expect(firstEntry).to.equal(entry)
        expect(secondEntry).to.not.equal(entry)
        expect(secondEntry).to.equal(entries[1])
    })
})

