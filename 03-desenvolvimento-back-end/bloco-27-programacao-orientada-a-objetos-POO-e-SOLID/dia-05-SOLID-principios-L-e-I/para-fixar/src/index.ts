// ./src/index.ts
import { Connector, RedisConnector, ReadOnlyRedisConnector, ReadOnlyConnector } from "./Connectors";

// sem LSP
// const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
// const conn = new Connector({
//   host: 'mysqldb',
//   port: 3306,
//   database: 'counter',
//   user: 'root',
//   password: 'example'});

  const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
  const conn = new RedisConnector({
    host: 'redisdb',
    port: 6379});
  

const main = (connector: Connector) => {
  connector.firstCount(token);

  const logCount = async () => {
    try {
      const count = await connector.getCount(token);
      console.log(count);
    } catch (err) {
      console.error(err);
    }
  };

  const doSomeIncrements = () => {
    logCount();
    connector.incrementCount(token);
    connector.incrementCount(token);
    connector.incrementCount(token);
  };

  const incrementsInterval = setInterval(doSomeIncrements, 500);

  setTimeout(() => {
    clearInterval(incrementsInterval);
    logCount();
    connector.clearCount(token);
    connector.closeConnection();
  }, 5500);
};

main(conn);

/*
Saída:
0
3
6
9
12
15
18
21
24
27
30
*/

const tokenISP = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
const connISP = new ReadOnlyRedisConnector({
  host: 'redisdb',
  port: 6379});

const mainISP = async (connector: ReadOnlyConnector) => {
  const count = await connector.getCount(tokenISP);
  try {
    console.log(count);
  } catch (err) {
    console.error(err);
  }
}

mainISP(connISP);