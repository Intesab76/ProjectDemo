package com.example.demo.service;

import com.example.demo.model.BankCustomer;

import java.util.List;

public interface BankService {

    List<BankCustomer> get();

    BankCustomer get(String username);

    void save(BankCustomer bankCustomer);

    void delete(String username);

}
