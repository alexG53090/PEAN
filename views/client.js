$(document).ready(function(){
  getWishData().then(function(data){
    formatWishData(data).then(function(wishes){
      formatWishes(wishes).then(function(wishArray){
        dataVisual(wishArray).then(function(wishActivity){
          barChart(wishActivity).then(function(wishActivity){
            console.log(wishActivity)
          })
        })
      })
    })
  })
})

function getWishData(){
  return new Promise(function(resolve, reject){
    $.get('/get', function(data){
      resolve(data);
    })
  })
}

function formatWishData(data){
  return new Promise(function(resolve, reject){
    var wishes = []
    for(var i = 0; i < data.lastwish.length; i = i + 1){
      var oneWish = data.lastwish[i]
      wishes.push(oneWish)
    }
    resolve(wishes)
  })
}

function formatWishes(wishes){
  return new Promise(function(resolve, reject){
    var wishArray = []
    wishes.forEach(function(item, index, array){
      var wishObject = {}
      var activity = item.wish
      var radLevel = item.radness
      var status = item.complete
      var person = item.user
      wishObject.activity = activity
      wishObject.radLevel = radLevel
      wishObject.status = status
      wishObject.person = person
      wishArray.push(wishObject)
    })
    resolve(wishArray)
  })
}

function dataVisual(wishArray){
  return new Promise(function(resolve, reject){
    var wishActivity = []
    wishArray.forEach(function(item, index, array){
      var radLevel = item.radLevel
      var action = item.activity
      wishActivity.push(radLevel)
    })
    resolve(wishActivity)
  })
}

function barChart(wishActivity){
  return new Promise(function(resolve, reject){
    var data = wishActivity
    var x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, 420])
    d3.select(".chart")
      .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", function(d){
         return x(d) + "px";
       })
      .text(function(d) {
        return d;
      })
  })
  resolve(wishActivity)
};
