// ============================================================
// COLLEGE RANKING DATABASE  —  ranking-data.js
// ============================================================
// rankings blocks are intentionally empty — fill in via UI.
// objectiveMetrics is always computed from raw `metrics`.
// ============================================================

window.RD = {

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

  metricsWeights: {
    retentionRate:       10,
    gradRate:            10,
    medianSalary:        15,
    sfRatio:             10,
    acceptRate:           8,
    avgDebt:             10,
    endowmentPerStudent:  8,
    alumniGiving:         5,
    campusSafety:         4,
    freshmanHousing:      4,
    roi:                 16,
  },

  colleges: [
    {
      id: 'harvard', name: 'Harvard University',
      location: 'Cambridge, MA', type: 'Private Research · Ivy League',
      enrollment: 7038, founded: 1636,
      rankings: {},
      metrics: { retentionRate:99, gradRate:98, medianSalary:90000, sfRatio:7, acceptRate:3.5, avgDebt:16000, endowmentPerStudent:1000000, alumniGiving:40, campusSafety:88, freshmanHousing:100 },
    },
    {
      id: 'mit', name: 'MIT',
      location: 'Cambridge, MA', type: 'Private Research',
      enrollment: 4500, founded: 1861,
      rankings: {},
      metrics: { retentionRate:99, gradRate:96, medianSalary:118000, sfRatio:3, acceptRate:4.0, avgDebt:22000, endowmentPerStudent:850000, alumniGiving:38, campusSafety:89, freshmanHousing:100 },
    },
    {
      id: 'yale', name: 'Yale University',
      location: 'New Haven, CT', type: 'Private Research · Ivy League',
      enrollment: 6814, founded: 1701,
      rankings: {},
      metrics: { retentionRate:99, gradRate:97, medianSalary:92000, sfRatio:5, acceptRate:4.5, avgDebt:17000, endowmentPerStudent:800000, alumniGiving:35, campusSafety:82, freshmanHousing:100 },
    },
    {
      id: 'brown', name: 'Brown University',
      location: 'Providence, RI', type: 'Private Research · Ivy League',
      enrollment: 7910, founded: 1764,
      rankings: {},
      metrics: { retentionRate:98, gradRate:96, medianSalary:76000, sfRatio:6, acceptRate:5.0, avgDebt:25000, endowmentPerStudent:200000, alumniGiving:28, campusSafety:78, freshmanHousing:100 },
    },
    {
      id: 'cornell', name: 'Cornell University',
      location: 'Ithaca, NY', type: 'Private Research · Ivy League',
      enrollment: 16128, founded: 1865,
      rankings: {},
      metrics: { retentionRate:97, gradRate:95, medianSalary:80000, sfRatio:9, acceptRate:7.0, avgDebt:28000, endowmentPerStudent:95000, alumniGiving:28, campusSafety:81, freshmanHousing:95 },
    },
    {
      id: 'tufts', name: 'Tufts University',
      location: 'Medford, MA', type: 'Private Research',
      enrollment: 7126, founded: 1852,
      rankings: {},
      metrics: { retentionRate:97, gradRate:91, medianSalary:72000, sfRatio:10, acceptRate:11.0, avgDebt:24000, endowmentPerStudent:60000, alumniGiving:24, campusSafety:84, freshmanHousing:100 },
    },
    {
      id: 'bc', name: 'Boston College',
      location: 'Chestnut Hill, MA', type: 'Private · Jesuit',
      enrollment: 9654, founded: 1863,
      rankings: {},
      metrics: { retentionRate:96, gradRate:90, medianSalary:74000, sfRatio:10, acceptRate:18.0, avgDebt:26000, endowmentPerStudent:50000, alumniGiving:25, campusSafety:86, freshmanHousing:100 },
    },
    {
      id: 'bu', name: 'Boston University',
      location: 'Boston, MA', type: 'Private Research',
      enrollment: 18805, founded: 1839,
      rankings: {},
      metrics: { retentionRate:92, gradRate:85, medianSalary:68000, sfRatio:10, acceptRate:18.0, avgDebt:30000, endowmentPerStudent:55000, alumniGiving:18, campusSafety:75, freshmanHousing:90 },
    },
    {
      id: 'uofrochester', name: 'University of Rochester',
      location: 'Rochester, NY', type: 'Private Research',
      enrollment: 6580, founded: 1850,
      rankings: {},
      metrics: { retentionRate:96, gradRate:84, medianSalary:68000, sfRatio:10, acceptRate:29.0, avgDebt:26500, endowmentPerStudent:145000, alumniGiving:22, campusSafety:79, freshmanHousing:95 },
    },
  ],

  recommendations: [
    { name:'Duke University', location:'Durham, NC', type:'Private Research', profile:{campusFeel:9,socialLife:8,academics:8,afterCollege:8,objectiveMetrics:8,location:6,cost:5,prestige:8,athletics:9}, similarTo:['harvard','brown'], tagline:'Gothic campus, basketball dynasty, rising academic prestige with strong campus life.' },
    { name:'Northwestern University', location:'Evanston, IL', type:'Private Research', profile:{campusFeel:7,socialLife:6,academics:9,afterCollege:9,objectiveMetrics:8,location:8,cost:4,prestige:8,athletics:7}, similarTo:['cornell','yale'], tagline:'Elite research university near Chicago. Exceptional journalism, engineering, and law.' },
    { name:'Dartmouth College', location:'Hanover, NH', type:'Private · Ivy League', profile:{campusFeel:9,socialLife:9,academics:8,afterCollege:8,objectiveMetrics:7,location:3,cost:6,prestige:7,athletics:7}, similarTo:['cornell','brown'], tagline:'Ivy League intimacy, legendary social culture, and tight alumni network.' },
    { name:'Georgetown University', location:'Washington, D.C.', type:'Private · Jesuit', profile:{campusFeel:7,socialLife:7,academics:8,afterCollege:9,objectiveMetrics:7,location:10,cost:4,prestige:8,athletics:6}, similarTo:['yale','bc'], tagline:'Unrivaled D.C. location for politics and international relations.' },
    { name:'Vanderbilt University', location:'Nashville, TN', type:'Private Research', profile:{campusFeel:9,socialLife:9,academics:8,afterCollege:7,objectiveMetrics:7,location:8,cost:8,prestige:7,athletics:8}, similarTo:['brown','bc'], tagline:'"Harvard of the South." Stunning campus, vibrant Nashville, generous merit aid.' },
    { name:'University of Notre Dame', location:'Notre Dame, IN', type:'Private · Catholic', profile:{campusFeel:10,socialLife:9,academics:7,afterCollege:8,objectiveMetrics:7,location:4,cost:5,prestige:8,athletics:10}, similarTo:['bc','cornell'], tagline:'Iconic campus, unmatched school spirit, elite football, strongest alumni networks.' },
    { name:'Rice University', location:'Houston, TX', type:'Private Research', profile:{campusFeel:8,socialLife:5,academics:9,afterCollege:8,objectiveMetrics:9,location:7,cost:9,prestige:7,athletics:4}, similarTo:['mit','uofrochester'], tagline:'MIT-level technical programs at a fraction of the cost. Unique residential college system.' },
    { name:'Tulane University', location:'New Orleans, LA', type:'Private Research', profile:{campusFeel:8,socialLife:10,academics:6,afterCollege:6,objectiveMetrics:5,location:9,cost:9,prestige:5,athletics:5}, similarTo:['bc','brown'], tagline:'Legendary social scene in New Orleans. Generous merit scholarships.' },
    { name:'Emory University', location:'Atlanta, GA', type:'Private Research', profile:{campusFeel:7,socialLife:6,academics:8,afterCollege:8,objectiveMetrics:8,location:8,cost:7,prestige:7,athletics:3}, similarTo:['tufts','bu'], tagline:'Strong in pre-med, business, and public health. Growing reputation with major metro advantages.' },
    { name:'Wake Forest University', location:'Winston-Salem, NC', type:'Private Research', profile:{campusFeel:9,socialLife:8,academics:7,afterCollege:7,objectiveMetrics:6,location:5,cost:8,prestige:6,athletics:7}, similarTo:['bc','tufts'], tagline:'Beautiful campus, small class sizes, strong merit scholarships, close faculty relationships.' },
  ],
};
