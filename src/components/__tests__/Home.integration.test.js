import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import Links from '../Links';

// Unlike the other Home test that mocks the Links component,
// this test doesn't mock Links so we can test the integration

// Remove the mock of Links if it was set by another test
jest.unmock('../Links');

describe('Home and Links Integration', () => {
  // Make sure we're testing with the latest components
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('renders Home with actual Links component', () => {
    render(<Home />);
    
    // Check for elements from Home component
    const nameHeading = screen.getByRole('heading', { level: 1, name: 'Mario Salinas' });
    expect(nameHeading).toBeInTheDocument();
    
    // Check for links from Links component
    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    const frontendMentorLink = screen.getByRole('link', { name: 'Frontend Mentor' });
    
    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(frontendMentorLink).toBeInTheDocument();
  });

  test('all social links render with correct URLs', () => {
    render(<Home />);
    
    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    const frontendMentorLink = screen.getByRole('link', { name: 'Frontend Mentor' });
    
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/mario-salinas-0b13a7236');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/mojave-ghost');
    expect(frontendMentorLink).toHaveAttribute('href', 'https://www.frontendmentor.io/profile/mojabi-geist');
  });

  test('social links open in new tabs', () => {
    render(<Home />);
    
    const allLinks = screen.getAllByRole('link');
    
    // Filter to only get the social links (not the "View Projects" link)
    const socialLinks = allLinks.filter(link => 
      link.textContent === 'LinkedIn' || 
      link.textContent === 'GitHub' || 
      link.textContent === 'Frontend Mentor'
    );
    
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });

  test('View Projects link does not open in new tab', () => {
    render(<Home />);
    
    const projectsLink = screen.getByRole('link', { name: 'View Projects' });
    
    // This link should not have target="_blank"
    expect(projectsLink).not.toHaveAttribute('target', '_blank');
    
    // It should have the hash link to the projects section
    expect(projectsLink).toHaveAttribute('href', '#projects');
  });

  test('Home and Links components maintain proper styling classes', () => {
    render(<Home />);
    
    // Test profile image in Home component
    const profileImage = screen.getByAltText('Profile');
    expect(profileImage).toHaveClass('rounded-full');
    expect(profileImage).toHaveClass('border-8');
    
    // Test the social links
    const socialLinks = screen.getAllByRole('link').filter(link => 
      link.textContent === 'LinkedIn' || 
      link.textContent === 'GitHub' || 
      link.textContent === 'Frontend Mentor'
    );
    
    socialLinks.forEach(link => {
      expect(link).toHaveClass('link-button');
    });
  });
  
  test('Home component renders Links correctly without props', () => {
    // First test that Links works standalone
    const { unmount } = render(<Links />);
    const links1 = screen.getAllByRole('link');
    expect(links1).toHaveLength(3);
    unmount();
    
    // Then test that it works when rendered by Home
    render(<Home />);
    const links2 = screen.getAllByRole('link').filter(link => 
      link.textContent === 'LinkedIn' || 
      link.textContent === 'GitHub' || 
      link.textContent === 'Frontend Mentor'
    );
    expect(links2).toHaveLength(3);
  });
});