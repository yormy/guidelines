# Concrete UX/UI Coding Styleguide — What To Do When Designing & Coding

UX Best practices
- Progressive disclosure: show most important info first, allow drilling down
- Gestalt Principles: group related items with visual hierarchy
- F-Pattern layout: most important content in top-left scanning pattern
- 7+-2 rule: limit cognitive load by showing 5-9 items
- Fitts law: make touch targets 44x44pt minimum
- Accessibility: Screen reader support, proper contrast ratios
- Microinteractions: feedback for user actions
- Empty state: guidance when no data exists
- 
## 1. Structure and Layout

- Use **semantic HTML elements** (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) to organize page content.
- Build layouts with **CSS Grid** for overall page structure and **Flexbox** for smaller UI components.
- Always start with a **mobile-first responsive layout**, then add media queries for larger screens.
- Define a **12-column grid system** or a consistent spacing scale (e.g. 8px or 10px increments) for padding/margins.

## 2. Navigation

- Use a clear, consistent navigation bar at the top or side.
- Mark the current active page clearly with a distinct style (e.g. bold text + underline + accent color).
- On mobile, implement a **hamburger menu** or bottom tab bar.
- Use proper `<a>` tags with `href` for navigation, no JS-only buttons.
- Keyboard focus should be visible on all interactive elements.

## 3. Typography

- Use **system fonts or web-safe fonts** for performance and readability.
- Base font size should be **16px** with a line height of **1.5 to 1.6**.
- Limit font families to **max 2** (one for headings, one for body).
- Headings should follow a hierarchy:
    - `<h1>`: 28-32px, bold
    - `<h2>`: 24-28px, semi-bold
    - `<h3>`: 20-24px, semi-bold
- Paragraphs should be comfortable to read, max **60-75 characters per line**.
- Avoid ALL CAPS except for buttons or very small labels.

## 4. Color and Contrast

- Use a **primary color** and **1-2 secondary colors**, define in CSS variables (`--color-primary`, etc.).
- Ensure text contrast ratio is at least **4.5:1** against background.
- Use semantic colors for UI states:
    - Success (green), Error (red), Warning (orange), Info (blue).
- Avoid using color alone to convey meaning — add icons or text labels.
- Backgrounds: white or very light gray (#F9F9F9) for content areas; dark gray (#222) or black for footers/headers.

## 5. Buttons and Interactions

- Buttons should be at least **44x44 px** (for tap targets).
- Use **consistent button styles**: primary (solid color), secondary (outline), disabled (grayed out).
- Use hover/focus states:
    - Hover: slightly darker background or underline.
    - Focus: visible outline (e.g., `outline: 3px solid #4D90FE`).
- Use semantic HTML: `<button>`, not `<div>` or `<a>` for actions.
- Use transitions (`transition: background-color 0.2s ease`) for smooth state changes.

## 6. Forms and Inputs

- Label every input explicitly with `<label for="inputID">`.
- Inputs should have consistent padding and border-radius (e.g., 8px).
- Use placeholder text sparingly — never as a replacement for labels.
- Show validation states clearly:
    - Success: green border/icon
    - Error: red border and error message below input
- Inputs and buttons aligned vertically with consistent spacing (e.g., 16px gap).
- Group related fields using `<fieldset>` and `<legend>` where appropriate.

## 7. Spacing and White Space

- Use a consistent spacing system (multiples of 8px recommended).
- Add sufficient padding inside cards and containers (minimum 16px).
- Separate sections with vertical spacing of 40-60px on desktop, 24-32px on mobile.
- Avoid cramming text or elements close together; give breathing room.

## 8. Icons and Images

- Use **SVG icons** for sharpness and scalability.
- Icons should be sized consistently (e.g., 16x16, 24x24, or 32x32 px).
- Provide alternative text for images or mark as decorative (`aria-hidden="true"`).
- Optimize images for web — use compressed formats (WebP, JPEG).
- Use lazy-loading (`loading="lazy"`) for below-the-fold images.

## 9. Visual Hierarchy

- Use size, weight, and color to guide the user’s eye:
    - Larger and bolder for important titles/buttons.
    - Muted colors for secondary info.
- Use shadows and elevation (e.g., `box-shadow`) subtly to separate layers or cards.
- Limit the number of competing focal points per screen to 1 or 2.
- Use consistent alignment (left-aligned text is easier to read than centered).

## 10. Animations and Transitions

- Use subtle transitions for hover states, modals, dropdowns (200-300ms ease-in-out).
- Avoid auto-playing or looping animations that distract users.
- Animate only properties that don’t cause layout recalculation (e.g., opacity, transform).

## 11. UI Patterns to Follow

- **Modals:**
    - Use for critical or interruptive tasks.
    - Provide clear close button and close on Escape key.
    - Focus trap inside modal.

- **Cards:**
    - Use for grouped related content with consistent padding and shadow.
    - Keep card width consistent.

- **Tabs:**
    - Horizontal or vertical tabs with clear active tab styling.
    - Use keyboard navigation support.

- **Dropdowns:**
    - Use ARIA roles and keyboard support.
    - Close on outside click or Escape key.

## 12. Accessibility

- Use semantic HTML first.
- Ensure all interactive elements are reachable and usable by keyboard only.
- Use ARIA attributes only to supplement semantic HTML, never to replace it.
- Provide visible focus indicators for all interactive elements.
- Use meaningful alt texts and labels.

