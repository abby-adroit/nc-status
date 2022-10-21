import { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../../src/config";
import { authenticated } from "../authenticate";

const mssql = require('mssql');

export default authenticated(async function getLocation(
  req: NextApiRequest,
  res: NextApiResponse
) {
    // const config = {
    //     user: 'sa',
    //     password: 'adrpassword',
    //     server: 'localhost\\sqlserver',
    //     database: 'BEDSTATUS',
    //     pool: {
    //         max: 10,
    //         min: 4,
    //         idleTimeoutMillis: 30000,
    //     },
    //     options: {
    //         encrypt: false,
    //         trustServerCertificate: true
    //     }
    // };

    if(req.method === 'GET'){
        mssql.connect(config, (err: any) => {
            if (err) console.log(err);
        });

        mssql.connect(config).then( () => {
            return mssql.query `SELECT IncomingGroupLocationID as grpLocId, IncomingGroupID as grpId, GroupName as grpName, LocationID as locationId, LocationName as locationName, StatusID as statusId, StationName as stationName FROM location ORDER BY GroupName ASC`;
        }).then( (result: { recordsets: any[]; }) => {
            res.json(result.recordsets[0]);
            console.log("location loaded");
        }).catch( (err: any)  => {
            console.error(err);
            res.status(500).json(-2);
        })
    }else{
        console.log("method should be GET")
        res.status(405).json(-1);
    }
});