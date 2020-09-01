package com.example.demo.service;

import com.example.demo.dao.BankDAO;
import com.example.demo.model.BankCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BankServiceImplementation  implements  BankService{

    @Autowired
    BankDAO bankDAO;

    @Transactional
    @Override
    public List<BankCustomer> get() {
        return bankDAO.get();
    }


    @Transactional
    @Override
    public BankCustomer get(String username) {

        return bankDAO.get(username);
    }

    @Transactional
    @Override
    public void save(BankCustomer bankCustomer) {

        bankDAO.save(bankCustomer);

    }

    @Transactional
    @Override
    public void delete(String username) {

        bankDAO.delete(username);

    }
}
