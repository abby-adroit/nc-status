import { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../../src/config";
import { authenticated } from "../authenticate";

const mssql = require('mssql');

export default authenticated(async function getLocation(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if(req.method === 'GET'){
        mssql.connect(config).then( () => {
            return mssql.query `SELECT * FROM location`;
        }).then( (result: { recordsets: any[]; }) => {
            res.json(result.recordsets[0]);
            console.log("location loaded");
        }).catch( (err: any)  => {
            console.error(err);
            res.status(500).json(-1);
        })
    }else{
        console.log("method should be GET")
        res.status(405).json(-1);
    }
});