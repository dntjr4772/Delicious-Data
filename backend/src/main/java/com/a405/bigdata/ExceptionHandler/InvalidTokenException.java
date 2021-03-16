package com.a405.bigdata.ExceptionHandler;

public class InvalidTokenException extends RuntimeException{

    public InvalidTokenException() {
    }

    public InvalidTokenException(String message) {
        super(message);
    }
}
