window.CAN_LESSONS.push({
  "title": "Errors and Reliability",
  "short": "Discover how CAN detects corrupted frames and isolates faulty nodes.",
  "time": 20,
  "video": "How Does CAN Know a Message Is Wrong?",
  "outcome": "Recognise CAN error mechanisms and fault-confinement states.",
  "sections": [
    [
      "CAN checks its own traffic",
      "CAN includes several error-detection mechanisms: bit monitoring, bit-stuffing checks, frame-format checks, cyclic redundancy check (CRC), and acknowledgement checks. These mechanisms detect many communication faults, but CAN is not a guarantee of perfect delivery."
    ],
    [
      "ACK and retransmission",
      "During the ACK slot, a receiver that correctly checks a frame can assert a dominant acknowledgement. A sender that does not observe an ACK detects an ACK error. Error handling and automatic retransmission depend on the controller state and configuration."
    ],
    [
      "Error flags",
      "When an error is detected, CAN nodes may transmit an error flag to indicate the current frame should be discarded. The bus then returns to a state where retransmission can be attempted. Details differ for error-active and error-passive nodes."
    ],
    [
      "Fault confinement",
      "Transmit and receive error counters help determine whether a controller is error-active, error-passive or bus-off. Bus-off isolates a severely faulty transmitter from the bus. Recovery is controlled by the protocol and controller implementation."
    ]
  ],
  "activity": "errors",
  "quiz": [
    [
      "What is the main purpose of a CRC?",
      [
        "Assign an ECU address",
        "Detect corrupted transmission data",
        "Increase the data rate",
        "Measure bus voltage"
      ],
      1,
      "The CRC helps receivers detect errors in the transmitted frame."
    ],
    [
      "What does a dominant bit in the ACK slot indicate?",
      [
        "At least one receiver acknowledged the frame",
        "Every ECU processed the application data",
        "The message has the highest priority",
        "The bus is disconnected"
      ],
      0,
      "At least one receiver that checked the frame correctly may assert ACK; it does not guarantee application-level processing."
    ],
    [
      "What does bus-off mean?",
      [
        "The ignition is off",
        "A node is isolated after severe errors",
        "The bus changes to SPI",
        "All nodes are in sleep mode"
      ],
      1,
      "Fault confinement can place a controller into bus-off after excessive transmission errors."
    ],
    [
      "Does CAN guarantee that every application acts on a transmitted frame?",
      [
        "Yes, always",
        "Only if the ID is 0",
        "No, protocol-level reception is not application-level action",
        "Only with 120-ohm resistors"
      ],
      2,
      "Acknowledgement does not prove that every intended application processed the message."
    ]
  ]
});
