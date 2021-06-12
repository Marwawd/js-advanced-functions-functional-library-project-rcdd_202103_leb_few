const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      Object.values(collection).forEach(element => callback(element));
      return collection
    },

    map: function(collection,callback) {
      let arr=[];
      let collection1=Object.values(collection);
      for(let i=0 ; i<collection1.length ; i++)  {
        arr.push(callback(collection1[i]));
        }
        return arr

      },


    reduce: function(collection,callback = () => {}, acc=0) {
      let collection1=Object.values(collection);
      if(!acc){acc=collection1[0];
      collection1 = collection1.slice(1)}
      for(let i=0 ; i<collection1.length ; i++)  {
        acc = callback(acc, collection1[i], collection1)
        }
        return acc
    },
      find: function(collection, predicate){
        let collection1=Object.values(collection);
        for(let i=0 ; i<collection1.length ; i++) {
          if(predicate(collection1[i])){
          return collection1[i]}
        }

      },
       filter: function(collection, predicate){
         let arr=[];
         let collection1=Object.values(collection);
         for(let i=0 ; i<collection1.length ; i++) {
           if(predicate(collection1[i])){
              arr.push(collection1[i])}

         } return arr
       },
       size: function(collection){

         let collection1=Object.values(collection);
         return collection1.length;
       },
       first: function(collection,n){
         let arr=[];
         let collection1=Object.values(collection);
         if(!n) return collection1[0];
         else {
           for(let i=0; i<n; i++){
            arr.push(collection1[i]);
           }
           return arr
         }
       },

       last: function(collection,n){
         let arr=[];
         let collection1=Object.values(collection);
         let lidx=collection1.length-1;
         if(!n) return collection1[lidx];
         else return collection1.slice(-n);

        },
      compact: function(collection){
          let arr=[];
          let falsyv=new Set([false, null, 0, "", undefined, NaN]);
          let collection1=Object.values(collection);
          return collection1.filter(e=> !falsyv.has(e))


         },
         sortBy: function(collection, callback) {

           return Object.values(collection).sort(function(a, b) {
             return callback(a) - callback(b)
            })
    },

    keys: function(obj) {

      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values



    },
    functions: function(obj) {
         const fn = []

         for (let key in obj) {
           if (typeof obj[key] === "function"){
             fn.push(key)
           }
         }

         return fn.sort()
       },


  }
})()

fi.libraryMethod()
