package camt.cbsd.lab05.service;

import camt.cbsd.lab05.entity.Product;

import java.util.List;

public interface ProductService {

    List<Product> list();
    Product add(Product course);
    Product findById(long id);
}
