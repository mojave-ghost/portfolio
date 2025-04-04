import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Links from '../Links';

describe('Links Component', () => {
  test('renders links section with correct id and classes', () => {
    render(<Links />);
    
    // Use getByTestId instead of getByRole since section doesn't have implicit role
    const linksSection = screen.getByTestId('links-section');
    expect(linksSection).toHaveAttribute('id', 'links');
    expect(linksSection).toHaveClass('relative');
    expect(linksSection).toHaveClass('flex');
    expect(linksSection).toHaveClass('flex-col');
    expect(linksSection).toHaveClass('items-center');
    expect(linksSection).toHaveClass('justify-center');
  });

  test('renders LinkedIn link with correct attributes', () => {
    render(<Links />);
    
    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/mario-salinas-0b13a7236');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noreferrer');
    expect(linkedinLink).toHaveClass('link-button');
  });

  test('renders GitHub link with correct attributes', () => {
    render(<Links />);
    
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/mojave-ghost');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noreferrer');
    expect(githubLink).toHaveClass('link-button');
  });

  test('renders Frontend Mentor link with correct attributes', () => {
    render(<Links />);
    
    const frontendMentorLink = screen.getByRole('link', { name: 'Frontend Mentor' });
    expect(frontendMentorLink).toBeInTheDocument();
    expect(frontendMentorLink).toHaveAttribute('href', 'https://www.frontendmentor.io/profile/mojabi-geist');
    expect(frontendMentorLink).toHaveAttribute('target', '_blank');
    expect(frontendMentorLink).toHaveAttribute('rel', 'noreferrer');
    expect(frontendMentorLink).toHaveClass('link-button');
  });

  test('renders all three links in the correct order', () => {
    render(<Links />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('LinkedIn');
    expect(links[1]).toHaveTextContent('GitHub');
    expect(links[2]).toHaveTextContent('Frontend Mentor');
  });

  test('all links open in a new tab', () => {
    render(<Links />);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });

  test('all links have the link-button class', () => {
    render(<Links />);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass('link-button');
    });
  });
});