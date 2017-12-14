package camt.cbsd.lab05.dao;

import camt.cbsd.lab05.entity.Account;
import camt.cbsd.lab05.repository.AccountRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Profile("DBDataSource")
public class AccountDaoDBImpl implements AccountDao {
    AccountRepository accountRepository;
    @Autowired
    public void setAccountRepository(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }
    @Override
    public List<Account> getAccounts() {

        return Lists.newArrayList(accountRepository.findAll());

    }

    @Override
    public Account findById(long id) {
        return accountRepository.findById(id);
    }

    @Override
    public Account addAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account findByUsername(String username) {
        return accountRepository.findByUserUsername(username);
    }

    @Override
    public Integer size() {
        return (int) accountRepository.count();
    }

    @Override
    public void delete(Account account) {
        accountRepository.delete(account);
    }

}
