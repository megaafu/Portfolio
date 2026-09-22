export interface ProcessStage {
  id: string;
  step: string;
  phase: string;
  phasePt?: string;
  title: string;
  titlePt?: string;
  description: string;
  descriptionPt?: string;
  frictionBoundary: string;
  frictionBoundaryPt?: string;
  specType: string;
  specTypePt?: string;
  deepDive: {
    objectives: string[];
    objectivesPt?: string[];
    deliverables: string[];
    deliverablesPt?: string[];
    realWorldScenario: string;
    realWorldScenarioPt?: string;
    guardrails: string;
    guardrailsPt?: string;
  };
}

export interface CorePrinciple {
  title: string;
  titlePt?: string;
  desc: string;
  descPt?: string;
}

export interface FlutterMzMetrics {
  title: string;
  titlePt?: string;
  status: string;
  statusPt?: string;
  summary: string;
  summaryPt?: string;
  cohorts: string;
  cohortsPt?: string;
  automation: string;
  automationPt?: string;
}

export interface TechPillar {
  id: string;
  title: string;
  titlePt?: string;
  tag: string;
  tagPt?: string;
  description: string;
  descriptionPt?: string;
  tags: string[];
  footerLeft: string;
  footerLeftPt?: string;
  footerRight: string;
  footerRightPt?: string;
  iconName: 'smartphone' | 'monitor' | 'server' | 'bot';
  metrics: {
    label: string;
    labelPt?: string;
    value: string;
  }[];
}

export interface FlagshipSystem {
  id: string;
  category: string;
  categoryPt?: string;
  statusText: string;
  statusTextPt?: string;
  statusType: 'production' | 'carrier' | 'bilingual' | 'enterprise' | 'system';
  title: string;
  titlePt?: string;
  summary: string;
  summaryPt?: string;
  role: string;
  rolePt?: string;
  keyCapability: string;
  keyCapabilityPt?: string;
  location: string;
  deliveryPipeline: string;
  highlights: string[];
  highlightsPt?: string[];
  architectureNotes: string;
  metrics: {
    label: string;
    labelPt?: string;
    value: string;
  }[];
  techStack: string[];
  interactiveFeature?: 'pii-mask' | 'regex-parse' | 'token-calc';
}

export interface CharacterDiscipline {
  id: string;
  disciplineNumber: string;
  disciplineNumberPt?: string;
  title: string;
  titlePt?: string;
  description: string;
  descriptionPt?: string;
  leadershipBridge: string;
  leadershipBridgePt?: string;
  iconName: 'gamepad' | 'dumbbell' | 'scissors' | 'brain' | 'flask' | 'users';
  extendedInsight: string;
  extendedInsightPt?: string;
}

export interface TimelineEntry {
  id: string;
  role: string;
  rolePt?: string;
  period: string;
  periodPt?: string;
  organization: string;
  location: string;
  summary: string;
  summaryPt?: string;
  tags: string[];
  achievements?: string[];
  achievementsPt?: string[];
  isEducation?: boolean;
}

export interface ContactFormData {
  stakeholderType: 'Founder / Client' | 'Recruiter / EM' | 'Collaborator';
  name: string;
  email: string;
  roleScope: string;
  language: string;
  message: string;
}

export interface WebProductionProject {
  id: string;
  whatItDoes: string; // strictly describes what it does, never names the project
  whatItDoesPt?: string;
  domain: string;
  domainPt?: string;
  role: string;
  rolePt?: string;
  summary: string;
  summaryPt?: string;
  keyCapabilities: string[];
  keyCapabilitiesPt?: string[];
  techStack: string[];
  liveUrl: string;
}

export interface PublicMobileApp {
  id: string;
  name: string; // public name as requested for Play Store apps
  packageId: string;
  playStoreUrl: string;
  role: string;
  rolePt?: string;
  category: string;
  categoryPt?: string;
  summary: string;
  summaryPt?: string;
  keyCapabilities: string[];
  keyCapabilitiesPt?: string[];
  techStack: string[];
}

export interface ServicePlan {
  id: string;
  name: string;
  namePt?: string;
  category: 'web' | 'app';
  tagline: string;
  taglinePt?: string;
  taglineEn?: string;
  features: string[];
  featuresPt?: string[];
  featuresEn?: string[];
  idealFor: string;
  idealForPt?: string;
  idealForEn?: string;
  deliverables: string[];
  deliverablesPt?: string[];
  deliverablesEn?: string[];
  timeline?: string;
  timelinePt?: string;
  highlight?: string;
  highlightPt?: string;
  iconType?: 'zap' | 'globe' | 'building' | 'crown' | 'cart' | 'smartphone' | 'database' | 'shield';
  techStack?: string[];
  slaGuarantee?: string;
  slaGuaranteePt?: string;
}

export interface AdditionalService {
  title: string;
  purpose: string;
  category: 'web' | 'app';
}

