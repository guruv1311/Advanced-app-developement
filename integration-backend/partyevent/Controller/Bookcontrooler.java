package com.partyevent.partyevent.Controller;

import com.partyevent.partyevent.Entity.Book;
import com.partyevent.partyevent.dto.Bookdto;
import com.partyevent.partyevent.service1.Bookservice;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookevent")
@CrossOrigin("*")
public class Bookcontrooler {

    private final Bookservice bookservice;

    public Bookcontrooler(Bookservice bookservice) {
        this.bookservice = bookservice;
    }
    
    @GetMapping
    public ResponseEntity<List<Bookdto>> getAllServices() {
        List<Bookdto> services = bookservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    @PostMapping("/posts")
    public ResponseEntity<Bookdto> createService1(@RequestBody Bookdto service) {
        Bookdto createdService = bookservice.createService1(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    @GetMapping("/{userid}")
    public List<Book> getmovie(@PathVariable("userid") long userid) {
       return bookservice.getfood(userid);
    }
    

    @PutMapping("/update/{bookingID}")
    public ResponseEntity<Bookdto> updateStatusById(@PathVariable long bookingID, @RequestBody String status) {
    Bookdto updatedServiceDto = bookservice.updateStatusById(bookingID, status);
    if (updatedServiceDto != null) {
        return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

@DeleteMapping("/{bookingID}")
    public ResponseEntity<Void> deleteServiceByEventId(@PathVariable String bookingID) {
        // Convert eventid from String to Long
        Long eventIdLong;
        try {
            eventIdLong = Long.parseLong(bookingID);
        } catch (NumberFormatException e) {
            // If the conversion fails, respond with a 400 Bad Request
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            bookservice.deleteServiceByBookingId(eventIdLong);
            // If deletion is successful, respond with a 204 No Content
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (EntityNotFoundException e) {
            // If the service to delete is not found, respond with a 404 Not Found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}