$(document).ready(function(){
  getWishData().then(function(data){
    formatWishData(data).then(function(wishes){
      formatWishes(wishes).then(function(wishArray){
        dataVisual(wishArray).then(function(wishArray){
          console.log(wishArray);
        })
      })
    })
  })
})

function getWishData(){
  return new Promise(function(resolve, reject){
    $.get('/get', function(data){
      resolve(data);
    });
  });
};

function formatWishData(data){
  return new Promise(function(resolve, reject){
    var wishes = [];
    for(var i = 0; i < data.lastwish.length; i = i + 1){
      var oneWish = data.lastwish[i];
      wishes.push(oneWish);
    }
    resolve(wishes);
  })
}

function formatWishes(wishes){
  return new Promise(function(resolve, reject){
    var activities = [];
    var radnessLevels = [];
    var completedWishes = [];
    var people = [];
    var wishArray = [];
    wishes.forEach(function(item, index, array){
      var activity = item.wish;
      var radLevel = item.radness;
      var status = item.complete;
      var person = item.user;
      activities.push(activity);
      radnessLevels.push(radLevel);
      completedWishes.push(status);
      people.push(person);
    })
    activities.unshift('wishes');
    wishArray.push(activities);
    wishArray.push(radnessLevels);
    wishArray.push(completedWishes);
    wishArray.push(people);
    resolve(wishArray);
  });
};

function dataVisual(wishArray){
  return new Promise(function(resolve, reject){
    var data = wishArray;

    var x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, 420]);

    d3.select(".chart")
      .selectAll("div")
      .data(data)

    .enter().append("div")
      .style("width", function(d) { return x(d) + "px"; })
      .text(function(d) { return d; });
      console.log(wishArray)
  })
}
