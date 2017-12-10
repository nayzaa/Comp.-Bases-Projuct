package camt.cbsd.lab05.dao;

import camt.cbsd.lab05.entity.Product;

import java.util.List;

public interface ProductDao {

    List<Product> getProducts();
    Product findById(long id);
    Product addProduct(Product product);
    List<Product> list();

    Integer size();
}
