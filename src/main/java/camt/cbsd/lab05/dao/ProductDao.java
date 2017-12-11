package camt.cbsd.lab05.dao;

import camt.cbsd.lab05.entity.Product;

import java.util.List;

public interface ProductDao {

    Product findById(long id);
    Product saveProduct(Product product);
    List<Product> list();
    void deleteProduct(Product product);
    List<Product> searchProduct(String search);
    List<Product> searchProduct(int low,int high);
    Integer size();
}
