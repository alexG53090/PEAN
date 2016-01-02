$(document).ready(function(){
  getWishData().then(function(data){
    console.log(data);
  })
})

function getWishData(){
  return new Promise(function(resolve, reject){
    $.get('/get', function(data){
      resolve(data);
    });
  });
};
