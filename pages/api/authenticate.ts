import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { secret } from "../../src/secret";

//auth handler
export const authenticated = (fn: NextApiHandler) => async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
      await verify(req.cookies.auth!, secret, async function(err, decoded) {
          if(!err && decoded){
            //   console.log(decoded)
              return await fn(req,res);
          }
          
          res.status(401).json({message: 'Sorry you are not authorized'})
      });
      // return await fn(req, res);
    
};
