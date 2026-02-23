# Terms of Service - Decision Documentation

**Date:** February 23, 2026
**Decision:** No public Terms of Service page on marketing website

---

## Rationale

### Why No Terms of Service on Marketing Site

AikidoDigital does **not** have a public Terms of Service page on the marketing website (aikidodigital.com) because:

1. **B2B Contracts Handle Terms**
   - Each organisation signs an individual contract
   - Contract terms are negotiated and tailored per organisation
   - Legal relationship is governed by signed agreements, not web pages

2. **Avoids Legal Conflicts**
   - A public ToS could conflict with contracted terms
   - In disputes, courts might consider both the contract AND the public ToS
   - Simpler to have one source of truth: the signed contract

3. **Industry Standard for B2B SaaS**
   - B2B platforms typically handle terms through contracts
   - Public ToS pages are more common for B2C services
   - Professional services rely on negotiated agreements

4. **Marketing Site vs. Product Portal**
   - aikidodigital.com = Marketing site (public information)
   - aikido.digital = Product portal (member access, governed by contracts)

---

## What We Do Have

### Privacy Policy ✅
**Location:** `/privacy-policy`

**Why we need this:**
- Legal requirement under UK GDPR
- Applies to website visitors (even before becoming customers)
- Required for cookie usage
- Covers both public website and product platform data practices

**Applies to:**
- Website visitors
- Prospective customers
- Current customers and their members
- Anyone whose data we process

---

## Alternative Approaches Considered

### Option 1: Public Terms of Service (Rejected)
**Pros:**
- Common pattern for websites
- Visible transparency

**Cons:**
- Could conflict with individual contracts
- Not appropriate for B2B model
- Creates legal ambiguity
- Organisations expect negotiated contracts

### Option 2: "Master Services Agreement" Download (Considered)
**Pros:**
- Shows standard terms upfront
- Transparency for prospective customers

**Cons:**
- Still might conflict with signed contracts
- Terms are often customized per organisation
- May discourage contact if terms seem rigid

**Decision:** Not implemented, but could be added to sales materials if needed

### Option 3: Contract-Only Model (SELECTED) ✅
**Pros:**
- Clear legal framework
- One source of truth per customer
- Industry standard for B2B SaaS
- Avoids conflicts and ambiguity
- Professional approach

**Cons:**
- Less transparency for casual website visitors

**Decision:** This is the best approach for our B2B model

---

## Footer Structure

### Current Footer (Correct)
```html
<div class="col-md-6 text-md-end">
  <router-link to="/privacy-policy" class="footer-link">
    Privacy Policy
  </router-link>
</div>
```

### Previous Footer (Removed)
```html
<!-- OLD - REMOVED -->
<router-link to="/privacy-policy" class="footer-link me-3">Privacy Policy</router-link>
<router-link to="/terms-of-service" class="footer-link">Terms of Service</router-link>
```

---

## Legal Pages Summary

| Page | Status | Reason |
|------|--------|--------|
| Privacy Policy | ✅ Required | UK GDPR requirement, applies to all visitors |
| Terms of Service | ❌ Not Needed | Handled by individual organisation contracts |
| Cookie Policy | ✅ Included in Privacy | Part of privacy policy |
| Contract Templates | 📄 Separate | Handled in sales/onboarding process |

---

## Sales Process

### How Terms Are Communicated

1. **Discovery Phase**
   - Initial contact via email/Twitter
   - Understand organisation's needs

2. **Proposal Phase**
   - Present platform capabilities
   - Discuss pricing
   - Share standard contract terms (if requested)

3. **Contract Phase**
   - Send formal contract
   - Negotiate terms if needed
   - Sign agreement (digital or physical)

4. **Onboarding Phase**
   - Account creation (governed by signed contract)
   - Member portal access (aikido.digital)
   - Terms are the signed contract, not a web page

---

## Product Portal Considerations

### aikido.digital (Member Portal)

The member portal DOES reference terms, but these are:
- The contract signed between AikidoDigital and the organisation
- Referenced during login/access
- Not a separate "click-to-accept" Terms of Service
- Organisation administrators manage their members under their contract

---

## Best Practices for B2B SaaS

### What B2B SaaS Platforms Typically Have:

**Public Marketing Site:**
- ✅ Privacy Policy (required)
- ✅ Cookie Policy (often part of Privacy Policy)
- ❌ Terms of Service (handled by contracts)
- ✅ Security/Compliance pages (optional but recommended)

**Product Portal (Members Only):**
- ✅ Reference to governing contract
- ✅ Data Processing Agreement (if separate from main contract)
- ✅ Acceptable Use Policy (for platform users)
- ✅ SLA (Service Level Agreement, in contract)

---

## Documentation References

### Related Files
- `PRIVACY_POLICY_ENHANCED.md` - (if exists) Privacy policy details
- Individual organisation contracts (stored separately, not in repo)
- `SEO_IMPLEMENTATION.md` - Updated to reflect 5 pages, not 6

### Removed Files
- ✅ `src/views/TermsOfService.vue` - Deleted
- ✅ Route `/terms-of-service` - Removed from router
- ✅ Sitemap entry - Removed
- ✅ Footer link - Removed

---

## Future Considerations

### If We Add Terms of Service Later

**When it might be needed:**
1. If we launch a self-service signup (B2C-style)
2. If we offer a free tier for individuals
3. If we have a marketplace or community features
4. If legal counsel recommends it for specific compliance

**How to implement:**
1. Create separate ToS for self-service vs. contract customers
2. Clearly distinguish which terms apply to whom
3. Ensure contracts take precedence over public ToS
4. Add "governed by separate agreement" clause for contracted customers

### Template for Future Reference

If you ever need to add a note about this on the website:

> "For organisations using AikidoDigital's platform, terms of service are governed by your individual contract with Aikido Digital Limited. For questions about your agreement, please contact info@aikidodigital.com."

---

## Contact for Questions

If prospective customers ask about terms before signing up:

**Response Template:**
> "AikidoDigital works with organisations on an individual contract basis. We'll provide a contract outlining the terms of service during our proposal phase. This allows us to tailor the agreement to your organisation's specific needs. For more information, please contact info@aikidodigital.com."

---

## Conclusion

**Decision:** No public Terms of Service page is the correct approach for AikidoDigital's B2B model.

**Reason:** Terms are handled through individual contracts with each organisation.

**Legal Pages Status:**
- ✅ Privacy Policy (required and implemented)
- ❌ Terms of Service (not needed - handled by contracts)

This approach is:
- ✅ Industry standard for B2B SaaS
- ✅ Legally cleaner (one source of truth per customer)
- ✅ More professional for enterprise customers
- ✅ Avoids conflicts between web ToS and contracts

---

**Documented By:** AI Assistant  
**Date:** February 23, 2026  
**Status:** DECISION FINAL

