window.CAN_LESSONS.push({
  "title": "The CAN Physical Layer",
  "short": "Explore differential signals, dominant and recessive bits, and bus termination.",
  "time": 20,
  "video": "How Can Two Wires Carry Data?",
  "outcome": "Describe CAN-H/CAN-L signalling and explain termination.",
  "sections": [
    [
      "Two signals, one difference",
      "High-speed CAN typically uses two conductors (wires) called CAN_H and CAN_L. Receivers interpret the difference between their voltages rather than relying solely on one wire relative to ground. This helps reject noise that affects both conductors similarly, since they are being subtracted from each other."
    ],
    [
      "Dominant and recessive states",
      "For a typical high-speed CAN transceiver, a recessive bit (logical 1) has both lines near 2.5 V, giving a differential voltage near zero. A dominant bit (logical 0) typically drives CAN_H near 3.5 V and CAN_L near 1.5 V, giving roughly 2 V differential. These values are illustrative, not universal guaranteed limits."
    ],
    [
      "Why a twisted pair?",
      "Twisting the wires helps external interference affect both lines the same so they are equally as noisy so later on when they are subtracted from each other, we maintain signal integrity, these disturbances are called common mode disturbances. A suitable transceiver converts the CAN controller's digital TX/RX (transmission and receiving) signals into bus-level electrical signals which are 1s and 0s."
    ],
    [
      "Why 120-ohm termination?",
      "A conventional high-speed CAN linear bus uses a 120 Ω termination resistor at each physical end. Proper termination reduces signal reflections that could corrupt communication. Two 120 Ω terminations appear as about 60 Ω across CAN_H and CAN_L when the bus is unpowered and no other parallel loads materially affect the reading."
    ]
  ],
  "activity": "voltage",
  "quiz": [
    [
      "Which two lines carry a typical high-speed CAN signal?",
      [
        "SDA and SCL",
        "TX and RX only",
        "CAN_H and CAN_L",
        "MOSI and MISO"
      ],
      2,
      "The physical bus uses CAN_H and CAN_L."
    ],
    [
      "In high-speed CAN, which bit is dominant?",
      [
        "Logical 0",
        "Logical 1",
        "Both bits equally",
        "Neither bit"
      ],
      0,
      "Logical 0 is dominant; logical 1 is recessive."
    ],
    [
      "Why is differential signalling useful?",
      [
        "It eliminates all noise",
        "It helps reject noise common to both wires",
        "It doubles the number of messages",
        "It removes the need for transceivers"
      ],
      1,
      "A differential receiver responds to the voltage difference, helping reject common-mode noise."
    ],
    [
      "Where are the usual two termination resistors placed?",
      [
        "At each ECU",
        "At the two physical ends of the bus",
        "Only at the dashboard",
        "Between the battery and chassis"
      ],
      1,
      "A conventional linear high-speed CAN bus is terminated at both physical ends."
    ]
  ]
});
