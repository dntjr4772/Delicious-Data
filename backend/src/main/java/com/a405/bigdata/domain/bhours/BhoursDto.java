package com.a405.bigdata.domain.bhours;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

public class BhoursDto {
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class hours{
        private int type;
        private int weekType;
        private int mon;
        private int tue;
        private int wed;
        private int thu;
        private int fri;
        private int sat;
        private int sun;
        private Date startTime;
        private Date endTime;
        private String etc;
    }
}
