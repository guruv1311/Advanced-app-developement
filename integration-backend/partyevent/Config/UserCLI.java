package com.partyevent.partyevent.Config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.partyevent.partyevent.Entity.User;
import com.partyevent.partyevent.Repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner {

    private final UserRepository usersRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (usersRepository.count() > 0)
            return;
        var user = User.builder()
                .name("Admin")
                .email("guru@gmail.com")
                .password(passwordEncoder.encode("guru@123"))
              
                .role(com.partyevent.partyevent.Entity.Role.ADMIN)
                .build();
        usersRepository.save(user);
    }

}