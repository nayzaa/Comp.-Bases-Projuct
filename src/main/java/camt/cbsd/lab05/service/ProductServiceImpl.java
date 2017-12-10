package camt.cbsd.lab05.service;

import camt.cbsd.lab05.dao.ProductDao;
import camt.cbsd.lab05.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    ProductDao productDao;

    @Autowired
    public void setProductDao(ProductDao productDao) {
        this.productDao = productDao;
    }


    @Override
    public List<Product> list() {
        return productDao.list();
    }

    @Override
    public Product add(Product product) {
        return productDao.addProduct(product);
    }

    @Override
    public Product findById(long id) {
        Product product = productDao.findById(id);
        return product;
    }

}
