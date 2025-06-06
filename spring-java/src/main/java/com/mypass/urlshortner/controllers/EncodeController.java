package com.proqure.urlshortner.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import com.proqure.urlshortner.models.EncodeRequest;
import com.proqure.urlshortner.models.EncodeResponse;

@RestController
public class EncodeController {
    @PostMapping("/encode")
    public ResponseEntity<EncodeResponse> encode(@RequestBody EncodeRequest encodeRequest) {
        String response = String.format("request url %s", encodeRequest.url);

        return ResponseEntity.ok(new EncodeResponse(response));
    }
}