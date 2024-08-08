import { LevelDB } from "@nine/lama"
import { ProcessMonitor } from "../../monitor"
import { DataProcessor } from "./writer"

import { CidProcessor } from "./plugins"
import { LoggerProcessor } from "./plugins/logger"

const db = await LevelDB.init()
export const monitor = await ProcessMonitor.init()
const dataProcessor = new DataProcessor(db._db.dbi, db._db.env, monitor)

dataProcessor.registerPlugin(new CidProcessor())
dataProcessor.registerPlugin(new LoggerProcessor())


export default dataProcessor