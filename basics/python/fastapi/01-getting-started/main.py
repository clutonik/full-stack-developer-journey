from typing import Optional
from fastapi import FastAPI, Response, status, HTTPException
from fastapi.params import Body
from pydantic import BaseModel

app = FastAPI()

class Product(BaseModel):
    id: int
    name: str
    price: float
    description: Optional[str] = None
    stock: Optional[int] = None


products = [
    Product(id=1, name="Keyboard", price=100.0),
    Product(id=2, name="Mouse", price=50.0),
    Product(id=3, name="Monitor", price=200.0)
]

def find_product(id: int):
    for product in products:
        if product.id == id:
            return product
    return None

@app.get("/")
def root():
    return {"message": "Hello World"}


@app.post("/products")
def create_product(payload: dict = Body(...)) :
    """
    Receives the request body as a dictionary
    HTTP POST /products
    """
    return payload

@app.post("/schemas")
def create_product(product: Product) :
    """
    Receives the request body as a Product object
    HTTP POST /schemas
    """
    return product

@app.get("/products/{id}")
def get_product(id: int, response: Response):
    """
    HTTP GET /products/{product_id}
    """
    product = find_product(id)
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"data": find_product(id)}

@app.get("/products")
def get_products():
    """
    HTTP GET /products
    """
    return {"data": products}


@app.delete("/products/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_product(id: int):
    """
    HTTP DELETE /products/{product_id}
    """
    product = find_product(id)
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    
    products.pop(products.index(product))
    return Response(status_code=status.HTTP_204_NO_CONTENT)
