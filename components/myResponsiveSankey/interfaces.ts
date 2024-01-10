
export interface Data {
    nodes: Node[];
    links: Link[];
}

export interface Link {
    source: string;
    target: string;
    value:  number;
}

export interface Node {
    id:        string;
    nodeColor: string;
}


export interface SonarResults {
    squad:        Squad;
    componentkey: string;
    score:        Score;
    name:         string;
    domain:       Domain;
    metric:       Metric;
    value:        number;
    SCORE_NAME:   string;
    CALCULATION:  number;
    SCORE_CALC:   Score;
    SCORE_CALC2:  Score;
}

export enum Score {
    A = "A",
    AA = "A/A+",
    APlus = "A+",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    ED = "E/D",
}

// export enum Domain {
//     SourceNode = "Findings",
//     Complexity = "Complexity",
//     Coverage = "Coverage",
//     Duplications = "Duplications",
//     Issues = "Issues",
//     Maintainability = "Maintainability",
//     Reliability = "Reliability",
//     Security = "Security",
//     SecurityReview = "SecurityReview",
// }

export enum Domain {
    SourceNode = "Findings",
    Complexity = "Com",
    Coverage = "Cov",
    Duplications = "Dup",
    Issues = "Iss",
    Maintainability = "Maint",
    Reliability = "Rel",
    Security = "Sec",
    SecurityReview = "SecReview",
}

export enum Metric {
    CognitiveComplexity = "cognitive_complexity",
    Complexity = "complexity",
    Coverage = "coverage",

    BlockerViolations = "blocker_violations",
    CriticalViolations = "critical_violations",
    MajorViolations = "major_violations",

    DuplicatedLinesDensity = "duplicated_lines_density",
    ReliabilityRating = "reliability_rating",

    SecurityHotspotsReviewed = "security_hotspots_reviewed",
    SecurityRating = "security_rating",

    SqaleRating = "sqale_rating",
}

export enum Squad {
    Disbursement = "disbursement",
    Empty = "?",
    Gip = "gip",
    Martech = "martech",
    Offers1 = "offers1",
    Offers2 = "offers2",
    PersonInput = "person input",
    Prospects = "prospects",
    SquadsDeExperiencia = "Squads de experiencia",
    Ss1 = "ss1",
    Ss2 = "ss2",
    Use = "use",
}
