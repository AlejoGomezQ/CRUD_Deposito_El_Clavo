import { Request, Response } from "express"

export const getProducts = (req: Request, res: Response) => {
    res.json({ message: 'Get products' })
}

export const getProduct = (req: Request, res: Response) => {
    const { id } = req.params

    res.json(
        { 
            message: 'Get product',
            id
        }
    )
}

export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json(
        {
            message: 'Delete product',
            id
        }
    )
}

export const updateProduct = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json(
        {
            message: 'Update product',
            id
        }
    )
}

export const saveProduct = (req: Request, res: Response) => {
    const { body } = req.params;
    console.log(body);
    

    res.json(
        {
            message: 'Save product',
            body
        }
    )
}

