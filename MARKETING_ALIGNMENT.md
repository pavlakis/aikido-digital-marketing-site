# Marketing Message Alignment with aikido.digital

This document summarizes the marketing message changes made to align with https://aikido.digital/

## Key Changes

### Core Messaging Shift

**Before:** Generic martial arts/dojo management platform with comprehensive features
**After:** Aikido-specific membership management platform with simple, focused messaging

### Main Value Propositions

1. **Primary Message:** "Aikido Membership Management"
2. **Tagline:** "Take control of your organisation's memberships"
3. **Supporting Message:** "We provide the tools, so that you can focus on the art"
4. **Positioning:** Available by invite only (exclusive)

## Files Updated

### 0. Navigation and Routing
- **Removed:** Pricing page from navigation (`src/components/NavBar.vue`)
- **Removed:** Pricing route from router configuration (`src/router/index.js`)
- **Note:** PricingView.vue file still exists but is no longer accessible via navigation

### 1. Home Page (`src/views/Home.vue`)
- **Hero Heading:** Changed from "Spend Less Time on Admin. More Time on Aikido." to "Aikido Membership Management"
- **Hero Subtext:** Simplified from comprehensive platform description to focused membership management message
- **Trusted By Section:** Changed from "dojos, associations, organisations and governing bodies, that have moved to digital-first, paperless memberships" to simpler "dojos and associations managing their memberships with aikido.digital"

### 2. About Page (`src/views/About.vue`)
- Changed from "DojoFlow" to "aikido.digital"
- Simplified from "martial arts schools manage students, schedules, and billing" to "membership management for aikido organisations"
- Added tagline: "We provide the tools, so that you can focus on the art"

### 3. Features Page (`src/views/FeaturesView.vue`)
- **Heading:** Changed from "Comprehensive Features" to "Membership Management Features"
- **Features Updated (now 3 features):**
  - Member Management (formerly Student Progress Tracking)
  - Organisation Structure (formerly Automated Billing)
  - Digital Records (formerly Communication Tools)
  - ~~Secure & Private~~ (removed February 23, 2026)
- Focus shifted from class scheduling and billing to membership records and organisation management

### 4. Pricing Page (`src/views/PricingView.vue`)
- **Heading:** Changed from "Choose Your Plan" to "Membership Pricing"
- **Plans Updated:**
  - "Dojo Management" → "Dojo Plan" (for individual dojos)
  - "Organization & Affiliations" → "Organisation Plan" (for associations)
- **Features Simplified:**
  - Removed: class scheduling, automated billing, mobile app, tournament management
  - Added: member records, grade tracking, digital membership cards, hierarchical structure
- **Call to Action:** Changed from "Choose Plan" to "Request Access"
- **Footer:** Changed from "14-day free trial" to "Available by invite only"

### 5. Contact Page (`src/views/ContactView.vue`)
- Changed reference from "DojoFlow" to "aikido.digital"
- **Removed:** "Call Us" contact method (phone support)
- **Removed:** "Live Chat" contact method
- **Removed:** Contact form (all fields and submission functionality)
- **Simplified:** Two-card layout with Email and Twitter contact only
- Direct communication approach: info@aikido.digital and @aikidodigital on Twitter
- Aligns with professional, asynchronous communication model and invite-only positioning

### 6. Footer (`src/App.vue`)
- **Brand:** Changed from "AikidoDigital" to "aikido.digital"
- **Description:** Simplified from comprehensive platform to "Simple membership management for aikido organisations"
- **Social Media:** Removed Facebook, Instagram, LinkedIn; kept only Twitter (@aikidodigital)
- **Contact:** Changed email from "info@dojoflow.com" to "info@aikido.digital"
- **Removed:** Phone number and physical address (not present on aikido.digital)

### 7. Meta Tags (`index.html`)
- **Title:** Changed from "Aikido Digital" to "aikido.digital - Aikido Membership Management"
- **Description:** Added meta description matching the main value proposition

### 8. README.md
- Updated project description to reflect aikido.digital branding
- Clarified it's a membership management platform (not comprehensive dojo management)

## Messaging Principles Applied

1. **Simplicity:** Removed complex feature lists, focused on core membership management
2. **Aikido-Specific:** All messaging emphasizes aikido (not generic martial arts)
3. **Organisation-Centric:** Focus on organisations and associations, not individual students
4. **Exclusivity:** "Available by invite only" positioning
5. **Focus on the Art:** "We provide the tools, so that you can focus on the art" emphasizes that admin is secondary to aikido practice

## Consistency with AikidoDigital Brand

The marketing messages now align with:
- Main heading: "Aikido Membership Management"
- Subheading: "Take control of your organisation's memberships"
- Availability: "Available by Invite Only"
- Navigation: Home, Features (Online Membership), Contact (Login)
- Twitter presence: @aikidodigital
- Contact: info@aikidodigital.com
- Simple, focused value proposition without overwhelming feature lists

**Brand Clarity:**
- **Marketing Website:** aikidodigital.com (this repository)
- **Product/Members Portal:** aikido.digital (separate, members-only)
- **Brand Name:** AikidoDigital

