package com.example.demo.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "bank_details")
public class BankCustomer {

    @Column
    private String firstname;

    @Column
    private String lastname;

    @Id
    @Column(name = "username",unique = true)
    private String username;

    @Column
    private String gender;

    @Column
    private String email;

    @Column
    private String passwrd;

    @Column
    private Date dob;


    public BankCustomer(){

    }

    public BankCustomer(String firstname, String lastname, String username, String gender,
                        String email, String passwrd, Date dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.gender = gender;
        this.email = email;
        this.passwrd = passwrd;
        this.dob = dob;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswrd() {
        return passwrd;
    }

    public void setPasswrd(String passwrd) {
        this.passwrd = passwrd;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    @Override
    public String toString() {
        return "BankCustomer{" +
                "firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", username='" + username + '\'' +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", passwrd='" + passwrd + '\'' +
                ", dob=" + dob +
                '}';
    }
}
