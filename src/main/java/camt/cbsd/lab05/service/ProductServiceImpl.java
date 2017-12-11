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
    public Product save(Product product) {
        return productDao.saveProduct(product);
    }

    @Override
    public Product findById(long id) {
        Product product = productDao.findById(id);
        return product;
    }



    @Override
    public void delete(Product product) {
        productDao.deleteProduct(product);
    }

    @Override
    public List<Product> searchProduct(String search) {
        if(search==null||search.equals(""))
            return productDao.list();
        return productDao.searchProduct(search);
    }

    @Override
    public List<Product> searchProduct(int low, int high) {
        if(high==0) high = Integer.MAX_VALUE;
        return productDao.searchProduct(low, high);
    }


}
