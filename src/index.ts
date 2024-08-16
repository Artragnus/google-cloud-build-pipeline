import * as functions from "@google-cloud/functions-framework";

functions.http(
  "helloWorld",
  (req: functions.Request, res: functions.Response) => {
    res.send("Hello, world!");
  }
);
