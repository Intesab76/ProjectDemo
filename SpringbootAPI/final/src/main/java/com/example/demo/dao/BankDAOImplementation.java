package com.example.demo.dao;

import com.example.demo.model.BankCustomer;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class BankDAOImplementation implements  BankDAO{

    @Autowired
    EntityManager entityManager;


    @Override
    public List<BankCustomer> get() {

      Session currentSession = entityManager.unwrap(Session.class);
      Query<BankCustomer> query = currentSession.createQuery("from BankCustomer" , BankCustomer.class);
      List<BankCustomer> list = query.getResultList();
      return list;
    }

    @Override
    public BankCustomer get(String username) {

        Session currentSession = entityManager.unwrap(Session.class);
        BankCustomer bankCustomer = currentSession.get(BankCustomer.class , username);
        return  bankCustomer;
    }

    @Override
    public void save(BankCustomer bankCustomer) {

        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(bankCustomer);
    }

    @Override
    public void delete(String username) {

        Session currentSession = entityManager.unwrap(Session.class);
        BankCustomer bankCustomerObj = currentSession.get(BankCustomer.class , username);
        currentSession.delete(bankCustomerObj);

    }
}
