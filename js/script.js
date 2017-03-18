


$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",
 function (data) {

             //Mассив скилов 

   var skills = [];
   _.each( data, function (el) {
      _.forIn(el, function(value, key) {
         if (key == 'skills' ){
         skills =   _.union(skills, value);
        }
      }) 
   }); 
   var skillsList = _.sortBy(skills, [function(value){
      return value.toLowerCase(); 
      }
   ]);
   console.log("skillsSort=", skillsList);

             //Mассив имен

   var peopleNames =[];
   _.each(_.sortBy(data, [function(e){
      return e.friends.length; }]), 
      function(el){
        peopleNames.push( _.pick(el,['name']));
      });
   peopleNames = _.map(peopleNames,'name');
   console.log('Names =', peopleNames);

             //Mассив друзей

   var friends =[];
   _.each( data, function (el) {
      _.forIn(el, function(value, key) {
      if (key == 'friends' ){
         var map = _.map(value,'name');
         friends =   _.union(friends, map);
         }
      }) 
   }); 
   friends = _.sortBy(friends, [friends.value]);
   console.log('friends= ', friends);
});