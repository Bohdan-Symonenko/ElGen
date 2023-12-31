package com.elgen.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "attachment")
public class Attachment {
    @Id
    @JsonProperty(value = "Attachment_id")
    @Column(name = "attachment_id", columnDefinition = "serial")
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter
    private Long attachment_id;

    @ManyToOne
    @JoinColumn(name = "message_id")
    @Getter @Setter
    private Message message;

    @JsonProperty(value = "Attachment_name")
    @Column(name = "attachment_name")
    @Getter @Setter
    private String attachment_name;

//    private Blob attachment_data;

}
