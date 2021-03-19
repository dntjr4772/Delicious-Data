package com.a405.bigdata.domain.bhours;

import com.a405.bigdata.domain.store.Store;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Bhours {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private int type;
    private int weekType;
    private int mon;
    private int tue;
    private int wed;
    private int thu;
    private int fri;
    private int sat;
    private int sun;
    @Temporal(TemporalType.TIME)
    private Date startTime;
    @Temporal(TemporalType.TIME)
    private Date endTime;
    @Column(columnDefinition = "TEXT")
    private String etc;
    @OneToOne
    private Store store;
}
