# SITEFLOW front-end prototype

## Build
- Create a responsive application shell with a compact desktop sidebar, mobile bottom navigation, project switcher, search, breadcrumbs, notifications, and role selector.
- Implement distinct screens for Dashboard, Projects, Visitor Log, Orders, Deliveries, Drawings, Site Photos, Issues, Daily Reports, People, Suppliers, Notifications, Reports, and Settings.
- Add realistic UK construction demo data and label it clearly throughout the interface.
- Make core workflows interactive: visitor check-in/out and emergency view, order creation and timeline, drawing revision selection and PDF preview, delivery receipt, issue creation/status changes, photo capture mock flow, and daily report creation/print view.

## Visual direction
- Establish a premium industrial design system: charcoal/navy shell, off-white work surfaces, graphite panels, construction amber accents, steel-grey rules, strong typography, and restrained motion.
- Prioritise phone usability with large actions, scannable cards, responsive tables, accessible focus states, and stable layouts.

## Technical details
- Keep all state and demo records in typed front-end modules so a later Lovable Cloud integration can replace the data layer cleanly.
- Use TanStack routes for every navigation destination, shared layout components, semantic Tailwind v4 tokens, and route-specific metadata.
- Verify desktop and mobile layouts, critical interactions, and current preview build health.