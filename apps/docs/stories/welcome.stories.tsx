import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Welcome/Landing Page',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

// Interactive landing page
export const Default: Story = {
  render: () => (
    <div
      style={{
        padding: '60px',
        fontFamily: 'Arial, sans-serif',
        background: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#333', marginBottom: '40px' }}>🚀 Welcome to Our UI Component Library</h1>
      <p style={{ color: '#666', fontSize: '18px', maxWidth: '800px', margin: '0 auto 50px' }}>
        Explore reusable components designed with **Atomic Design & BASIC framework**.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <a href="https://your-docs-url.com" style={buttonStyle}>
          📖 Documentation
        </a>
        <a href="https://figma.com/file/your-figma-url" style={buttonStyle}>
          🎨 Figma Designs
        </a>
        <a href="https://github.com/your-repo" style={buttonStyle}>
          🏗 GitHub
        </a>
      </div>
    </div>
  ),
};

const buttonStyle = {
  padding: '10px 16px',
  backgroundColor: '#007BFF',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
};
