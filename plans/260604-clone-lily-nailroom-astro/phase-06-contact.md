# Phase 06 — Contact / Booking Page (lien-he)

## Context links
- Parent plan: [plan.md](./plan.md)
- Depends on: Phase 01 (layout), Phase 02 (partials + contact data in site.ts), Phase 03 (Button/SectionTitle/PageHero).
- Input reports (intended, MISSING): see plan.md.
- Source of truth: c:/Users/vanqu/Chip Nail/lily_raw.html
  (contact widget 430-561, footer info 406-415, microdata 645-663).

## Overview
- Date: 2026-06-04
- Description: Build /lien-he: a front-end-only contact/booking form (fullname, phone, email,
  subject, message) with client-side validation + success state, the salon contact info block,
  and a map (Google Maps embed or link). NO backend — submit shows success + offers Zalo/phone.
- Priority: P1.
- Implementation status: Not started.
- Review status: Not reviewed.

## Key Insights
- Source has NO real form (original used a floating contact widget + Zalo/Messenger/Maps deep
  links). ASSUMPTION (locked by user): form is UI-only; success = inline confirmation + Zalo/phone
  CTAs. Clearly documented as an assumption in README.
- Contact facts reused from site.ts: address "2/10 Bau Bang, Phuong Tan Binh, Ho Chi Minh",
  phone 0878050144, email lilynailroom@gmail.com, Zalo zalo.me/0878050144, Maps goo.gl link.
- Geo from microdata: lat 10.823099, lng 106.629664 -> use for the map embed.

## Requirements
Functional:
- Form fields: Ho ten (fullname, required), So dien thoai (phone, required, VN pattern),
  Email (optional, format check), Tieu de (subject, required), Noi dung (message, required).
- On submit: validate; if invalid show inline field errors + focus first error; if valid,
  prevent default, hide form / show success panel ("Cam on ... se lien he som"), offer
  "Goi ngay" (tel) + "Chat Zalo" buttons.
- Contact info block (address/phone/email/hours-sample) + social links (reuse from site.ts).
- Map: Google Maps iframe embed centered on geo coords, OR a "Xem ban do" link to the goo.gl Maps URL.
Non-functional:
- Accessible form: <label for>, aria-invalid, aria-describedby for errors, keyboard friendly.
- No backend, no network call; pure client JS. Reduced-motion respected. Responsive 2-col -> 1-col.

## Architecture
- src/pages/lien-he.astro: PageHero + two-column (form | info+map) using shared primitives.
- src/components/sections/ContactForm.astro: the form markup + a module script for validation +
  success toggle (vanilla; no library, no SweetAlert).
- Validation: required checks, phone regex (^(0|\+84)\d{8,10}$), email regex; messages in VN.
- Success state: toggle [data-submitted] on a wrapper; show success panel, hide form.
- Map embed via <iframe loading="lazy"> Google Maps; fallback link if user prefers.

## Related code files
Create:
- c:/Users/vanqu/Chip Nail/src/pages/lien-he.astro
- c:/Users/vanqu/Chip Nail/src/components/sections/ContactForm.astro
- c:/Users/vanqu/Chip Nail/src/components/sections/ContactInfo.astro (address/phone/email/hours + socials)
- c:/Users/vanqu/Chip Nail/src/scripts/contact-form.ts (validation + success)
Modify:
- c:/Users/vanqu/Chip Nail/src/data/site.ts (add geo coords + Maps embed URL + opening hours sample)

## Implementation Steps
1. Add geo {lat:10.823099,lng:106.629664}, mapsUrl, and sample openingHours to site.ts.
2. Build ContactInfo.astro: themed card listing address/phone/email/hours + social icon links
   (reuse socials from site.ts) + map iframe (lazy) or "Xem ban do" link.
3. Build ContactForm.astro: semantic <form novalidate> with the 5 fields, labels, error <span>s,
   submit Button, and a hidden success panel (Goi ngay + Chat Zalo CTAs).
4. contact-form.ts: on submit -> validate each field; set aria-invalid + show messages; focus first
   error; if all valid -> e.preventDefault(), reveal success panel, hide form, reset fields.
   Guard with astro:page-load. No fetch/POST.
5. lien-he.astro: PageHero ("Lien he") + SectionTitle + responsive grid [ContactForm | ContactInfo].
6. Verify: empty submit shows errors; valid submit shows success + working tel/Zalo links;
   mobile single-column; both themes; keyboard navigation + screen-reader labels.

## Todo list
- [ ] site.ts: geo + mapsUrl + hours
- [ ] ContactInfo.astro (info + map + socials)
- [ ] ContactForm.astro (5 fields + labels + errors + success panel)
- [ ] contact-form.ts (validate + success, no backend)
- [ ] lien-he.astro assembly (responsive 2-col)
- [ ] Verify validation, success, links, a11y, both themes

## Success Criteria
- Submitting empty/invalid shows VN inline errors and focuses first invalid field.
- Valid submit shows success panel with working Goi ngay (tel:) + Chat Zalo links; no network request.
- Map embed/link points to correct location; info matches site.ts.
- Fully responsive + accessible; works in dark + light.

## Risk Assessment
- User expects real submission -> README states clearly: front-end only, no backend (assumption).
  Easy future upgrade path: wire to Netlify Forms / Formspree (note as option, not built now).
- Maps iframe blocked/slow -> provide text link fallback; lazy-load iframe.

## Security Considerations
- No data leaves the browser (no backend) -> no PII storage/transmission risk now.
- If later wired to a backend: add server-side validation, spam protection (the source had a
  reCAPTCHA/Turnstile sitekey, currently inactive), and rate limiting. Out of scope here.
- External links rel=noopener; iframe sandboxed where feasible.

## Next steps
- Phase 07 audits this page for a11y/responsive/Lighthouse.
- Unresolved: confirm no real submission needed (assumed); confirm opening hours values.
