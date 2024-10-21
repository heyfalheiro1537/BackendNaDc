import { getProduct, createProduct, deleteProduct } from '../controllers/productController';
import { FastifyInstance } from 'fastify';

export default async function productRoutes(fastify: FastifyInstance) {
    fastify.get('/:id', getProduct);
    fastify.post('/', createProduct);
    fastify.delete('/:id', deleteProduct);
}
