window.WORKSPACE_CONFIG = {
  "slug": "novapay",
  "name": "NovaPay",
  "industry": "Fintech",
  "framework": "PCI DSS",
  "accent": "#6458e8",
  "accentDark": "#4e42cb",
  "tagline": "Confidence in every control.",
  "module": "Network segmentation",
  "moduleKey": "segmentation",
  "moduleIntro": "Document and validate boundaries around the cardholder data environment. Record observed test results; this workspace does not scan your network.",
  "recordName": "Boundary test",
  "fields": [
    {
      "key": "name",
      "label": "Test name",
      "required": true
    },
    {
      "key": "source",
      "label": "Source segment",
      "required": true
    },
    {
      "key": "destination",
      "label": "Destination segment",
      "required": true
    },
    {
      "key": "expected",
      "label": "Expected outcome",
      "options": [
        "Blocked",
        "Allowed"
      ]
    },
    {
      "key": "observed",
      "label": "Observed outcome",
      "options": [
        "Not tested",
        "Blocked",
        "Allowed"
      ]
    },
    {
      "key": "owner",
      "label": "Test owner",
      "required": true
    },
    {
      "key": "review",
      "label": "Test date",
      "type": "date"
    }
  ],
  "records": [
    {
      "id": "SEG-001",
      "name": "Guest network to payment zone",
      "source": "Guest Wi-Fi · VLAN 20",
      "destination": "Cardholder data · Subnet 50",
      "expected": "Blocked",
      "observed": "Allowed",
      "owner": "Network Engineering",
      "review": "2026-01-29",
      "origin": "Repository scenario"
    },
    {
      "id": "SEG-002",
      "name": "Application gateway to payment API",
      "source": "Application gateway",
      "destination": "Payment API",
      "expected": "Allowed",
      "observed": "Not tested",
      "owner": "Platform Engineering",
      "review": "",
      "origin": "Illustrative sample"
    }
  ],
  "risks": [
    {
      "title": "Guest network can reach cardholder environment",
      "category": "Network security",
      "likelihood": 5,
      "impact": 5,
      "owner": "Network Engineering",
      "status": "Open",
      "due": "2026-02-02",
      "description": "Scenario E-001 describes an unrestricted route from the Guest Wi-Fi segment to the CDE. Confirm current exposure, implement isolation, then retain test evidence.",
      "origin": "Repository scenario"
    },
    {
      "title": "Privileged access review not evidenced",
      "category": "Identity & access",
      "likelihood": 3,
      "impact": 4,
      "owner": "Identity Team",
      "status": "In progress",
      "due": "2026-11-20",
      "description": "Illustrative audit item. Collect current privileged account review evidence before drawing a conclusion.",
      "origin": "Illustrative sample"
    },
    {
      "title": "Recovery exercise evidence outstanding",
      "category": "Operational resilience",
      "likelihood": 2,
      "impact": 4,
      "owner": "Operations",
      "status": "Open",
      "due": "2026-11-27",
      "description": "Illustrative audit item for payment service recovery testing.",
      "origin": "Illustrative sample"
    }
  ],
  "controls": [
    [
      "NP-01",
      "CDE network boundaries",
      "Network security",
      "Network Engineering",
      "Gap"
    ],
    [
      "NP-02",
      "Privileged account review",
      "Identity & access",
      "Identity Team",
      "In review"
    ],
    [
      "NP-03",
      "Payment activity monitoring",
      "Monitoring",
      "Security Operations",
      "Not assessed"
    ],
    [
      "NP-04",
      "Encryption evidence review",
      "Data protection",
      "Platform Engineering",
      "Not assessed"
    ],
    [
      "NP-05",
      "Recovery test record",
      "Resilience",
      "Operations",
      "Not assessed"
    ],
    [
      "NP-06",
      "Supplier access review",
      "Third parties",
      "Vendor Management",
      "Not assessed"
    ]
  ],
  "focusTitle": "Protect the payment boundary",
  "focusText": "The source scenario identifies a route from guest Wi-Fi to the CDE. Track the finding, assign remediation, and retain validation evidence.",
  "focusAction": "Review network boundaries",
  "frameworkNote": "Workspace control themes support a PCI DSS audit. They are not an authoritative standard checklist or an attestation."
};
