package camt.cbsd.lab05.service;

import camt.cbsd.lab05.entity.Account;

import java.util.List;

public interface AccountService {
    List<Account> getStudents();
    Account findById(long id);
    Account addAccount(Account account);
    Account getStudentForTransfer(String username);
}
