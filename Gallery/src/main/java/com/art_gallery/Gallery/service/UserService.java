package com.art_gallery.Gallery.service;

import com.art_gallery.Gallery.payload.LoginRequest;
import com.art_gallery.Gallery.payload.RegisterRequest;

public interface UserService {

    String registerUser(RegisterRequest request);

    String loginUser(LoginRequest request);
}
