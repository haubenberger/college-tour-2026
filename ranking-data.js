// ============================================================
// COLLEGE RANKING DATABASE  —  ranking-data.js
// ============================================================
// Edit this file to add / remove / modify colleges.
// Do NOT change ranking.html to update college data.
//
// Rankings are ordinal: 1 = best school in this list,
// 2 = second best, …, 9 = ninth best.
// 'objectiveMetrics' rank is COMPUTED automatically from
// the raw `metrics` block — do not set it here.
//
// To add a school: copy any entry, assign unique `id`,
// fill in `rankings` and `metrics`, add to the array.
// ============================================================

window.RD = {

  // ── Category definitions (order = display order) ──────────
  categories: [
    { key: 'campusFeel',       label: 'Campus Feel',       defaultWeight: 20 },
    { key: 'socialLife',       label: 'Social Life',       defaultWeight: 17 },
    { key: 'academics',        label: 'Academics',         defaultWeight: 15 },
    { key: 'afterCollege',     label: 'After College',     defaultWeight: 13 },
    { key: 'objectiveMetrics', label: 'Objective Metrics', defaultWeight: 11 },
    { key: 'location',         label: 'Location',          defaultWeight:  9 },
    { key: 'cost',             label: 'Cost',              defaultWeight:  7 },
    { key: 'prestige',         label: 'Prestige',          defaultWeight:  5 },
    { key: 'athletics',        label: 'Athletics',         defaultWeight:  3 },
  ],

  // ── Sub-weights for Objective Metrics composite ────────────
  // These weight each raw metric when computing the composite
  // score that determines each school's objectiveMetrics rank.
  // Values are relative — they are normalized internally.
  metricsWeights: {
    retentionRate:       10,   // % 1st-year students returning (higher = better)
    gradRate:            10,   // 6-year graduation rate % (higher = better)
    medianSalary:        15,   // median 10-yr earnings $ (higher = better)
    sfRatio:             10,   // student-to-faculty ratio (lower = better)
    acceptRate:           8,   // acceptance rate % (lower = better; selectivity)
    avgDebt:             10,   // avg student debt at graduation $ (lower = better)
    endowmentPerStudent:  8,   // endowment $ per student (higher = better)
    alumniGiving:         5,   // alumni giving rate % (higher = better)
    campusSafety:         4,   // safety score 0–100 (higher = better)
    freshmanHousing:      4,   // % freshmen guaranteed housing (higher = better)
    roi:                 16,   // computed: medianSalary / max(avgDebt,1) (higher=better)
  },

  // ── Colleges ───────────────────────────────────────────────
  colleges: [
    {
      id: 'harvard',
      name: 'Harvard University',
      location: 'Cambridge, MA',
      type: 'Private Research · Ivy League',
      enrollment: 7038,
      founded: 1636,
      rankings: {
        campusFeel:   1,
        socialLife:   4,
        academics:    2,
        afterCollege: 2,
        // objectiveMetrics: computed
        location:     3,
        cost:         1,   // 100% need met, no loans
        prestige:     1,
        athletics:    2,
      },
      metrics: {
        retentionRate:       99,
        gradRate:            98,
        medianSalary:        90000,
        sfRatio:              7,
        acceptRate:           3.5,
        avgDebt:             16000,
        endowmentPerStudent: 1000000,
        alumniGiving:        40,
        campusSafety:        88,
        freshmanHousing:    100,
      },
    },
    {
      id: 'mit',
      name: 'MIT',
      location: 'Cambridge, MA',
      type: 'Private Research',
      enrollment: 4500,
      founded: 1861,
      rankings: {
        campusFeel:   6,
        socialLife:   8,
        academics:    1,
        afterCollege: 1,
        location:     1,
        cost:         2,   // 100% need met, no loans
        prestige:     2,
        athletics:    9,
      },
      metrics: {
        retentionRate:       99,
        gradRate:            96,
        medianSalary:       118000,
        sfRatio:              3,
        acceptRate:           4.0,
        avgDebt:             22000,
        endowmentPerStudent: 850000,
        alumniGiving:        38,
        campusSafety:        89,
        freshmanHousing:    100,
      },
    },
    {
      id: 'yale',
      name: 'Yale University',
      location: 'New Haven, CT',
      type: 'Private Research · Ivy League',
      enrollment: 6814,
      founded: 1701,
      rankings: {
        campusFeel:   2,
        socialLife:   5,
        academics:    3,
        afterCollege: 3,
        location:     6,
        cost:         3,   // 100% need met
        prestige:     3,
        athletics:    3,
      },
      metrics: {
        retentionRate:       99,
        gradRate:            97,
        medianSalary:        92000,
        sfRatio:              5,
        acceptRate:           4.5,
        avgDebt:             17000,
        endowmentPerStudent: 800000,
        alumniGiving:        35,
        campusSafety:        82,
        freshmanHousing:    100,
      },
    },
    {
      id: 'brown',
      name: 'Brown University',
      location: 'Providence, RI',
      type: 'Private Research · Ivy League',
      enrollment: 7910,
      founded: 1764,
      rankings: {
        campusFeel:   5,
        socialLife:   2,
        academics:    5,
        afterCollege: 5,
        location:     7,
        cost:         6,   // need met; no merit aid
        prestige:     5,
        athletics:    6,
      },
      metrics: {
        retentionRate:       98,
        gradRate:            96,
        medianSalary:        76000,
        sfRatio:              6,
        acceptRate:           5.0,
        avgDebt:             25000,
        endowmentPerStudent: 200000,
        alumniGiving:        28,
        campusSafety:        78,
        freshmanHousing:    100,
      },
    },
    {
      id: 'cornell',
      name: 'Cornell University',
      location: 'Ithaca, NY',
      type: 'Private Research · Ivy League',
      enrollment: 16128,
      founded: 1865,
      rankings: {
        campusFeel:   4,
        socialLife:   3,
        academics:    4,
        afterCollege: 4,
        location:     8,
        cost:         5,
        prestige:     4,
        athletics:    1,
      },
      metrics: {
        retentionRate:       97,
        gradRate:            95,
        medianSalary:        80000,
        sfRatio:              9,
        acceptRate:           7.0,
        avgDebt:             28000,
        endowmentPerStudent:  95000,
        alumniGiving:        28,
        campusSafety:        81,
        freshmanHousing:     95,
      },
    },
    {
      id: 'tufts',
      name: 'Tufts University',
      location: 'Medford, MA',
      type: 'Private Research',
      enrollment: 7126,
      founded: 1852,
      rankings: {
        campusFeel:   7,
        socialLife:   7,
        academics:    6,
        afterCollege: 6,
        location:     5,
        cost:         7,
        prestige:     6,
        athletics:    8,
      },
      metrics: {
        retentionRate:       97,
        gradRate:            91,
        medianSalary:        72000,
        sfRatio:             10,
        acceptRate:          11.0,
        avgDebt:             24000,
        endowmentPerStudent:  60000,
        alumniGiving:        24,
        campusSafety:        84,
        freshmanHousing:    100,
      },
    },
    {
      id: 'bc',
      name: 'Boston College',
      location: 'Chestnut Hill, MA',
      type: 'Private · Jesuit',
      enrollment: 9654,
      founded: 1863,
      rankings: {
        campusFeel:   3,
        socialLife:   1,
        academics:    8,
        afterCollege: 7,
        location:     4,
        cost:         8,   // very limited merit aid
        prestige:     7,
        athletics:    4,
      },
      metrics: {
        retentionRate:       96,
        gradRate:            90,
        medianSalary:        74000,
        sfRatio:             10,
        acceptRate:          18.0,
        avgDebt:             26000,
        endowmentPerStudent:  50000,
        alumniGiving:        25,
        campusSafety:        86,
        freshmanHousing:    100,
      },
    },
    {
      id: 'bu',
      name: 'Boston University',
      location: 'Boston, MA',
      type: 'Private Research',
      enrollment: 18805,
      founded: 1839,
      rankings: {
        campusFeel:   9,
        socialLife:   6,
        academics:    9,
        afterCollege: 8,
        location:     2,
        cost:         9,
        prestige:     8,
        athletics:    5,
      },
      metrics: {
        retentionRate:       92,
        gradRate:            85,
        medianSalary:        68000,
        sfRatio:             10,
        acceptRate:          18.0,
        avgDebt:             30000,
        endowmentPerStudent:  55000,
        alumniGiving:        18,
        campusSafety:        75,
        freshmanHousing:     90,
      },
    },
    {
      id: 'uofrochester',
      name: 'University of Rochester',
      location: 'Rochester, NY',
      type: 'Private Research',
      enrollment: 6580,
      founded: 1850,
      rankings: {
        campusFeel:   8,
        socialLife:   9,
        academics:    7,
        afterCollege: 9,
        location:     9,
        cost:         4,   // strong merit aid
        prestige:     9,
        athletics:    7,
      },
      metrics: {
        retentionRate:       96,
        gradRate:            84,
        medianSalary:        68000,
        sfRatio:             10,
        acceptRate:          29.0,
        avgDebt:             26500,
        endowmentPerStudent: 145000,
        alumniGiving:        22,
        campusSafety:        79,
        freshmanHousing:     95,
      },
    },
  ],

  // ── Recommendation pool ────────────────────────────────────
  // Schools NOT in the ranked list used for recommendations.
  // `profile` values are 1–10 (10 = strongest in that category).
  recommendations: [
    {
      name: 'Duke University',
      location: 'Durham, NC',
      type: 'Private Research',
      profile: { campusFeel:9, socialLife:8, academics:8, afterCollege:8, objectiveMetrics:8, location:6, cost:5, prestige:8, athletics:9 },
      similarTo: ['harvard', 'brown'],
      tagline: 'Gothic campus, basketball dynasty, rising academic prestige with strong campus life.',
    },
    {
      name: 'Northwestern University',
      location: 'Evanston, IL',
      type: 'Private Research',
      profile: { campusFeel:7, socialLife:6, academics:9, afterCollege:9, objectiveMetrics:8, location:8, cost:4, prestige:8, athletics:7 },
      similarTo: ['cornell', 'yale'],
      tagline: 'Elite research university near Chicago. Exceptional journalism, engineering, and law. Strong industry placement.',
    },
    {
      name: 'Dartmouth College',
      location: 'Hanover, NH',
      type: 'Private · Ivy League',
      profile: { campusFeel:9, socialLife:9, academics:8, afterCollege:8, objectiveMetrics:7, location:3, cost:6, prestige:7, athletics:7 },
      similarTo: ['cornell', 'brown'],
      tagline: 'Ivy League intimacy, legendary social culture, and tight alumni network. Unique D-Plan quarter system.',
    },
    {
      name: 'Georgetown University',
      location: 'Washington, D.C.',
      type: 'Private · Jesuit',
      profile: { campusFeel:7, socialLife:7, academics:8, afterCollege:9, objectiveMetrics:7, location:10, cost:4, prestige:8, athletics:6 },
      similarTo: ['yale', 'bc'],
      tagline: 'Unrivaled D.C. location for politics and international relations. Prestigious Jesuit research university.',
    },
    {
      name: 'Vanderbilt University',
      location: 'Nashville, TN',
      type: 'Private Research',
      profile: { campusFeel:9, socialLife:9, academics:8, afterCollege:7, objectiveMetrics:7, location:8, cost:8, prestige:7, athletics:8 },
      similarTo: ['brown', 'bc'],
      tagline: '"Harvard of the South." Stunning campus, vibrant Nashville, generous merit aid, and rapidly climbing prestige.',
    },
    {
      name: 'University of Notre Dame',
      location: 'Notre Dame, IN',
      type: 'Private · Catholic',
      profile: { campusFeel:10, socialLife:9, academics:7, afterCollege:8, objectiveMetrics:7, location:4, cost:5, prestige:8, athletics:10 },
      similarTo: ['bc', 'cornell'],
      tagline: 'Iconic campus, unmatched school spirit, elite football, and one of the strongest alumni networks in the country.',
    },
    {
      name: 'Rice University',
      location: 'Houston, TX',
      type: 'Private Research',
      profile: { campusFeel:8, socialLife:5, academics:9, afterCollege:8, objectiveMetrics:9, location:7, cost:9, prestige:7, athletics:4 },
      similarTo: ['mit', 'uofrochester'],
      tagline: 'MIT-level technical programs at a fraction of the cost. Generous need-based aid, small class sizes, unique residential college system.',
    },
    {
      name: 'Tulane University',
      location: 'New Orleans, LA',
      type: 'Private Research',
      profile: { campusFeel:8, socialLife:10, academics:6, afterCollege:6, objectiveMetrics:5, location:9, cost:9, prestige:5, athletics:5 },
      similarTo: ['bc', 'brown'],
      tagline: 'Legendary social scene in New Orleans. Generous merit scholarships. Beautiful Uptown campus.',
    },
    {
      name: 'Emory University',
      location: 'Atlanta, GA',
      type: 'Private Research',
      profile: { campusFeel:7, socialLife:6, academics:8, afterCollege:8, objectiveMetrics:8, location:8, cost:7, prestige:7, athletics:3 },
      similarTo: ['tufts', 'bu'],
      tagline: 'Strong in pre-med, business, and public health. Growing reputation with the advantages of a major metro city.',
    },
    {
      name: 'Wake Forest University',
      location: 'Winston-Salem, NC',
      type: 'Private Research',
      profile: { campusFeel:9, socialLife:8, academics:7, afterCollege:7, objectiveMetrics:6, location:5, cost:8, prestige:6, athletics:7 },
      similarTo: ['bc', 'tufts'],
      tagline: 'Beautiful campus, small class sizes, strong merit scholarships, and a close faculty relationship that is hard to find elsewhere.',
    },
  ],
};
