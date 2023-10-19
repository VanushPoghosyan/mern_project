import multer from 'multer';

export function upload(name){
    return multer({storage : multer.diskStorage({
            destination :(_,__,cb) => {
                cb(null,`uploads/${name}`)
            },
            filename:(_,file,cb) => {
                cb(null,file.originalname)
            }
        })})

}
