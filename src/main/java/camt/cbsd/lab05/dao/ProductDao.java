package camt.cbsd.lab05.dao;

import camt.cbsd.lab05.entity.Product;

import java.util.List;

public interface ProductDao {

    Product findById(long id);
    Product saveProduct(Product product);
    List<Product> list();
    void deleteProduct(Product product);
    Integer size();
}
