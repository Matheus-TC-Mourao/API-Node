import { Request, Response } from "express";
import { ProductRepositoryPrisma } from "../../../repositories/product/prisma/product-repository-prisma";
import { prisma } from "../../../util/prisma-util";
import { ProductServiceImplementation } from "../../../services/product/implementation/product-service-implementation";

export class ProductController {
  private constructor() {}

  public static build() {
    return new ProductController();
  }

  public async create(request: Request, response: Response) {
    const { name, price } = request.body;

    const aRepository = ProductRepositoryPrisma.build(prisma);
    const aService = ProductServiceImplementation.build(aRepository);

    const output = await aService.create(name, price);

    const data = {
      id: output.id,
      name,
      price,
      balance: output.balance,
    };

    response.status(201).json(data).send();
  }

  public async list(request: Request, response: Response) {
    const aRepository = ProductRepositoryPrisma.build(prisma);
    const aService = ProductServiceImplementation.build(aRepository);

    const output = await aService.list();

    const data = { products: output.products };

    response.status(200).json(data).send();
  }
}