const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order['name'];
  const customerPhone = order['phoneNumber'];
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(`Ola ${deliveryPerson}, entrega para: ${customerName}, telefone ${customerPhone}, R. ${street}, No ${number}, AP: ${apartment}`); 

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newBuyer = order.name = 'Luiz Silva'; // Altere o nome da pessoa compradora
  const newTotal = order.payment.total = '50'; // Altere o valor total da compra
  const pizzas = Object.keys(order.order.pizza); // Recupere as chaves que estão em `order.order.pizza`
  const drinks = order.order.drinks.coke.type;  // Recupere o `type` da chave `coke`.

  console.log(`Ola ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} eh R$ ${newTotal},00.`);

}

orderModifier(order);