package com.proqure.urlshortner.models

import com.fasterxml.jackson.annotation.JsonProperty

class EncodeRequest (
    @JsonProperty("url") var url: String?
)

