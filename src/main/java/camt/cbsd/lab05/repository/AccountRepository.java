package camt.cbsd.lab05.repository;

import camt.cbsd.lab05.entity.Account;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<Account, Long> {
    Account findById(Long id);
    Account findByUserUsername(String username);
}
