$(document).ready(function(){
  $("#dating").submit(function(event) {
    event.preventDefault();
    var gender = $("#gender").val();
    var videoGame = $("input:radio[name=videoGame]:checked").val();
    var age= $("input#age").val();
    /*
    function selection (gender, videoGame, age){
      if(age < 18) {
         age = "young";
      };
      if((age > 18) && (age < 35)) {
         age = "youngAd";
      };
      if((age > 35) && (age < 50)) {
         age = "middleAged";
      };
      if(age > 50) {
         age = "old";
      };
      return "#" + gender + videoGame + age;
    };;

    var result = (selection(gender,videoGame,age));

    $("\""result"\"").show();
*/

  if(gender === "Male"){

    if(videoGame === "Xbox"){
      if(age < 18) {
         $("#malexboxyoung").show();
      };
      if(age > 18 && age < 35) {
         $("#malexboxyoungAd").show();
      };
      if(age > 35 && age < 50) {
         $("#malexboxmiddleAged").show();
      };
      if(age > 50) {
         $("#malexboxold").show();
      };
    };
    if(videoGame === "playstation"){
      if(age < 18) {
         $("#maleplaystationyoung").show();
      };
      if((age > 18) && (age < 35)) {
         $("#maleplaystationyoungAd").show();
      };
      if((age > 35) && (age < 50)) {
         $("#maleplaystationmiddleAged").show();
      };
      if(age > 50) {
         $("#maleplaystationold").show();
      };
    };
    if(videoGame === "nintendo"){
      if(age < 18) {
         $("#malenintendoyoung").show();
      };
      if((age > 18) && (age < 35)) {
         $("#malenintendoyoungAd").show();
      };
      if((age > 35) && (age < 50)) {
         $("#malenintendomiddleAged").show();
      };
      if(age > 50) {
         $("#malenintendoold").show();
      };
    };
  };
  if(gender === "female"){

    if(videoGame === "xbox"){
      if(age < 18) {
         $("#femalexboxyoung").show();
      };
      if((age > 18) && (age < 35)) {
         $("#femalexboxyoungAd").show();
      };
      if((age > 35) && (age < 50)) {
         $("#femalexboxmiddleAged").show();
      };
      if(age > 50) {
         $("#femalexboxold").show();
      };
    };
    if(videoGame === "playstation"){
      if(age < 18) {
         $("#femaleplaystationyoung").show();
      };
      if((age > 18) && (age < 35)) {
         $("#femaleplaystationyoungAd").show();
      };
      if((age > 35) && (age < 50)) {
         $("#femaleplaystationmiddleAged").show();
      };
      if(age > 50) {
         $("#femaleplaystationold").show();
      };
    };
    if(videoGame === "nintendo"){
      if(age < 18) {
         $("#femalenintendoyoung").show();
      };
      if((age > 18) && (age < 35)) {
         $("#femalenintendoyoungAd").show();
      };
      if((age > 35) && (age < 50)) {
         $("#femalenintendomiddleAged").show();
      };
      if(age > 50) {
         $("#femalenintendoold").show();
      };
    };
  };
  });
});
