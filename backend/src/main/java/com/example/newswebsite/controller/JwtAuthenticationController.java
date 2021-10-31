package com.example.newswebsite.controller;


import com.example.newswebsite.configuration.JwtTokenUtil;
import com.example.newswebsite.model.JwtRequest;
import com.example.newswebsite.model.JwtResponse;
import com.example.newswebsite.services.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;


@RestController
//@RequestMapping(CommentController.BASE_URL)
@CrossOrigin(origins = "http://localhost:3000")
public class JwtAuthenticationController {

//    private String BASE_URL = "/api/v2";

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/api/v2/authenticate", method = RequestMethod.POST)
//    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        System.out.println(authenticationRequest);
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());


        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);
        JwtResponse newToken = new JwtResponse(token);
        return ResponseEntity.ok(newToken);
    }

    private void authenticate(String username, String password) throws Exception {
        try {

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}