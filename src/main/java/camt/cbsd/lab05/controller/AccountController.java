package camt.cbsd.lab05.controller;

import camt.cbsd.lab05.entity.Account;
import camt.cbsd.lab05.entity.AccountData;
import camt.cbsd.lab05.entity.security.Authority;
import camt.cbsd.lab05.entity.security.AuthorityName;
import camt.cbsd.lab05.entity.security.User;
import camt.cbsd.lab05.security.repository.AuthorityRepository;
import camt.cbsd.lab05.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AccountController {
        AccountService accountService;
        @Autowired
        AuthorityRepository authorityRepository;
        @Autowired
        public void setAccountService(AccountService accountService) {
            this.accountService = accountService;
        }

        @CrossOrigin
        @GetMapping("/account")
        public ResponseEntity<?> getAccounts() {

            List<Account> accounts = accountService.getAccounts();
            return ResponseEntity.ok(accounts);
        }

        @CrossOrigin
        @GetMapping("account/{id}")
        public ResponseEntity getAccount(@PathVariable("id")long id){
            Account account = accountService.findById(id);
            if (account != null)
                return ResponseEntity.ok(account);
        else
            //http code 204
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }


    @PostMapping("/account/create/shopkeeper")
    public ResponseEntity<?> addShopkeeper(@RequestBody AccountData accountData){
//        accountService.addAccount(account);
        Account account = new Account();
        account.setId(50);
        account.setName(accountData.getFirstName());
        account.setSurname(accountData.getLastName());
        User user = new User();
        user.setUsername(accountData.getUsername());
        user.setPassword(accountData.getPassword());
        user.setEnabled(Boolean.TRUE);
        user.setAuthorities(new ArrayList<>());
//        Authority shopkeeper = Authority.builder().name(AuthorityName.ROLE_SHOPKEEPER).build();
//        authorityRepository.save(shopkeeper);
        user.getAuthorities().add(authorityRepository.findByName(AuthorityName.ROLE_SHOPKEEPER));
        user.setAccount(account);
        account.setUser(user);
        accountService.addAccount(account);
        return ResponseEntity.ok(account);
    }

    @PostMapping("account/delete/{id}")
    public ResponseEntity deleteProduct(@PathVariable("id")long id){
        Account account = accountService.findById(id);
        if(account!=null){
            accountService.delete(account);
            return ResponseEntity.ok(account);
        }else{
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }
}
