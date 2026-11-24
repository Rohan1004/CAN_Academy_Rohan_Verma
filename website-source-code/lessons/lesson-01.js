window.CAN_LESSONS.push({
  "title": "Why Do Cars Need CAN?",
  "short": "Introduce the electronic control units and discover why they need a shared network to function at their best.",
  "time": 15,
  "video": "Your Car Has a Group Chat",
  "outcome": "Explain what an ECU is, why electronic modules exchange data, and the purpose of CAN.",
  "sections": [
    [
      "Your car is a network of computers",
      "An electronic control unit (ECU) is computer that monitors or controls part of a vehicle. It can be slightly different  on every vehicle, generally modules may handle engine management, braking, body electronics, climate control and instrument displays. These modules often need to exchange information. For example, a dashboard may need vehicle speed from the speed sensor, so it can update the gauge cluster and show the driver how fast the car is moving."
    ],
    [
      "The wiring problem",
      "Imagine every pair of modules requiring its own dedicated communication link to each other, it would look like a messy spider’s web. As more modules exchange data, the wiring becomes harder to design, maintain and expand. A shared communication bus allows several modules to use the same communication medium, reducing the need for individual point-to-point links."
    ],
    [
      "Meet CAN",
      "CAN stands for Controller Area Network. It is a message-based serial communication protocol developed for reliable communication among electronic controllers. Nodes, which are the individual devices, transmit frames containing an identifier and data. Frames are broadcast over the bus, and receivers can filter identifiers to decide which information to process. The identifier describes the message, not the destination address."
    ],
    [
      "Where CAN fits",
      "CAN is widely used in vehicles, industrial automation, machinery and embedded control systems. This unit will focus on CAN in a vehicle environment, usually in such cases there will be a lot of electrical noise from other neighboring devices, CAN is able to remove that noise, later we will explore how it does that. It is not the only network in a car: different vehicles also use LIN, Ethernet and other networks. Later lessons explore how CAN handles simultaneous transmissions and errors."
    ]
  ],
  "activity": "network",
  "quiz": [
    [
      "What is an ECU?",
      [
        "A type of car battery",
        "An embedded computer controlling or monitoring a function",
        "A dedicated CAN wire",
        "A radio antenna"
      ],
      1,
      "An ECU is an electronic control unit: an embedded computer that performs vehicle functions."
    ],
    [
      "What does CAN stand for?",
      [
        "Computer Access Network",
        "Control Area Node",
        "Controller Area Network",
        "Connected Automotive Network"
      ],
      2,
      "CAN stands for Controller Area Network."
    ],
    [
      "Why use a shared communication bus?",
      [
        "To remove the need for all electrical wiring",
        "To reduce separate communication links between modules",
        "To make every ECU use the same software",
        "To replace every vehicle sensor"
      ],
      1,
      "A shared bus lets multiple modules communicate over common wiring."
    ],
    [
      "What does a CAN identifier primarily identify?",
      [
        "The meaning/priority of a message",
        "The physical length of a cable",
        "The destination ECU address",
        "The battery voltage"
      ],
      0,
      "A CAN identifier labels the message and participates in priority arbitration; it is not a destination address."
    ]
  ]
});
