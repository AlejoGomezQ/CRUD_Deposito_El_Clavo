import { Request, Response } from "express"
import { Product } from "../models/product"

export const getProducts = async (req: Request, res: Response) => {
    const productList = await Product.findAll();

    res.json(productList);
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if(product) {
        res.json(product);
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }

    
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if(product) {
        await product.destroy();
        res.json({
            msg: `El producto con el id ${id} fue eliminado`
        })
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const product = await Product.findByPk(id);

        if(product) {
            await product.update(body);
            res.json({
                msg: `El producto con el id ${id} fue actualizado`
            })
        } else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            })
        
        }
    } catch (error) {
        console.error(error);
        res.json({
            msg: `Ocurrio un error al intentar actualizar el producto. Comuniquese con soporte.`
        })
    }
}

export const saveProduct = async (req: Request, res: Response) => {
    const { body } = req;
    
    try {
        await Product.create(body);

        res.json({
                msg: 'Producto creado con exito'
            }
        )
    } catch (error) {
        console.error(error);
        res.json({
            msg: `Ocurrio un error al intentar agregar el producto. Comuniquese con soporte.`
        })
    }
}

