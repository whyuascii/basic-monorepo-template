export default {
  title: 'Welcome',
};

export const WelcomePage = () => (
  <div
    style={{
      padding: '60px',
      fontFamily: 'Arial, sans-serif',
      background: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    }}
  >
    <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '40px' }}>Welcome to Our UI Component Library</h1>
    <p style={{ textAlign: 'center', color: '#666', fontSize: '18px', maxWidth: '800px', margin: '0 auto 50px' }}>
      The Atomic Design methodology helps break down UIs into smaller, manageable parts, ensuring scalability and
      maintainability. Combining this with the BASIC framework, we can evaluate the quality and effectiveness of each
      component.
    </p>

    <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '15px', marginTop: '50px' }}>
      Atomic Design Framework
    </h2>
    <p style={{ color: '#555', lineHeight: '1.8' }}>
      The Atomic Design methodology categorizes components into different levels:
    </p>
    <ul style={{ color: '#555', lineHeight: '2', paddingLeft: '0', marginBottom: '40px' }}>
      <li>
        <strong>Atoms:</strong> Fundamental elements such as Icons, Fonts, Color Palettes, Typography, Buttons, and
        Headers.
      </li>
      <li>
        <strong>Molecules:</strong> Groups of atoms forming Form Fields, Notification Badges, Avatars, and Banners.
      </li>
      <li>
        <strong>Organisms:</strong> Complex components such as Navigation Bars, Profile Cards, Ad Banners, Sidebars, and
        Forms.
      </li>
      <li>
        <strong>Templates:</strong> Page structures like Dashboard Layouts, Login Pages, and Landing Page Structures.
      </li>
      <li>
        <strong>Pages:</strong> Fully assembled templates such as User Dashboards, Product Listing Pages, and Contact Us
        Pages.
      </li>
    </ul>

    <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '15px', marginTop: '50px' }}>
      Evaluating UI Components with the BASIC Framework
    </h2>
    <ul style={{ color: '#555', lineHeight: '2', paddingLeft: '0', marginBottom: '40px' }}>
      <li>
        <strong>Beauty:</strong> Ensures visual appeal and alignment with the style guide.
      </li>
      <li>
        <strong>Accessibility:</strong> Guarantees usability across all devices and users.
      </li>
      <li>
        <strong>Simplicity:</strong> Keeps interactions intuitive and user-friendly.
      </li>
      <li>
        <strong>Intuitiveness:</strong> Ensures clarity and easy navigation.
      </li>
      <li>
        <strong>Consistency:</strong> Maintains uniformity across different pages.
      </li>
    </ul>

    <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '15px', marginTop: '50px' }}>
      Why Opinionated Design Systems Make Sense
    </h2>
    <ul style={{ color: '#555', lineHeight: '2', paddingLeft: '0', marginBottom: '40px' }}>
      <li>
        <strong>Consistency Across the App:</strong> Standardized patterns, components, and styling.
      </li>
      <li>
        <strong>Ease of Use for Developers:</strong> Clear rules remove ambiguity and enforce best practices.
      </li>
      <li>
        <strong>Avoids Design Debt:</strong> Prevents inconsistent implementations and improves maintainability.
      </li>
      <li>
        <strong>Scalability:</strong> Enables consistent growth across development teams.
      </li>
    </ul>
  </div>
);
