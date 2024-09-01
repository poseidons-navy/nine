import { LevelDB } from "@nine/lama2";
import { DataProcessor } from "./processor";
import { CIdStoreEvent } from "./plugins/cid";

const db = await LevelDB.init();
const dataprocessor = new DataProcessor(db._db.dbi, db._db.env);
console.log('Registering plugins');
// Register plugins
dataprocessor.registerPlugin(new CIdStoreEvent());


export default dataprocessor;