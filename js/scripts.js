function Order(name){
  this.name=name;
  this.pizzas=[];
  this.cost=0;
}

Order.prototype.addPizza=function(pizza){
  this.pizzas.push(pizza);
}

Order.prototype.calculateTotal=function(){
  var totalCost=0;
  this.pizzas.forEach(function(pizza){
    totalCost+=pizza.pizzaPrice;
  })
  this.cost=totalCost;
}

function Pizza(size,toppings){
  this.size=size;
  this.toppings=toppings;
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
    $('#pizzaForm').fadeIn(500);
  });
  $('#pizzaForm').submit(function(event){
    event.preventDefault();
    var toppings=[];
    $('input[name="topping"]:checked').each(function(){
      toppings.push(this.value);
    });
    var size=$('#size').val();
    var newPizza= new Pizza(size,toppings);
    newPizza.totalCost();
    alert("Your pizza will cost $"+ newPizza.pizzaPrice);
  })
});
