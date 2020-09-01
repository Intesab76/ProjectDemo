package com.example.demo.controller;


import com.example.demo.model.BankCustomer;
import com.example.demo.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class BankController {

    @Autowired
    BankService bankService;


    @RequestMapping("/bank")
    public List<BankCustomer> get(){

        return bankService.get();

    }

    @RequestMapping(method = RequestMethod.POST , value = "/bank")
    public String save(@RequestBody BankCustomer bankCustomer){
        bankService.save(bankCustomer);
        return "Customer details added successfully !!";
    }

    @RequestMapping("/bank/{username}")
    public BankCustomer get(@PathVariable  String username){

        BankCustomer bankCustomerObj = bankService.get(username);
        if(bankCustomerObj == null){

            throw new RuntimeException("Customer with the username "+ username + " does not exist .");
        }
        else
            return bankCustomerObj;
    }


    @RequestMapping(method = RequestMethod.PUT , value = "/bank/{username}")
    public String update(@RequestBody BankCustomer bankCustomer){

        bankService.save(bankCustomer);
        return "Data updated for the customer with the stated username::";
    }

    @RequestMapping(method = RequestMethod.DELETE , value = "/bank/{username}")
    public String delete(@PathVariable String username){

        bankService.delete(username);
        return "Data deleted for the customer with the username:: " +  username ;
    }
}
