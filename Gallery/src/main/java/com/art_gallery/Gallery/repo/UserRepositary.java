package com.art_gallery.Gallery.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.art_gallery.Gallery.model.User;

@Repository
public interface UserRepositary extends JpaRepository<User, Long>{
     Optional<User> findByEmail(String email);
     Optional<User> findByUsername(String username);
}
