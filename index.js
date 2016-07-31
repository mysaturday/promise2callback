module.exports = function(promise, callback){

  if(!promise.then){
    throw new Error('Missing Promise')
  }

  if(!callback || typeof callback !== 'function'){
    throw new Error('Missing Callback')
  }

  promise
  .then(function(data){
    callback(null, data);
  })
  .catch(function(err){
    callback(err, null);
  });
};