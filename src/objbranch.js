class objbranch {
    constructor(name,maindata){    
        //* another method and setting. 
        this.name = name;
        let arr = [];
        for(let i of maindata){
             let set = (JSON.stringify(i))
              arr.push(JSON.parse(set))
    
        }
    this.assert = arr
    }

    branch(data){
        let ass, otherkey = null,keysec,secokey;
        const main = (data,mainset) => {
            // * inside array check
            for (let i in data) {
              let key =   (Object.keys(data[i]))[0].search(/^\$\w+/g);
              let setter = data[i][Object.keys(data[i])]
              if((typeof setter)===Array || (typeof setter)===(typeof [])){
                if(setter.length === 1){
                    otherkey = false
                    secokey = setter[0]
                }else if(setter.length === 2){
                    otherkey = true
                    if(typeof setter[1] == typeof ''){

                    
                    let fieldinsert =   (setter[1].search(/^\$\w+/g));
                    if(fieldinsert == 0 ){
                        keysec = setter[1].substr(1,)
                        secokey = (setter[0]);
                    }else{
                        throw new Error ("Second item must be field name start with '$' ")
                    }
                    
                }else if(typeof setter[1] === typeof 1){
                    throw new Error ('It must be a fieldname ')
                }
                else{
                    
                }
                    
                }else{
                    throw new Error ('Array must contain 2 item <newFeild> $ <operationAssign>')
                }

              }else{
                throw new Error ('Input must be a array and contain only two items ')
              }
//*operator check
            if(key == 0 ){
                let atomicOp = (Object.keys(data[i]))[0];
                if(atomicOp === "$add"){
                    ass =  this.add(mainset,i,keysec,secokey,otherkey)
                }
                else if(atomicOp === "$sub"){
                    ass =  this.sub(mainset,i,keysec,secokey,otherkey)
                }
                else if(atomicOp === "$mod"){
                    ass =  this.mod(mainset,i,keysec,secokey,otherkey)
                }
                else if(atomicOp === "$mul"){
                    ass =  this.mul(mainset,i,keysec,secokey,otherkey)
                }
                else if(atomicOp === "$divide"){
                    ass =  this.divide(mainset,i,keysec,secokey,otherkey)
                }else{
                    throw new Error("Define the operator . ")
                }

            }else{
                throw new Error("Atomic operator must start with the '$' sign ")
            }
            }
        }
            main(data,this.assert)
        return ass 
    }
    

    add(data,key,keysec,secokey,otherkey){
        let arr_bran = this.mainfun(data),bran=[];
        const loop = (cord,bud,dart)=>{
            for (let index = 0; index < (bud.length); index++) {
                if(otherkey){
                    if(typeof keysec == typeof 1){
                        dart = cord[index][key]+keysec;
                    }else{
                        dart = cord[index][key]+bud[index][keysec];
                    }
                }else{
                    dart = cord[index][key]+bud[index][key];
                }
                    let arr_bran = {}
                    arr_bran[secokey] = dart;
                    bran.push(arr_bran)
                }
        }
        loop(...arr_bran)
        return this.bran = bran 
        
    }
    sub(data,key,keysec,otherkey){
        let arr_bran = this.mainfun(data),bran=[];
        const loop = (cord,bud,dart)=>{
            for (let index = 0; index < (bud.length); index++) {
                if(otherkey){
                    if(typeof keysec == typeof 1){
                        dart = cord[index][key]-keysec;
                    }else{
                        dart = cord[index][key]-bud[index][keysec];
                    }
                }else{
                    dart = cord[index][key]-bud[index][key];
                }
                   let arr_bran = ({Branch:dart})
                   bran.push(arr_bran)
                }
        }
        loop(...arr_bran)
        return this.bran = bran
        
    }
    mod(data,key,keysec,otherkey){
        let arr_bran = this.mainfun(data),bran=[];
        const loop = (cord,bud,dart)=>{
            for (let index = 0; index < (bud.length); index++) {
                if(otherkey){
                    if(typeof keysec == typeof 1){
                        dart = cord[index][key]%keysec;
                    }else{
                        dart = cord[index][key]%bud[index][keysec];
                    }
                }else{
                    dart = cord[index][key]%bud[index][key];
                }
                   let arr_bran = ({Branch:dart})
                   bran.push(arr_bran)
                }
        }
        loop(...arr_bran)
        return this.bran = bran
        
        
    }
    divide(data,key,keysec,otherkey){
        let arr_bran = this.mainfun(data),bran=[];
        const loop = (cord,bud,dart)=>{
            for (let index = 0; index < (bud.length); index++) {
                if(otherkey){
                    if(typeof keysec == typeof 1){
                        dart = cord[index][key]/keysec;
                    }else{
                        dart = cord[index][key]/bud[index][keysec];
                    }
                }else{
                    dart = cord[index][key]/bud[index][key];
                }
                   let arr_bran = ({Branch:dart})
                   bran.push(arr_bran)
                }
        }
        loop(...arr_bran)
        return this.bran = bran
        
    }
    mul(data,key,keysec,otherkey){
        let arr = this.mainfun(data),bran=[];
        const loop = (cord,bud,dart)=>{
            for (let index = 0; index < (bud.length); index++) {
                if(otherkey){
                    if(typeof keysec == typeof 1){
                        dart = cord[index][key]*keysec;
                    }else{
                        dart = cord[index][key]*bud[index][keysec];
                    }
                }else{
                    dart = cord[index][key]*bud[index][key];
                }
                   let arr_bran = ({Branch:dart})
                   bran.push(arr_bran)
                }
        }
        loop(...arr)
        return this.bran = bran
        
    }

     mainfun(data){ 
        let cord = [] , bud =[] ,dart;
            for (let index = 0; index < data.length; index++) {
                    cord.push( data[index]);
                    bud.push( data[index]);
                }
                bud.shift()
                return [cord,bud,dart]
            } 
}
module.exports = objbranch;

