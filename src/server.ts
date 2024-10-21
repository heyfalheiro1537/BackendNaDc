import Fastify from 'fastify'
import userRoutes from './config/routes/userRoutes';
import productRoutes from './config/routes/productRoutes';

//inicialização do banco a adicionar

const fastify = Fastify({
  logger: true
})

fastify.register(userRoutes, { prefix: '/user' });
fastify.register(productRoutes, { prefix: '/product' });

fastify.listen({ port: 3000 }, function (err) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  
})
  
  