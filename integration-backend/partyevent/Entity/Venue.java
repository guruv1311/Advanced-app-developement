package com.partyevent.partyevent.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Venue")
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long venueid;

    @Column(name="venuename", nullable = false)
    private String venuename;

    @Column(name="venueloc", nullable = false )
    private String venuelocation;

    @Column(name="venueimg", nullable = false )
    private String venueimg;

    @Column(name="eveid", nullable = false)
    private Long eveid;

}
