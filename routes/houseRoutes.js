import * as houseController from  './../controllers/houseController';

const routes = (app) => {
    app.route('/addHouse').post(houseController.addNewHouse);
    app.route('/findHouses').post(houseController.findHouseByQuery);
    app.route('/deleteHouse').delete(houseController.deleteHouse);
}

export default routes;
