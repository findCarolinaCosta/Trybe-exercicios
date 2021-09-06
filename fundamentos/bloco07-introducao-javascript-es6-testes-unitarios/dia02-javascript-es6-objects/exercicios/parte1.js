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
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const nomeEntrega = order.name;
  const telContato = order.phoneNumber;
  const address = 'address';
  const rua = order[address].street;
  const numeroCasa = order[address].number;
  const complemento = order[address].apartment;

  const orderRuaFlores = `Olá ${deliveryPerson}, entrega para: ${nomeEntrega}, Telefone: ${telContato}, ${rua}, Nº. ${numeroCasa}, AP: ${complemento}`
  console.log(orderRuaFlores);
}

customerInfo(order);

const orderModifier = (order) => {
  const newName = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  const valor = order.payment['total'] = '50';
  const infoPedido = `Olá ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$ ${valor},00`
  console.log(infoPedido);
}

orderModifier(order);
