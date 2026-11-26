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
    summary: 'Can a visiting instructor award 1st dan at Saturday’s grading? For a registrar looking after several dojos, answering that question can mean searching old emails or ringing another officer. AikidoDigital’s new Grading Authority module brings your association’s policy and each instructor’s grading authority into one place.',
    seoDescription: 'Keep a consistent grading policy across your dojos, see what each instructor may award and give incoming officers a record of earlier decisions.',
    feature: 'grading-management',
    date: '2026-11-26',
    category: 'Product Update',
    status: 'published',
    image: {
      src: '/marketing/grading-authority-settings.webp',
      fullSize: '/marketing/grading-authority-settings.png',
      width: 2704,
      height: 922,
      alt: 'Example grading limits: Fukushidoin up to 1st kyu at their own dojos, Shidoin up to 2nd dan and Shihan up to 5th dan across all organisation dojos.',
      caption: 'Each association chooses the highest grade each teaching title can award and where its instructors can grade.'
    },
    sections: [
      {
        title: 'Apply your association’s policy across its dojos',
        text: 'If your association uses titles such as Fukushidoin, Shidoin and Shihan, you choose which carry grading authority and set a maximum for each. For Fukushidoin, the limit is a kyu grade. For Shidoin and Shihan, it can be kyu or dan. You also decide whether each title covers the dojos where the instructor holds an appointment or every dojo in the association. When the committee revises a rule, officers can review the change and record their reason before publishing it for all dojos.'
      },
      {
        title: 'Two Shidoin can hold different grading authority',
        text: 'In the example above, the association sets the Shidoin limit at 2nd dan across its dojos. Within that policy, the registrar might authorise one Shidoin to award up to 1st kyu and another up to 2nd dan. Each instructor needs an individual grant and can award grades only within it. An officer can email the instructor the details so they know what they can award before they step on the mat.'
      },
      {
        title: 'Give the next registrar a clear record',
        text: 'When a registrar takes over, each instructor’s teaching history shows who granted their authority, when and how it has changed. Officers can revise or withdraw authority and still refer back to earlier decisions. Your association can also choose an officer role to receive an email when an instructor awards a grade. That gives administrators a way to follow current gradings and answer questions about past decisions without piecing together a predecessor’s correspondence.'
      }
    ]
  }
]

export const resources = []

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
