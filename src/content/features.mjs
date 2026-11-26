// Product claims derive from the existing Features page and the reference application.
// Wallet support was NOT found in the reference checkout: keep that page availability-led.
export const features = [
  {
    slug: 'membership-management', title: 'Membership Management',
    heading: 'Membership management for Aikido and martial arts organisations',
    summary: 'Bring member administration, memberships and renewals together, from a single dojo to an association of clubs.',
    problem: 'Separate forms, spreadsheets and email threads make it difficult to see which membership record is current. Give administrators a shared place to manage the information they need.',
    sections: [
      { title: 'Keep member records together', text: 'Manage member profiles, membership status and expiry dates in one place, with access appropriate to each administrator’s responsibilities.' },
      { title: 'Support the renewal process', text: 'Online applications and renewals, expiry tracking and renewal reminders help administrators follow the membership cycle.' },
      { title: 'Connect records and documentation', text: 'Keep membership records connected to dojos, grading histories and digitally generated membership certificates.' }
    ], related: ['organisation-management', 'grading-management', 'digital-membership-cards']
  },
  {
    slug: 'grading-management', title: 'Grading Management', heading: 'Keep grading records and certificates together',
    summary: 'Manage Kyu and Dan grading histories and digital grade certificates for your organisation.',
    problem: 'Grading administrators need a consistent history when reviewing a member’s progress. Records held across individual files and clubs can be difficult to follow.',
    sections: [
      { title: 'Follow each member’s grading history', text: 'Record Kyu and Dan grades alongside the member’s profile so administrators can refer to their previous grades.' },
      { title: 'Produce digital certificates', text: 'Generate grade certificates as part of the grading process, reducing separate document preparation.' },
      { title: 'Support defined responsibilities', text: 'Grade administrators and organisation officers can work with records using the platform’s role-based access.' }
    ], related: ['membership-management', 'reporting']
  },
  {
    slug: 'digital-membership-cards', title: 'Digital Membership Cards', heading: 'Digital membership cards for your organisation',
    summary: 'Explore digital membership cards for your organisation, including your requirements for access through Apple Wallet and Google Wallet.',
    availability: 'Apple Wallet and Google Wallet availability is not confirmed. Ask us to confirm supported platforms, card fields and member access before planning a rollout.',
    problem: 'Physical cards can be misplaced and need replacing when membership details change. A digital card could make membership information easier to find on a supported phone and reduce dependence on printed or plastic cards.',
    sections: [
      { title: 'Start with your membership records', text: 'AikidoDigital already manages member profiles, membership status, expiry dates and membership certificates. Discuss which of these details you need members to access on a card.' },
      { title: 'Agree what a card should show', text: 'Contact us to discuss member name, membership details, membership type, expiry information and any relevant certificate information. Fields available on wallet cards still need verification.' },
      { title: 'Plan access for your members', text: 'Tell us whether your members use Apple Wallet or Google Wallet, and what alternative they need if they do not use a compatible phone. Confirm availability and the member journey before introducing cards.' }
    ], visuals: ['Apple Wallet', 'Google Wallet', 'Mobile membership card'], related: ['membership-management', 'grading-management']
  },
  {
    slug: 'reporting', title: 'Reporting', heading: 'Reporting for membership teams and committees',
    summary: 'Bring membership reports, grading information and organisation statistics into your administrative workflow.',
    problem: 'Preparing for a committee meeting or an organisation return often means collecting information from several places. Reporting from the same records used for administration gives teams a consistent starting point.',
    sections: [
      { title: 'Review membership information', text: 'Use membership reports to support regular administrative reviews and preparation for organisation meetings.' },
      { title: 'Refer to grading records', text: 'Produce grade reports using the records maintained within the platform.' },
      { title: 'Share information appropriately', text: 'Aggregated organisation information and controlled access to more detailed records support different reporting responsibilities. Contact us to discuss the reports your committee needs.' }
    ], related: ['membership-management', 'grading-management', 'organisation-management']
  },
  {
    slug: 'organisation-management', title: 'Organisation Management', heading: 'Manage clubs within your organisation’s structure',
    summary: 'Connect members, dojos, associations and governing bodies in a structure that reflects how your organisation works.',
    problem: 'Multi-club organisations need both local administration and a wider view. Maintaining separate systems at each level can leave officers working from different records.',
    sections: [
      { title: 'Connect members and dojos', text: 'Manage members within their dojos, alongside venue details, class schedules and instructor appointments.' },
      { title: 'Represent your wider structure', text: 'Connect dojos to regional or national associations and governing bodies within the organisation hierarchy.' },
      { title: 'Give officers appropriate access', text: 'Role-based permissions support registrars, instructors, administrators and organisation leadership in their respective responsibilities.' }
    ], related: ['membership-management', 'reporting']
  }
]
