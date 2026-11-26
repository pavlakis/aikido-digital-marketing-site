// Public editorial content. Dates are publication dates, not product release dates.
// Membership-card publications have been removed pending verified availability.
// status: 'hidden' excludes an entry from routes, lists and the sitemap.
// Optional image: { src: '/images/example.webp', alt: 'Description', width: 1200, height: 675 }.
// Demo CTAs remain disabled. What's New categories: Product Update, Company News, Press Release.

export const whatsNew = [
  {
    slug: 'grading-authority',
    title: 'Grading Authority puts your association in charge of who can award each grade',
    topic: 'Instructor Grading Authority',
    summary: 'Many Aikido groups use teaching titles such as Fukushidoin, Shidoin and Shihan. With AikidoDigital’s Grading Authority module, your association can set the highest grade each title may award across its dojos, then decide how much of that authority to give each instructor.',
    seoDescription: 'Set kyu and dan award limits by teaching title, give individual instructors grading authority and choose where they can grade across your association.',
    feature: 'grading-management',
    date: '2026-11-26',
    category: 'Product Update',
    status: 'published',
    sections: [
      {
        title: 'Set a grading policy for the whole association',
        text: 'Choose which teaching titles can award grades and set a maximum for each. Fukushidoin can award kyu grades. For Shidoin and Shihan, you can set the limit at a kyu or dan grade. When your committee revises its policy, officers can compare the proposed limits with the current ones and record why they are changing. The new limits take effect when you publish them.'
      },
      {
        title: 'Give instructors room to progress within a title',
        text: 'Two instructors can hold the same title and have different grading responsibilities. Suppose your association allows Shidoin to award up to 1st dan. Your registrar could authorise one Shidoin to award up to 2nd kyu and another up to 1st dan. As the first instructor gains experience, the registrar can raise their limit within the same title. Each instructor sees only the grades their own grant and the current policy allow.'
      },
      {
        title: 'Choose where instructors can grade',
        text: 'For each title, decide whether instructors can grade members at the dojos where they hold an appointment or at any dojo in your organisation. If a Shihan visits another member dojo for a grading, an association-wide rule lets them select an affiliated member in Grade Records and award a grade within their personal limit.'
      },
      {
        title: 'Keep a teaching history for each instructor',
        text: 'Registrars and technical administrators can look up an instructor by name or membership number to see their current authority, who awarded it and when. Officers can update or withdraw a grant while keeping the earlier decisions in the instructor’s teaching history. They can also email the instructor the details of a new grant. For oversight of student gradings, your organisation can choose an officer role, such as registrar, to receive an email when an instructor awards a grade.'
      }
    ]
  }
]

export const resources = [
  {
    "slug": "membership-records",
    "title": "How to Manage Membership Records for a Martial Arts Organisation",
    "category": "Administration",
    "feature": "membership-management",
    "summary": "Begin with the information administrators need for the membership cycle. Agree who maintains each record and how changes are checked.",
    "date": "2026-10-02",
    "status": "published",
    "sections": [
      {
        "title": "Choose a consistent record",
        "text": "Agree which information your team uses to identify a member, link them to a club and follow their membership status. Use consistent names for fields and statuses so different administrators can interpret the record in the same way."
      },
      {
        "title": "Assign responsibility for changes",
        "text": "Decide who adds new members, checks applications and corrects existing information. When a member changes clubs or contact details, make it clear which administrator updates the shared record."
      },
      {
        "title": "Review records as part of administration",
        "text": "Use renewals and routine club reviews as opportunities to check the information your team relies on. Keep a clear process for questions that need a member or organisation officer to confirm a detail."
      }
    ]
  },
  {
    "slug": "spreadsheets-vs-software",
    "title": "Spreadsheets vs Membership Management Software for Martial Arts Organisations",
    "category": "Administration",
    "feature": "membership-management",
    "summary": "Compare how each approach handles updates, administrator access, renewals and reporting. Map your current process before deciding what needs to change.",
    "date": "2026-10-02",
    "status": "published",
    "sections": [
      {
        "title": "Map the work before choosing a tool",
        "text": "List the tasks your team carries out: adding members, recording renewals, checking grades and preparing reports. Note where information is copied between files or where administrators need to ask which version is current."
      },
      {
        "title": "Compare how changes are managed",
        "text": "A spreadsheet can provide a familiar place to organise records. As more administrators become involved, agree who maintains it and how changes are reconciled. When evaluating membership software, check how shared records and administrator roles fit those same responsibilities."
      },
      {
        "title": "Review a complete membership cycle",
        "text": "Compare both approaches using the same example, from a new application through renewal and reporting. Include the effort needed to prepare existing records, train administrators and maintain the process after the initial setup."
      }
    ]
  },
  {
    "slug": "kyu-dan-grading-records",
    "title": "Managing Kyu and Dan Grading Records Digitally",
    "category": "Grading",
    "feature": "grading-management",
    "summary": "Agree how grades, dates and supporting certificates are recorded. Define who can add or correct records and how administrators review a member’s history.",
    "date": "2026-10-02",
    "status": "published",
    "sections": [
      {
        "title": "Agree how grades are recorded",
        "text": "Use a consistent approach to recording Kyu and Dan grades, dates and supporting certificates. Identify how the record connects to the member, so administrators can follow an individual’s history."
      },
      {
        "title": "Define the review process",
        "text": "Decide who records a grading result and who resolves corrections or missing information. When moving older records into a digital system, identify entries that need checking instead of guessing missing details."
      },
      {
        "title": "Keep certificates connected",
        "text": "Make the relationship between a recorded grade and its certificate clear. A shared process helps grading administrators answer questions without searching through separate collections of files."
      }
    ]
  },
  {
    "slug": "membership-renewal-practices",
    "title": "Membership Renewal Best Practices",
    "category": "Membership",
    "feature": "membership-management",
    "summary": "Map the journey from a renewal reminder to an updated membership record. Make responsibilities clear and check which members need follow-up.",
    "date": "2026-10-02",
    "status": "published",
    "sections": [
      {
        "title": "Map the renewal journey",
        "text": "Write down the steps from the first reminder to the updated membership record. Include the information members need to provide and the checks administrators perform before completing the renewal."
      },
      {
        "title": "Make follow-up responsibilities clear",
        "text": "Agree who reviews approaching expiry dates and who answers renewal questions. Use consistent membership statuses so officers can distinguish a completed renewal from an application that needs attention."
      },
      {
        "title": "Check the record after renewal",
        "text": "Confirm that the membership record and relevant documentation reflect the completed renewal. Review recurring questions with your team and use them to improve the instructions members receive."
      }
    ]
  },
  {
    "slug": "multi-club-organisations",
    "title": "Managing Multi-Club Martial Arts Organisations",
    "category": "Organisation",
    "feature": "organisation-management",
    "summary": "Document the relationship between clubs and the wider association. Identify the information local administrators and organisation officers each need.",
    "date": "2026-10-02",
    "status": "published",
    "sections": [
      {
        "title": "Describe the organisation structure",
        "text": "List the clubs, associations and any wider governing body involved. Record where membership administration happens and which responsibilities belong to local clubs or organisation officers."
      },
      {
        "title": "Agree shared definitions",
        "text": "Use a consistent meaning for membership statuses, club affiliations and grading information. This makes records easier to interpret when information is used beyond the club that maintains it."
      },
      {
        "title": "Plan access and reporting together",
        "text": "Identify the records each role needs for its work and the reports used by the wider organisation. Decide who resolves changes involving more than one club, such as a member moving between dojos."
      }
    ]
  },
  {
    "slug": "data-protection-considerations",
    "title": "Data Protection Considerations for Membership Organisations",
    "category": "Planning",
    "feature": "membership-management",
    "summary": "Questions to help organisation officers review the information they hold, administrator responsibilities and areas that need specialist advice.",
    "date": "2026-10-02",
    "status": "published",
    "sections": [
      {
        "title": "Start with an inventory",
        "text": "As a planning exercise, list the membership information your organisation holds and the places it is kept. Include shared files, email attachments and records maintained separately by clubs."
      },
      {
        "title": "Prepare questions about responsibilities",
        "text": "Which officers use each record? Who reviews access when an administrator changes roles? Who receives member enquiries? Record these questions and identify the person responsible for coordinating the answers."
      },
      {
        "title": "Identify decisions that need specialist advice",
        "text": "Prepare questions about retention, sharing information and handling enquiries for a qualified adviser. This article is an organisational planning checklist, not legal advice or a statement that a particular process meets data-protection requirements."
      }
    ]
  }
]

export function visibleArticles(entries) {
  return entries.filter(entry => entry.status !== 'hidden').sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
}
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
}

// Product announcements must be approved before appearing anywhere on the public site.
export function publishedUpdates() {
  return visibleArticles(whatsNew).filter(entry => entry.status === 'published')
}
