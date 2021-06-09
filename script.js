$("button").click(function() {
let color = $(".favorite-color").val();
    let sign = $(".zodiac").val();
    let count;
    console.log(color);
    console.log(sign);
    $(".results").show();
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " times");
    
});
