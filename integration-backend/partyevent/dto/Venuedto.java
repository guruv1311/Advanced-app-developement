package com.partyevent.partyevent.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Venuedto {
    private Long venueid;
    private String venuename;
    private String venuelocation;
    private String venueimg;
    private  Long eveid;
 }