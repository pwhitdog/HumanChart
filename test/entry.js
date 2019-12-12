let Entry = artifacts.require('../Entry.sol')

contract('Entry Tests', function(meds) {
    let entry

    beforeEach(async function() {
        entry = await Entry.new()
    })

    it('Should be able to set and get the decription.', async function () {
        const originalDescription = await entry.getDescription()
        await entry.setDescription('TEST')
        const newDescription = await entry.getDescription()

        expect(originalDescription).to.not.equal(newDescription)
        expect(newDescription).to.equal('TEST')
    })
})