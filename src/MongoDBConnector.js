const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb://prateek:prat33kdatac0nsultant@ds247141.mlab.com:47141/binmanagement";
const dbname = "binmanagement";
let MongoDBConnector;

try {
  // Use connect method to connect to the Server
  MongoClient.connect(
    url,
    function(err, connect) {
      if (!err) {
        console.log("Connected");
      } else {
        console.log(err.stack);
      }
    }
  );
  //const db = MongoDBConnector.db(dbName);
} catch (err) {
  console.log(err.stack);
}

if (MongoDBConnector) {
  console.log("Connected");
}

export default MongoDBConnector;
