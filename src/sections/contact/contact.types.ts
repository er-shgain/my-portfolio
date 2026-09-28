export interface ContactInfoDirect {
  email: string;
  phone: string;
  availabilityText: string;
  headline: string;
  description: string;
  responseGuarantee: string;
  verificationBadge: string;
}

export interface ContactFormPlaceholders {
  name: string;
  phone: string;
  message: string;
}

export interface ContactActionTooltips {
  openEmail: string;
  copyEmail: string;
  openWhatsApp: string;
  copyWhatsApp: string;
}

export interface ContactSectionContent {
  badge: string;
  headingPrefix: string;
  headingGradient: string;
  subheading: string;
  formTitle: string;
  formEncryptionNotice: string;
  submitButtonText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
  directInfo: ContactInfoDirect;
  placeholders: ContactFormPlaceholders;
  tooltips: ContactActionTooltips;
}