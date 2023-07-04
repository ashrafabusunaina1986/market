const router=require('express').Router()
const fs=require('fs')
const path = require('path')

router.route('/uploadfile').post((req,res)=>{
    const image=req.files.image
    const {name,email,ename}=req.body
    const id =Number(req.body.id),price=Number(req.body.price)
    const filename=path.join(__dirname,'..','..','client','public','persons',
    email,ename+id+'.json')
    
        const foldername=path.join('persons',
        email,'images')

        const ob=require(filename)
        ob.push({
            id:ob.length,
            name:name,
            price:price,
            filename:path.join(foldername,image.name)
        })
        fs.promises.writeFile(filename,JSON.stringify(ob,null,2),'utf-8')
        .then(add=>{
            const file=image.name
            
            image.mv(path.join( __dirname,'..','..','client','public','persons',email,'images',file),err=>{
                if(err){
                    return res.send({file:'not file',error:err})
                }
            })
            fs.promises.readFile(filename,'utf-8')
            .then(result=>{
               return res.send({file:'Added item',data:JSON.parse(result)})
            }).catch(err=>{
                return res.send({data:{name,price,image,ename,email,id},error:err})
            })
        }).catch(err=>{
            return res.send({data:{name,price,image,ename,email,id},error:err})
        })
    
        
})
module.exports=router