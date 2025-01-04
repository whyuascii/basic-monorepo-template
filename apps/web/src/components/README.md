When to Use ui/components vs web/src/components

1. Use ui/components for Shared, Reusable Components
   Components in packages/ui are designed to be:

Reusable Across Apps: They can be used in multiple apps, like web, api, or future SaaS products.
Generalized: Not specific to any one app's business logic or design.
Design System-Aligned: Follows consistent styles, themes, and patterns defined by your design system.
Example Components:
Button, Input, Card, Modal, Table.

2. Use web/src/components for App-Specific Components
   Components in apps/web are:

Specific to the Web App: Tied to app-specific features, layouts, or business logic.
Not Reusable Across Apps: Designed to serve this app only, even if they use ui components internally.
Customized for App Needs: Might wrap or extend ui components with app-specific behavior.
Example Components:

Navbar, Sidebar, Footer, DashboardCard, or other components that include ui components but also handle routing, API calls, or app-specific logic.

How to Decide Where a Component Belongs
Question ui/components web/src/components
Will it be used in multiple apps? Yes No
Is it tied to business logic? No Yes
Does it implement app-specific routing, API calls, or layout? No Yes
Does it adhere strictly to the design system? Yes Possibly
Example Button, Modal, Input Navbar, DashboardCard, Footer
