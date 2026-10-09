export const categories = [
  { id: 'health', name: 'Health Insurance', tag: 'Care without compromise',
    desc: 'Cashless hospitalisation, day-care procedures and wellness benefits for you and your family.',
    points: ['Cashless hospitalisation', 'Pre & post hospitalisation', 'Day-care procedures'], from: '₹8,999/yr' },
  { id: 'vehicle', name: 'Vehicle Insurance', tag: 'Drive with confidence',
    desc: 'Comprehensive own-damage and third-party cover with 24×7 roadside assistance.',
    points: ['Own damage & third party', 'Zero depreciation', '24×7 roadside assistance'], from: '₹4,299/yr' },
  { id: 'property', name: 'Property Insurance', tag: "Protect what you've built",
    desc: 'Structure and contents protection against fire, flood, earthquake, burglary and more.',
    points: ['Fire & allied perils', 'Natural calamities', 'Burglary & theft'], from: '₹3,499/yr' },
  { id: 'life', name: 'Life Insurance', tag: 'Security that outlives you',
    desc: 'High sum-assured term plans with critical illness and income-replacement riders.',
    points: ['Term life cover', 'Accidental death benefit', 'Critical illness rider'], from: '₹11,999/yr' },
];

// Add your remaining schemes here (the live site shows 8 in total).
export const schemes = [
  { id: 'trusthealth-secure', category: 'health', name: 'TrustHealth Secure', popular: true,
    desc: 'Individual health cover with cashless access to 10,000+ hospitals.',
    features: ['₹5 L sum insured', 'Cashless at 10,000+ hospitals', 'No-claim bonus up to 50%', 'Day-care procedures covered'],
    coverage: '₹5 L', duration: '1–3 yrs', price: '₹8,999/yr' },
  { id: 'trustdrive-protect', category: 'vehicle', name: 'TrustDrive Protect', popular: true,
    desc: 'Comprehensive car cover with zero-depreciation from day one.',
    features: ['Own damage + third party', 'Zero depreciation add-on', '24×7 roadside assistance', 'Personal accident cover ₹15 L'],
    coverage: '₹6 L', duration: '1–3 yrs', price: '₹4,299/yr' },
  { id: 'property-secure-plus', category: 'property', name: 'Property Secure Plus', popular: true,
    desc: 'All-risk cover for high-value homes and rental properties.',
    features: ['Cover up to ₹1.5 Cr', 'Loss of rent benefit', 'Electrical breakdown', 'Public liability ₹10 L'],
    coverage: '₹1.5 Cr', duration: '1–5 yrs', price: '₹7,999/yr' },
  { id: 'trustlife-secure', category: 'life', name: 'TrustLife Secure', popular: true,
    desc: 'Pure term plan with ₹1 Cr life cover at an affordable premium.',
    features: ['₹1 Cr sum assured', 'Cover up to age 75', 'Accidental death benefit', 'Tax benefits u/s 80C & 10(10D)'],
    coverage: '₹1 Cr', duration: '10–30 yrs', price: '₹11,999/yr' },
];

export const stats = [
  ['2.4 L+', 'Families protected'], ['₹1,850 Cr', 'Claims settled'],
  ['98.6%', 'Claim settlement ratio'], ['< 48 hrs', 'Average approval time'],
];

export const trust = [
  ['IRDAI compliant', 'Products and processes aligned to regulator guidelines.'],
  ['256-bit encryption', 'Your documents and payments stay private end to end.'],
  ['Rated 4.8 / 5', 'By 38,000+ verified customers across India.'],
  ['24×7 claim desk', 'Real humans on call, every hour of every day.'],
  ['Award-winning service', 'Best Digital Insurer — FinServe Awards 2025.'],
];
