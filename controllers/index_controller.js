const IndexModel = require('../models/index_model.js');

indexModel = new IndexModel();

module.exports = class IndexController {
    sayHiController(req, res ,next) {
      // console.log("xxx");

        // do something
        // 呼叫特定的model
        // 從資料庫將資料撈完後進行res.json的動作。
    }
}
