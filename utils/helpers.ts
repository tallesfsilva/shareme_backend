var fs = require('fs');
var path = require('path');



export const validateFileTypePinImagge = (pinImageType:string):boolean =>{

                    
            if(pinImageType === 'image/png' || pinImageType === 'image/svg' 
            || pinImageType === 'image/jpeg'|| pinImageType === 'image/jpg' 
            || pinImageType === 'image/gif' || pinImageType === 'image/tiff' ){
                        return true;
                }
            return false;    

}


export const uploadPinImage = (objPinImage: any, pinId : string): boolean => {

   
         
        if(objPinImage && pinId){

            const validateTypeImage = objPinImage ? validateFileTypePinImagge(objPinImage.mimetype) : null; 
            
             if(validateTypeImage) {
                //fs.mkdirSync('images/' + pinId , { recursive: true });
                fs.writeFileSync('images/'+pinId+'.'+objPinImage.mimetype.split('/')[1], objPinImage.data);
                return true
             }          
            
        }
           return false;         

}

