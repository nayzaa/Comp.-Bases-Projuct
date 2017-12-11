package camt.cbsd.lab05.controller;

import camt.cbsd.lab05.entity.Account;
import camt.cbsd.lab05.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {
        AccountService accountService;
        @Autowired
        public void setAccountService(AccountService accountService) {
            this.accountService = accountService;
        }

        @CrossOrigin
        @GetMapping("/account")
        public ResponseEntity<?> getAccounts() {

            List<Account> accounts = accountService.getStudents();
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


    @PostMapping("/account")
    public ResponseEntity<?> uploadOnlyAccount(@RequestBody Account account){
        accountService.addAccount(account);
        return ResponseEntity.ok(account);
    }

}
