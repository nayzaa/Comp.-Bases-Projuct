package camt.cbsd.lab05.service;

import camt.cbsd.lab05.entity.Account;

import java.util.List;

public interface AccountService {
    List<Account> getAccounts();
    Account findById(long id);
    Account addAccount(Account account);
    Account getAccountForTransfer(String username);
    void delete(Account account);
}
