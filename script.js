$("button").click(function(){
    var name = $(".one").val();
    console.log(name);
    var music = $(".two").val();
    console.log(music);
    var money = $(".three").val();
    console.log(money);
    var moneyCalc = Number(money)*12;
    $("p").text("Hi " + name + " let's talk about how much you're spending on " + music + ". " + name + ", you are spending about $" + moneyCalc + " on " + music + " a year.");
});