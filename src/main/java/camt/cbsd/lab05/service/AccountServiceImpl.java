package camt.cbsd.lab05.service;

import camt.cbsd.lab05.dao.AccountDao;
import camt.cbsd.lab05.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.List;


//@ConfigurationProperties(prefix = "server")
@Service
public class AccountServiceImpl implements AccountService {
    String imageBaseUrl;
    String baseUrl;
    String imageUrl;
    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @PostConstruct
    protected void setImageBaseUrl(){
        this.imageBaseUrl = this.baseUrl + this.imageUrl;
    }

    @Autowired
    AccountDao accountDao;
    public List<Account> getStudents(){

        return accountDao.getAccounts();
    }

    @Override
    @Transactional
    public Account findById(long id) {
        Account account = accountDao.findById(id);
//        Hibernate.initialize(account.getEnrolledCourse());
        return account;
    }

    @Override
    public Account addAccount(Account account) {
        return accountDao.addAccount(account);
    }

    @Transactional
    @Override
    public Account getStudentForTransfer(String username) {
        Account account = accountDao.findByUsername(username);
//        Hibernate.initialize(account.getAuthorities());
        return account;
    }
}
