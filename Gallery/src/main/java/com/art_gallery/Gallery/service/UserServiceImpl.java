package com.art_gallery.Gallery.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.art_gallery.Gallery.model.User;
import com.art_gallery.Gallery.payload.LoginRequest;
import com.art_gallery.Gallery.payload.RegisterRequest;
import com.art_gallery.Gallery.repo.UserRepositary;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepositary  userRepository;

    @Override
    public String registerUser(RegisterRequest request) {

        Optional<User> emailUser = userRepository.findByEmail(request.getEmail());
        if (emailUser.isPresent()) {
            return "Email already exists";
        }

        Optional<User> usernameUser = userRepository.findByUsername(request.getUsername());
        if (usernameUser.isPresent()) {
            return "Username already exists";
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        userRepository.save(user);

        return "User Created Successfully";
    }

    @Override
    public String loginUser(LoginRequest request) {

        Optional<User> user = userRepository.findByEmail(request.getEmail());

        if (user.isEmpty()) {
            return "Invalid Email";
        }

        if (!user.get().getPassword().equals(request.getPassword())) {
            return "Invalid Password";
        }

        return "Login Successful";
    }
}
