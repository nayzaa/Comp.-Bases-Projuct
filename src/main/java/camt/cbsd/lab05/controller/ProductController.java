package camt.cbsd.lab05.controller;

import camt.cbsd.lab05.entity.Product;
import camt.cbsd.lab05.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProductController {

    ProductService productService;
    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/product")
    public ResponseEntity<?> list(){
        return ResponseEntity.ok(productService.list());
    }

    @PostMapping("/product")
    public ResponseEntity<?> add(@RequestBody Product product){
        productService.save(product);
        return ResponseEntity.ok(product);
    }

    @GetMapping("product/{id}")
    public ResponseEntity getProduct(@PathVariable("id")long id){
        Product product = productService.findById(id);
        if (product!= null)
            return ResponseEntity.ok(product);
        else
            //http code 204
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }

    @PostMapping("product/{id}")
    public ResponseEntity getStudent(@PathVariable("id")long id,@RequestBody Product product){
        Product oldProduct = productService.findById(id);
        if(product!=null && oldProduct!=null){
            long oldProductId = oldProduct.getId();
            oldProduct = product;
            oldProduct.setId(oldProductId);
            productService.save(oldProduct);
            return ResponseEntity.ok(oldProduct);
        }else{
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }

    @PostMapping("product/delete/{id}")
    public ResponseEntity deleteStudent(@PathVariable("id")long id){
        Product product = productService.findById(id);
        if(product!=null){
            productService.delete(product);
            return ResponseEntity.ok(product);
        }else{
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }
}
