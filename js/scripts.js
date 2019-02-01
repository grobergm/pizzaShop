function Pizza(toppings,size){
  this.toppings=toppings;
  this.size=size;
  this.pizzaPrice=0;
}

Pizza.prototype.totalCost=function(){
  var cost=this.toppings.length;
  if (this.size==="small"){
    cost+=12;
  } else if (this.size==="medium"){
    cost+=15;
  } else if (this.size==="large"){
    cost+=18;
  }
  this.pizzaPrice=cost;
}


$(document).ready(function(){
  $('#introBtn').click(function(){
    $('#introText').hide();
    $('#pizzaForm').fadeIn(1000);
  });
  $('#pizzaForm').submit(function(event){
    event.preventDefault();
    var toppings=[];
    $('input[name="topping"]:checked').each(function(){
      toppings.push(this.value);
    });
    var size=$('#size').val();
    var newPizza= new Pizza(toppings,size);
    newPizza.totalCost();
    alert("Your pizza will cost $"+ newPizza.pizzaPrice);
  })
});
