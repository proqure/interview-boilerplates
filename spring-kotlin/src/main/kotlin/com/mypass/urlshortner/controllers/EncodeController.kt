package com.mypass.urlshortner.controllers

import com.mypass.urlshortner.models.EncodeRequest
import com.mypass.urlshortner.models.EncodeResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class EncodeController {

    @PostMapping("/encode")
    fun encode(@RequestBody encodeRequest: EncodeRequest): ResponseEntity<EncodeResponse> {
        val response = "request url ${encodeRequest.url}"
        return ResponseEntity.ok(EncodeResponse(response))
    }
}