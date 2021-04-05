import { expect, server } from '../setup';

describe("Test house endpoints", () => {
    beforeEach(() => {
        const newHouse = {
            name: 'Test House',
            foundationDate: 'Test Day',
            region: 'Testland',
            currentLord: {
                name: 'Testen McTest',
                seasons: ['Season Test']
            }
        };
        server.post('/addHouse')
        .set('content-type', 'application/json')
        .send(newHouse);
    })
    
    afterEach(() => {
        const deleteQuery = {
            name: 'Test House'
        };
        server.delete('/deleteHouse')
        .set('content-type', 'application/json')
        .send(deleteQuery);
    })
    
    describe('test add new house', () => {
        it('should add a new house', done => {
            const testHouse = {
                name: 'Test House',
                foundationDate: 'Test Day',
                region: 'Testland',
                currentLord: {
                    name: 'Testen McTest',
                    seasons: ['Season Test']
                }
            };
            
            const testHouseJSON = JSON.stringify(testHouse);
            
            server.post('/addHouse')
            .set('content-type', 'application/json')
            .send(testHouseJSON)
            .end((err, res) => {
                expect(res.body.name).to.equal(testHouse.name);
                done();
            });
        });
    });
    
    describe('test get all houses', () => {
        it('should get all houses', done => {
            const paginationOptions = {
                limit: 10,
                skip: 0
            }
            
            const testQuery = {
                paginationOptions
            }
            
            const testQueryJSON = JSON.stringify(testQuery);
            
            server.post('/findHouses')
            .set('content-type', 'application/json')
            .send(testQueryJSON)
            .end((err, res) => {
                expect(res.body).to.be.a("Array");
                done();
            });
        });
    });

    describe('test get specific house', () => {
        it('should get all houses', done => {
            const house = {
                name: 'Test House'
            }
            
            const testQuery = {
                query: house
            }
            
            const testQueryJSON = JSON.stringify(testQuery);
            
            server.post('/findHouses')
            .set('content-type', 'application/json')
            .send(testQueryJSON)
            .end((err, res) => {
                expect(res.body.name).to.equal(house.name);
                done();
            });
        });
    });

    describe('test get specific house', () => {
        it('should delete a house', done => {
            const house = {
                name: 'Test House'
            }
            
            const testQuery = {
                query: house
            }
            
            const testQueryJSON = JSON.stringify(testQuery);
            
            server.delete('/deleteHouse')
            .set('content-type', 'application/json')
            .send(testQueryJSON)
            .end((err, res) => {
                expect(res.body.name).to.equal(house.name);
                done();
            });
        });
    });
})

