describe('API tests', () => {
    it('GET API test', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/1').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('bravo') // this will fail often as the name is chnaging dynamically by executing the response
        })
    })

    it('POST API test', () => {
        const requestBody = {
            "id": 10000001,
            "category": {
                "id": 11110001,
                "name": "pet_1"
            },
            "name": "dog",
            "status": "available"
        }
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', requestBody).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(10000001)
            expect(response.body.category.id).to.eq(11110001)
            expect(response.body.category.name).to.eq('pet_1')
            expect(response.body.name).to.eq('dog')
            expect(response.body.status).to.eq('available')
        })
    })
    it('POST API test same test from above with values used from json file', () => {
        const requestBody = require('./models/createPet.json');
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', requestBody).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(10000001)
            expect(response.body.category.id).to.eq(11110001)
            expect(response.body.category.name).to.eq('pet_1')
            expect(response.body.name).to.eq('dog')
            expect(response.body.status).to.eq('available')
        })
    })
})