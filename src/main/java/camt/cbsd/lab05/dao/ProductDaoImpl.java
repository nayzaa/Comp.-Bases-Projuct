package camt.cbsd.lab05.dao;

import camt.cbsd.lab05.entity.Product;
import camt.cbsd.lab05.entity.Student;
import camt.cbsd.lab05.repository.ProductRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductDaoImpl implements ProductDao{
    ProductRepository productRepository;
    @Autowired
    public void setCourseRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getProducts() {

        return Lists.newArrayList(productRepository.findAll());

    }

    @Override
    public Product findById(long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> list() {
        return Lists.newArrayList(productRepository.findAll());
    }

    @Override
    public Integer size() {
        return (int)productRepository.count();
    }
}
