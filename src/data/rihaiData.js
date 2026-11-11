export const RIHAI_DATA = {
  meta: {
    title: "Rihaai",
    tagline: "Unpricing Freedom",
    subtitle:
      "Ensuring that freedom in India is not determined by a prisoner's wallet, but by the universal principles of justice and human dignity.",
    organization: "TYCIA Foundation",
    orgSubtitle: "Working since 2011 across prisons, schools, and vulnerable communities",
    partnerOrg: "Project Second Chance",
    initiationDate: "November 2025",
    phonePrimary: "+91 90848-93438",
    phoneSecondary: "+91 88005-73488",
    emailPrimary: "projectrihaai@gmail.com",
    emailSecondary: "secondchance.psc@gmail.com",
    website: "https://tyciafoundation.org",
    donationUrl: "http://m-lp.co/prisoner-1?utm_medium=campaign_page_share&utm_source=copy",
    campaignGoal: 600000, // ₹6,00,000
    campaignTargetInmates: 30,
    averageCostPerInmate: 20000,
  },

  crisisStats: [
    {
      value: "76%",
      label: "Undertrial Population",
      detail:
        "Over 3 in every 4 people in Indian prisons have not been convicted of any crime, awaiting trial in overcrowded barracks.",
      source: "NCRB Prison Statistics India (2022–2025)",
    },
    {
      value: "5.7+ Lakh",
      label: "Total Prison Population",
      detail:
        "Severe nationwide overcrowding, with several state prisons running at 150% to 250% of sanctioned capacity.",
      source: "NALSA–UTRC & Prison Statistics India",
    },
    {
      value: "24,879",
      label: "Detained Despite Bail",
      detail:
        "In 2023 alone, nearly 25,000 undertrials were judicially granted bail but couldn't walk free because they couldn't afford the bond.",
      source: "UTRC National Registry",
    },
    {
      value: "₹15k–₹20k",
      label: "The Cost of Freedom",
      detail:
        "A modest bail bond that is routine for middle-class families acts as an insurmountable lifelong barrier for India's poorest.",
      source: "Rihaai Field Assessment",
    },
  ],

  vinayCaseStudy: {
    name: "Vinay",
    location: "Tihar Jail, New Delhi",
    chargeType: "Alleged theft/robbery (Section 379/392)",
    status: "Granted bail by Court; detained indefinitely due to ₹15,000 bond",
    story:
      "Vinay, a young man from an impoverished informal settlement, found himself incarcerated in Tihar Jail. Recognizing his background and marginal involvement, the court granted him bail. Yet, freedom remained an illusion. His widowed mother, earning meager daily wages as a domestic worker, possessed no land papers, no vehicle registration certificate (RC), and zero savings. The ₹15,000 surety bond was an insurmountable wall. For months, Vinay remained frozen behind bars—not because the law mandated his detention, but because poverty became his sentence.",
    takeaway:
      "When bail requires financial sureties that poor families cannot afford, bail ceases to be an instrument of liberty and becomes a mechanism of systemic exclusion.",
  },

  supportProcess: [
    {
      step: 1,
      title: "Case Identification",
      tag: "Verification",
      summary: "Identification through legal aid clinics, prison authorities, and families",
      description:
        "We identify individuals who have already received a valid court bail order but remain in judicial custody due to inability to furnish the bail bond or surety amount.",
      safeguard: "No arbitrary intervention; strictly within lawful, institutional channels.",
    },
    {
      step: 2,
      title: "Document Due Diligence",
      tag: "Legal Review",
      summary: "Comprehensive check of Bail Order, FIR, and Charge Sheet",
      description:
        "Our legal team scrutinizes the certified bail order, verifies sections/dhaaras, confirms prisoner identity, and checks that no other non-bailable warrants or pending holds exist.",
      safeguard: "Rigorous vetting by pro-bono advocates to avoid procedural rejection.",
    },
    {
      step: 3,
      title: "Need & Vulnerability Assessment",
      tag: "Socio-Economic",
      summary: "Verifying authentic socio-economic destitution",
      description:
        "We assess the family's economic situation, daily income, and family dependency to ensure assistance reaches those who genuinely have no assets or alternative means.",
      safeguard: "First-come, first-served need-based prioritisation.",
    },
    {
      step: 4,
      title: "Internal Committee Approval",
      tag: "Governance",
      summary: "Transparent sign-off under TYCIA Foundation guidelines",
      description:
        "Each case dossier is submitted to our internal review committee. Grants of up to ₹20,000 (up to ₹15,000 bond + ₹5,000 documentation/transit support) are formally recorded.",
      safeguard: "Zero discretionary cash; strict institutional accounting.",
    },
    {
      step: 5,
      title: "Direct Court FD Disbursement",
      tag: "Financial Transfer",
      summary: "Secured Fixed Deposit in Court through verified advocates",
      description:
        "We do not hand cash to individuals. Funds are directly deposited as a Court Fixed Deposit (FD) or verified surety bond through our pro-bono legal counsel.",
      safeguard: "100% traceable banking channels adhering to court orders.",
    },
    {
      step: 6,
      title: "Release Order & Family Reunion",
      tag: "Custody Exit",
      summary: "Coordinating release orders and physical prison exit",
      description:
        "Our caseworkers liaise between the prison superintendent, court registry, and the family to ensure the release order is dispatched and processed without red-tape delays.",
      safeguard: "Safe accompaniment and immediate travel facilitation home.",
    },
    {
      step: 7,
      title: "Rehabilitation & Livelihood",
      tag: "Long-term Impact",
      summary: "Psychosocial counseling and vocational linkages",
      description:
        "Freedom is only step one. We connect released individuals with psychosocial counseling, community support networks, and vocational or livelihood programs through TYCIA Foundation.",
      safeguard: "Preventing recidivism and restoring household economic dignity.",
    },
  ],

  eligibilityCriteria: [
    {
      icon: "Scale",
      title: "Valid Judicial Bail Order",
      description:
        "The court must have already formally passed an order granting bail. Rihaai does not determine judicial guilt or decide whether bail should be granted.",
    },
    {
      icon: "Coins",
      title: "Bail Bond ≤ ₹20,000",
      description:
        "First priority is accorded to cases where the bail bond is up to ₹15,000 to ₹20,000, or where this amount bridges the remaining gap needed for release.",
    },
    {
      icon: "Users",
      title: "Local Surety Requirement",
      description:
        "A local surety (family member or community guarantor) is essential. Rihaai assists with the financial surety or documentation, but does not act as personal surety.",
    },
    {
      icon: "ShieldCheck",
      title: "Charge-Neutral Assessment",
      description:
        "We do not discriminate on the basis of alleged charges or background. Once the judiciary has deemed the individual eligible for bail, our focus is solely on the financial barrier.",
    },
    {
      icon: "FileText",
      title: "Complete Documentation",
      description:
        "Certified copy of the bail order, FIR copy, valid identity proof, and family contact details are required for review.",
    },
    {
      icon: "Building2",
      title: "Traceable Court Process",
      description:
        "All disbursements are made via institutional banking channels directly into court registry fixed deposits, facilitated by pro-bono lawyers.",
    },
  ],

  khelCards: {
    description:
      "Based on our educational tool 'Khel Rihaai Ka', explore the stark contrast between a supported release journey and the systemic realities an undertrial faces every day.",
    stages: [
      {
        stageName: "Pre-Bail: Day 1 (First Day Inside)",
        positive: {
          title: "A Helping Hand",
          text: "On your first day inside, you meet a friendly inmate who guides you through the daily prison routine—meal timings, securing a clean place to sleep, and hygiene. They also inform you about organizations that assist undertrial prisoners in securing bail.",
          type: "positive",
        },
        negative: {
          title: "Distrust and Hostility",
          text: "On your first day inside, you witness a violent fight between two inmate factions. Staff intervenes with excessive force, ushering injured prisoners to the jail hospital. An atmosphere of intense fear and distrust sets in. You find a remote corner in the barracks, uncertain how you will survive tomorrow.",
          type: "negative",
        },
      },
      {
        stageName: "Pre-Bail: Day 15 (Adapting & Living)",
        positive: {
          title: "Purpose in Routine",
          text: "You are able to secure work in the prison workshop that you enjoy. You build camaraderie with co-workers and manage to find momentary solace and dignity amidst the severity of incarceration.",
          type: "positive",
        },
        negative: {
          title: "Physical Deterioration",
          text: "The food is stale and watery. Weakened by nutritional deprivation, you develop persistent fever and stomach illness. Lacking energy or medical care, you are unable to work or even attend family mulaqats, worsening your isolation.",
          type: "negative",
        },
      },
      {
        stageName: "Pre-Bail: Day 30 (Legal Representation)",
        positive: {
          title: "Compassionate Counsel",
          text: "Your assigned legal aid lawyer is considerate and patient. They carefully explain the legal charges against you and outline a clear strategy to secure bail, reassuring your anxious family.",
          type: "positive",
        },
        negative: {
          title: "Callous & Dismissive Legal Aid",
          text: "The appointed lawyer is arrogant and cuts you off mid-sentence. Unable to follow their abrupt legal jargon, you feel humiliated and helpless. You are left completely in the dark about your own hearing.",
          type: "negative",
        },
      },
      {
        stageName: "Pre-Bail: Day 60 (The Mulaqat)",
        positive: {
          title: "Family Warmth",
          text: "You wake up early to look presentable. At the visitor window, you share a tearful but uplifting conversation with your parents. They reassure you that the family is managing and remain optimistic about your release.",
          type: "positive",
        },
        negative: {
          title: "Broken Spirits",
          text: "Only your sister arrives at the mulaqat. Tearfully, she confesses that your elderly parents could not bear to see you behind bars, and travel expenses are exhausting their last rupee. She may not be able to visit again.",
          type: "negative",
        },
      },
      {
        stageName: "Pre-Bail: Day 92 (The Bail Hearing)",
        positive: {
          title: "Bail Granted",
          text: "The judge attentively listens to your counsel's arguments and officially grants bail. You step back into the barracks knowing this nightmare is finally coming to an end. Inmates congratulate you with smiles.",
          type: "positive",
        },
        negative: {
          title: "A Numbing Delay",
          text: "The hearing is chaotic and rushed. While bail is verbally indicated, the paperwork is deferred to a future date. You return to the barracks dizzy with anxiety, unable to recall what just happened.",
          type: "negative",
        },
      },
      {
        stageName: "Post-Bail: Day 128 (The Bail Order)",
        positive: {
          title: "Flawless Order Received",
          text: "The certified Bail Order arrives. You verify that all sections (dhaaras) and your name and address are spelled correctly. The gateway to freedom is officially opened.",
          type: "positive",
        },
        negative: {
          title: "The Typographical Trap",
          text: "The Bail Order arrives on a Friday before a long public holiday weekend. Upon inspection, an essential section (dhaara) is missing due to a clerical error. It must be sent back for rectification—delaying release by weeks.",
          type: "negative",
        },
      },
      {
        stageName: "Post-Bail: Day 133 (The Surety Wall)",
        positive: {
          title: "Affordable & Supported",
          text: "Rihaai verifies your case and steps in to furnish the court FD. With the financial barrier cleared, the Release Order is processed swiftly.",
          type: "positive",
        },
        negative: {
          title: "Trapped by Poverty",
          text: "The court demands a vehicle registration (RC) or property papers as surety. Your family owns nothing. Despite being granted bail weeks ago, you remain stuck in jail, powerless and forgotten.",
          type: "negative",
        },
      },
      {
        stageName: "Post-Bail: Day 135–150 (Rihaai / Release)",
        positive: {
          title: "The Gates Open: Rihaai",
          text: "The Release Order reaches the prison superintendent. You step out of the gates into the arms of your loved ones, ready to rebuild your life with dignity.",
          type: "positive",
        },
        negative: {
          title: "The Endless Wait",
          text: "Every additional week in prison compounds family debt, job loss, and psychological trauma. The distance between judicial bail and real freedom remains insurmountable without intervention.",
          type: "negative",
        },
      },
    ],
  },

  donationTiers: [
    {
      amount: 1500,
      title: "Family Travel & Documentation",
      impact: "Funds legal paperwork, court stamp fees, and travel expenses for a daily-wage family attending court.",
      icon: "FileCheck",
    },
    {
      amount: 5000,
      title: "Bail Bridge Assistance",
      impact: "Bridges the crucial remaining gap for an inmate whose family managed only a partial surety deposit.",
      icon: "Coins",
    },
    {
      amount: 15000,
      title: "Full Bail Bond Deposit",
      popular: true,
      impact: "Directly funds the complete Court Fixed Deposit (FD) to secure the release of one undertrial prisoner.",
      icon: "KeyRound",
    },
    {
      amount: 20000,
      title: "Full Freedom & Reintegration",
      impact:
        "Covers complete bail bond deposit, court documentation, safe transit home, and 3 months of psychosocial and livelihood support.",
      icon: "HeartHandshake",
    },
  ],

  faqs: [
    {
      q: "What is Rihaai?",
      a: "Rihaai ('Release') is an initiative under TYCIA Foundation (working in prisons and social justice since 2011) and Project Second Chance. It specifically supports undertrial prisoners who have already been granted bail by a court but remain incarcerated because their families cannot afford the bail bond or surety amount.",
    },
    {
      q: "Does Rihaai decide who gets bail?",
      a: "No. Rihaai never interferes with judicial discretion. We only assist individuals whose bail has already been formally ordered by a competent court of law. We do not determine guilt or innocence—we simply ensure that poverty does not turn a court-granted liberty into continued incarceration.",
    },
    {
      q: "How are funds disbursed? Is cash handed out?",
      a: "Never. Funds are never handed over in cash. All financial support is processed through traceable banking channels, deposited directly as Court Fixed Deposits (FDs) or statutory registry fees through verified pro-bono advocates.",
    },
    {
      q: "Why is a local surety still required?",
      a: "Indian courts typically require a personal or local guarantor (surety) to ensure court attendance. Rihaai assists with the financial bond and administrative/documentation bottlenecks, but requires the family or community to provide the personal surety commitment.",
    },
    {
      q: "What happens after an inmate is released?",
      a: "Rihaai treats release as step one. Through TYCIA Foundation's ecosystem, we connect beneficiaries and their families with psychosocial counseling, community reintegration, and vocational or livelihood linkages to prevent socio-economic relapse.",
    },
    {
      q: "How can lawyers, NGOs, or families refer a case?",
      a: "Anyone can submit a referral using our verified case referral form below, or reach out directly to projectrihaai@gmail.com or +91 90848-93438 with a copy of the bail order.",
    },
  ],
  team: [
    {
      id: "shivani-kumari",
      name: "Shivani Kumari",
      role: "Founder, Rihaai",
      tagline: "Freedom Beyond Bail | Building Pathways to Freedom, Dignity and Rehabilitation.",
      linkedin:
        "https://www.linkedin.com/in/shivani-kumari-b91bb837b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      summary: [
        "Shivani Kumari is a social development professional specialising in bail support, legal assistance and rehabilitation. Her work focuses on addressing the legal, financial and social barriers that prevent economically disadvantaged individuals from securing their release, while supporting families through legal awareness, counselling, case coordination and post release rehabilitation.",
      ],
    },
    {
      id: "karan-kumar",
      name: "Karan Kumar",
      role: "Co-Founder, Rihaai",
      tagline: "Prison Reform | Access to Justice | Technology Driven Legal Aid.",
      linkedin:
        "https://www.linkedin.com/in/karan-kumar-61746b2b6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      summary: [
        "Karan Kumar is a social sector practitioner working at the intersection of prison reform, technology and access to justice. He leads programme operations, technology driven interventions, community outreach and institutional partnerships at Rihaai. His work focuses on developing accessible support systems, strengthening implementation and connecting vulnerable individuals and their families with the resources they need to navigate the criminal justice system.",
      ],
    },
  ],
};
