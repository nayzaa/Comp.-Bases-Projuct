package camt.cbsd.lab05.service;

import camt.cbsd.lab05.entity.Product;

import java.util.List;

public interface ProductService {

    List<Product> list();
    Product save(Product product);
    Product findById(long id);
    void delete(Product product);
    List<Product> searchProduct(String search);
    List<Product> searchProduct(int low,int high);
}
