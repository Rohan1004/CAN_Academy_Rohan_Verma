window.CAN_LESSONS.push({
  "title": "Messages and Frames",
  "short": "Decode identifiers, payloads, CRC, ACK and the structure of a CAN frame.",
  "time": 20,
  "video": "What Is Inside a CAN Message?",
  "outcome": "Identify the major fields in a classical CAN data frame.",
  "sections": [
    [
      "Messages, not device addresses",
      "CAN broadcasts frames identified by an arbitration identifier (CAN ID), this tells nodes what type of information is being sent, such as engine temperature or speed, and determines priority on the CAN bus. In Classical CAN, standard frames use an 11-bit identifier (0 – 2047, or 0x000 – 0x7FF) and extended frames use a 29-bit identifier. The lower the number the more important the data is, this is due to 0 being the dominant bit and 1 being the recessive bit. Software often maps identifiers to signals, such as engine speed or wheel speed."
    ],
    [
      "A classical data frame",
      "A Classical CAN data frame includes start of frame, an arbitration field, control information, a data field, a CRC field, an ACK field and end of frame. CRC refers to cyclical redundancy check; it is an error detection method that is used to check if the received message has been corrupted during transmission. The CRC value is calculated from the message; this is also how online shopping places can instantly see if your credit card numbers are valid without first sending it to your bank. ACK refers to acknowledgment which is a mechanism in CAN communication used to confirm that at least one receiving ECU has successfully received a message. This is done by the sending ECU including a recessive 1 in the ACK field and the receiving ECU sending a 0 to show successful data transmission, if it sends a 1 then the protocol will trigger a retransmission. The exact bit layout differs between standard and extended frames. Classical CAN carries 0–8 data bytes in a data frame."
    ],
    [
      "What is DLC?",
      "The Data Length Code (DLC) describes the payload length which is just the actual data being sent. For a Classical CAN data frame, DLC values 0 through 8 indicate that many data bytes. CAN FD allows larger payloads with a different DLC mapping for values above 8."
    ],
    [
      "Bit stuffing",
      "To maintain clock synchronisation, CAN inserts a complementary stuff bit after five consecutive bits of the same polarity in the bit-stuffed region. These inserted bits are not application data. Bit stuffing also participates in error detection."
    ]
  ],
  "activity": "frame",
  "quiz": [
    [
      "How many data bytes can a Classical CAN data frame carry?",
      [
        "Up to 4",
        "Up to 8",
        "Up to 32",
        "Up to 64"
      ],
      1,
      "Classical CAN data frames carry up to eight data bytes."
    ],
    [
      "How long is a standard CAN identifier?",
      [
        "8 bits",
        "11 bits",
        "16 bits",
        "29 bytes"
      ],
      1,
      "A standard CAN identifier is 11 bits long."
    ],
    [
      "What does the CRC field help detect?",
      [
        "Incorrect termination placement",
        "Transmission errors",
        "Engine overheating",
        "The sender location"
      ],
      1,
      "The CRC provides error detection over the protected frame bits."
    ],
    [
      "Why does CAN use bit stuffing?",
      [
        "To encrypt data",
        "To support synchronisation and detect stuffing violations",
        "To increase the payload to 64 bytes",
        "To give every ECU a unique address"
      ],
      1,
      "Stuff bits create transitions for synchronisation and stuffing-rule violations can be detected."
    ]
  ]
});
