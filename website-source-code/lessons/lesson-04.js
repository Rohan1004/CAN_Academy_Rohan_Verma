window.CAN_LESSONS.push({
  "title": "Arbitration and Priority",
  "short": "Watch two ECUs compete to transmit without destroying the winning message.",
  "time": 20,
  "video": "What Happens When Two ECUs Talk at Once?",
  "outcome": "Predict arbitration winners from CAN identifiers.",
  "sections": [
    [
      "When two nodes start together",
      "CAN uses carrier sense multiple access with collision resolution through bitwise arbitration. When the bus is idle, multiple controllers may begin transmitting. They monitor the actual bus level while sending the identifier."
    ],
    [
      "Dominant wins over recessive",
      "A dominant 0 overrides a recessive 1. If a controller sends recessive 1 but reads dominant 0 during arbitration, it stops transmitting and becomes a receiver. The winning message continues without being corrupted by the competition."
    ],
    [
      "Lower ID, higher priority",
      "For two otherwise comparable standard data frames, the lower numerical identifier wins because it places a dominant bit at the first differing identifier position. For example, 0x100 has priority over 0x200. Frame-format and RTR rules also matter in more general cases."
    ],
    [
      "What about the loser?",
      "The losing node waits until the bus is available and can attempt transmission again. Arbitration is not an error. High-priority traffic can therefore gain lower latency, but network design must also account for bus load and potential delays to lower-priority messages."
    ]
  ],
  "activity": "arbitration",
  "quiz": [
    [
      "Two standard data frames start together: ID 0x120 and ID 0x220. Which wins?",
      [
        "0x220",
        "0x120",
        "Both transmit fully",
        "Neither can transmit"
      ],
      1,
      "The lower numerical identifier, 0x120, has higher arbitration priority."
    ],
    [
      "Which bus state overrides the other?",
      [
        "Recessive overrides dominant",
        "Dominant overrides recessive",
        "The last transmitter always wins",
        "The higher voltage always means recessive"
      ],
      1,
      "Dominant (logical 0) overrides recessive (logical 1)."
    ],
    [
      "What does a node do after losing arbitration?",
      [
        "Destroys the winning frame",
        "Reports a CRC error immediately",
        "Stops transmitting and waits to retry",
        "Disconnects permanently"
      ],
      2,
      "A losing node stops transmitting and may try again when the bus becomes available."
    ],
    [
      "Why is CAN arbitration called non-destructive?",
      [
        "It prevents any node from waiting",
        "The winning frame continues intact",
        "It never has errors",
        "All messages are delivered simultaneously"
      ],
      1,
      "The highest-priority frame is not corrupted by the arbitration process."
    ]
  ]
});
