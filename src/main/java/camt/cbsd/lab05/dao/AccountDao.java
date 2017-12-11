package camt.cbsd.lab05.dao;

import camt.cbsd.lab05.entity.Account;

import java.util.List;

public interface AccountDao {
    List<Account> getAccounts();
    Account findById(long id);
    Account addAccount(Account account);
    Account findByUsername(String username);

    Integer size();
}
