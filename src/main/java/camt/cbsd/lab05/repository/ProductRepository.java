package camt.cbsd.lab05.repository;

import camt.cbsd.lab05.entity.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product,Long> {
    Product findById(Long id);

    List<Product> findByProductNameIgnoreCaseContainingOrProductDescriptionIgnoreCaseContaining(String search, String search1);
    List<Product> findByProductPriceBetween(double low, double high);
}
