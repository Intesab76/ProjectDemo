package com.example.demo.dao;

import com.example.demo.model.BankCustomer;

import java.util.List;

public interface BankDAO {

    List<BankCustomer> get();

    BankCustomer get(String username);

    void save(BankCustomer bankCustomer);

    void delete(String username);



}
