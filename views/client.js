$(document).ready(function(){
  getWishData().then(function(data){
    formatWishData(data).then(function(wishes){
      formatWishes(wishes).then(function(wishes){
        console.log(wishes)
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
  var activities = [];
  var radnessLevels = [];
  var completedWishes = [];
  var people = [];
  return new Promise(function(resolve, reject){
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
    wishes.push(activities);
    wishes.push(radnessLevels);
    wishes.push(completedWishes);
    wishes.push(people);
    resolve(wishes);
  });
};
