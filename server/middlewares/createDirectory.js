import path, {resolve} from 'path';
import {mkdirSync} from 'fs'

export const createDir = name => {
    return async function(req,res,next){
        const dirName = path.resolve("uploads",name);
        mkdirSync(dirName,{recursive:true});
        next()
    }
}