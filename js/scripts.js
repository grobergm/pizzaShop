




$(document).ready(function(){
  $('#pizzaForm').submit(function(event){
    event.preventDefault();
    var toppings=[];
    $('input[name="topping"]:checked').each(function(){
      toppings.push(this.value);
    });
    console.log(toppings);
    var size=$('#size').val();
    console.log(size);
  })
});
