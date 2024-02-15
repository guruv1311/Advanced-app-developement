package com.partyevent.partyevent.Controller;

import com.partyevent.partyevent.Entity.Venue;
import com.partyevent.partyevent.dto.Venuedto;
import com.partyevent.partyevent.service1.Venueservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/venue")
@CrossOrigin("*")
public class Venuecontroller {

    private final Venueservice bookservice;

    public Venuecontroller(Venueservice bookservice) {
        this.bookservice = bookservice;
    }
    
    @GetMapping
    public ResponseEntity<List<Venuedto>> getAllServices() {
        List<Venuedto> services = bookservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    @PostMapping("/posts")
    public ResponseEntity<Venuedto> createService2(@RequestBody Venuedto service) {
        Venuedto createdService = bookservice.createService2(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    @GetMapping("/{eveid}")
    public List<Venue> getmovie(@PathVariable("eveid") long eveid) {
       return bookservice.getfood(eveid);
    }

    
       
}
