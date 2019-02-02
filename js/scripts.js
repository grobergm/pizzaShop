function Order(name,address){
  this.name=name;
  this.address=address;
  this.pizzas=[];
  this.cost=0;
}

Order.prototype.addPizza=function(pizza){
  this.pizzas.unshift(pizza);
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
  if (this.size==="Small"){
    cost+=12;
  } else if (this.size==="Medium"){
    cost+=15;
  } else if (this.size==="Large"){
    cost+=18;
  }
  this.pizzaPrice=cost;
}


$(document).ready(function(){
  var orders=[];
  $('#orderForm').submit(function(event){
    event.preventDefault();
    var inputedName= $('#nameInput').val();
    var inputedAddress= $('#addressInput').val();
    if(inputedName&&inputedAddress){
      $('.orderName').text(inputedName);
      $('.orderAddress').text(inputedAddress);
      orders.unshift(new Order(inputedName, inputedAddress));
      $('#introText').hide();
      $('#pizzaForm').fadeIn(500);
    }
    if(!inputedName){
      $('#nameInput').addClass('is-invalid');
    };
    if(!inputedAddress){
      $('#addressInput').addClass('is-invalid');
    }
  });

  $('#pizzaForm').submit(function(event){
    event.preventDefault();
    var toppings=[];
    $('input[name="topping"]:checked').each(function(){
      toppings.push(this.value);
    });
    $('input[name="topping"]').prop('checked', false);
    var size=$('#size').val();
    var newPizza= new Pizza(size,toppings);
    newPizza.totalCost();
    var orderString="<li>"+newPizza.size+" Pizza (";
    newPizza.toppings.forEach(function(topping){
      orderString+=" " + topping + " ";
    });
    orderString+=") <strong>$"+newPizza.pizzaPrice+"</strong></li>";
    $('.order').prepend(orderString);
    orders[0].addPizza(newPizza);
    orders[0].calculateTotal();
    $('.totalDisplay').text("$"+orders[0].cost);
  })
});
