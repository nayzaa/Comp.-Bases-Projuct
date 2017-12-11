package camt.cbsd.lab05.dao;


import camt.cbsd.lab05.entity.Account;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.List;

@Profile("firstDataSource")
@ConfigurationProperties(prefix = "server")
@Repository
public class AccountDaoImpl implements AccountDao {

    List<Account> accounts;
    String imageBaseUrl;
    String baseUrl;
    String imageUrl;
    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public List<Account> getAccounts(){
        return accounts;
    }

    @Override
    public Account findById(long id) {
        return accounts.stream().filter(s -> s.getId() == id).findFirst().orElse(null);
    }

    @Override
    public Account addAccount(Account account) {
        account.setImage(this.imageBaseUrl+ account.getImage());
        if (accounts.add(account)){
            return account;
        }else
        {
            return null;
        }
    }

    @Override
    public Account findByUsername(String username) {
        return null;
    }

    @Override
    public Integer size() {
        return accounts.size();
    }

    @PostConstruct
    protected void init(){
//        this.imageBaseUrl = this.baseUrl + this.imageUrl;
//        accounts = new ArrayList<>();
//        Account account = new Account(1, "SE-001", "Mitsuha", "Miyamizu",
//                2.15, imageBaseUrl +"mitsuha.gif", true, 0,
//                "The most beloved one",null);
//        accounts.add(account);
//        account = new Account(2, "SE-002", "Prayuth", "The minister",
//                3.59, imageBaseUrl+ "tu.jpg", false, 15,
//                "The great man ever!!!!",null);
//        accounts.add(account);
//        account = new Account(3, "SE-003", "Jurgen", "Kloop",
//                2.15, imageBaseUrl + "Kloop.gif", true, 2,
//                "The man for the Kop",null);
//        accounts.add(account);
    }

}
