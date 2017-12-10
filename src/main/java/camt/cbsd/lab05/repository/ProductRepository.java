package camt.cbsd.lab05.repository;

import camt.cbsd.lab05.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product,Long> {
    Product findById(Long id);
}
