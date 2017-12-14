package camt.cbsd.lab05.config;

import camt.cbsd.lab05.dao.ProductDao;
import camt.cbsd.lab05.dao.AccountDao;
import camt.cbsd.lab05.entity.Account;
import camt.cbsd.lab05.entity.Product;
import camt.cbsd.lab05.entity.security.Authority;
import camt.cbsd.lab05.entity.security.AuthorityName;
import camt.cbsd.lab05.entity.security.User;
import camt.cbsd.lab05.security.repository.AuthorityRepository;
import camt.cbsd.lab05.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;

@ConfigurationProperties(prefix = "server")
@Component
public class DataLoader implements ApplicationRunner {
    AccountDao accountDao;
    User user1,user2,user3;

    @Autowired
    UserRepository userRepository;
    @Autowired
    AuthorityRepository authorityRepository;

    @Autowired
    public void setAccountDao(AccountDao accountDao) {
        this.accountDao = accountDao;

    }

    @Autowired
    ProductDao productDao;

    String baseUrl;
    String imageUrl;
    String productImgUrl;
    String imageBaseUrl;

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setProductImgUrl(String productImgUrl){ this.productImgUrl = productImgUrl; }

    @Transactional
    @Override
    public void run(ApplicationArguments args) throws Exception {

        imageBaseUrl = "http://localhost:8080/images/product/";

        Product product1 = Product.builder().productName("Cat 01").productDescription("I once peed on Nelson Mandela's cat. They had it coming. Some people say I'm the Samwise Gamgee of the group. In time you'll learn how purrfect I am.").productPrice(5000).productImage(imageBaseUrl+"cat01.jpg").build();
        Product product2 = Product.builder().productName("Cat 02").productDescription("All you need to know about me is I hate cantaloupe with a passion. It wasn't heavily publicized, but I once had a brief relationship with Cheshire Cat. Can you make my wondrous dreams come true?").productPrice(200).productImage(imageBaseUrl+"cat02.jpg").build();
        Product product3 = Product.builder().productName("Cat 03").productDescription("I'm often referred to as the Cersei Lannister of the group. I'm convinced that the world is flat. One day I'll prove it. I think you'll love me beclaws I have cattitude.").productImage(imageBaseUrl+"cat03.jpg").productPrice(6950).build();
        Product product4 = Product.builder().productName("Cat 04").productDescription("My friends describe me as wondrous and preposterous. When my owner isn't watching, I steal their brooches and use them for litter paper. I'm not sorry. We're so fur-tunate to have found each other!").productImage(imageBaseUrl+"cat04.jpg").productPrice(655).build();
        Product product5 = Product.builder().productName("Cat 05").productDescription("My friends describe me as prickly and gullible. My secret indulgence is chocolate. I hope we can be pawmates.").productImage(imageBaseUrl+"cat05.jpg").productPrice(59595).build();
        Product product6 = Product.builder().productName("Cat 06").productDescription("I'm here to enjoy sitting on your computer and picking on mice. I'm often described as petulant, and I own it. Maybe you and I can be partners in crime.").productImage(imageBaseUrl+"cat06.jpg").productPrice(5850).build();



        productDao.saveProduct(product1);
        productDao.saveProduct(product2);
        productDao.saveProduct(product3);
        productDao.saveProduct(product4);
        productDao.saveProduct(product5);
        productDao.saveProduct(product6);


        Account account1 = Account.builder().studentId("SE-001").name("Mitsuha").surname("Miyamizu").build();
        Account account2 = Account.builder().studentId("SE-002").name("Prayuth").surname("The minister").build();
        Account account3 = Account.builder().studentId("SE-003").name("Jurgen").surname("Kloop").build();
//
//        Course course1 = Course.builder().courseId("953331").courseName("CBSD").build();
//        Course course2 = Course.builder().courseId("953323").courseName("Software Construction").build();
//        Course course3 = Course.builder().courseId("953499").courseName("Software Project").build();
//
//        courseDao.add(course1);
//        courseDao.add(course2);
//        courseDao.add(course3);
        accountDao.addAccount(account1);
        accountDao.addAccount(account2);
        accountDao.addAccount(account3);
//
//        account1.addCourse(course1);
//        account1.addCourse(course2);
//        account2.addCourse(course2);
//        account2.addCourse(course3);
//        account3.addCourse(course1);
//        account3.addCourse(course3);
        securitySetup();

        account1.setUser(user1);
        user1.setAccount(account1);
        account2.setUser(user2);
        user2.setAccount(account2);
        account3.setUser(user3);
        user3.setAccount(account3);
    }



    private void securitySetup() {
        Authority auth1 = Authority.builder().name(AuthorityName.ROLE_CUSTOMER).build();
        Authority auth2 = Authority.builder().name(AuthorityName.ROLE_SHOPKEEPER).build();
        Authority auth3 = Authority.builder().name(AuthorityName.ROLE_ADMIN).build();
        authorityRepository.save(auth1);
        authorityRepository.save(auth2);
        authorityRepository.save(auth3);
        user1 = User.builder()
                .username("admin")
                .password("admin")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016,01,01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();

        user2 = User.builder()
                .username("shopkeeper")
                .password("shopkeeper")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016,01,01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();
        user3 = User.builder()
                .username("customer")
                .password("customer")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016,01,01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();
        user1.setAuthorities(new ArrayList<>());
        user1.getAuthorities().add(auth3);
        user2.setAuthorities(new ArrayList<>());
        user2.getAuthorities().add(auth2);
        user3.setAuthorities(new ArrayList<>());
        user3.getAuthorities().add(auth1);
        user1.setPassword(new BCryptPasswordEncoder().encode(user1.getPassword()));
        user2.setPassword(new BCryptPasswordEncoder().encode(user2.getPassword()));
        user3.setPassword(new BCryptPasswordEncoder().encode(user3.getPassword()));
        userRepository .save(user1);
        userRepository .save(user2);
        userRepository .save(user3);


    }
}


