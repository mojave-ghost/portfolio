import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

// Mock Links component
jest.mock('../Links', () => {
  return function MockLinks() {
    return <div data-testid="links-component"></div>;
  };
});

describe('Home Component', () => {
  test('renders profile image with correct attributes', () => {
    render(<Home />);
    
    const profileImage = screen.getByAltText('Profile');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', 'bioPhoto.webp');
    expect(profileImage).toHaveAttribute('width', '200');
    expect(profileImage).toHaveAttribute('height', '200');
    expect(profileImage).toHaveClass('rounded-full');
    expect(profileImage).toHaveClass('border-8');
    expect(profileImage).toHaveClass('border-secondary');
  });

  test('renders name heading correctly', () => {
    render(<Home />);
    
    const nameHeading = screen.getByRole('heading', { level: 1, name: 'Mario Salinas' });
    expect(nameHeading).toBeInTheDocument();
    expect(nameHeading).toHaveClass('text-3xl');
    expect(nameHeading).toHaveClass('text-primary');
    expect(nameHeading).toHaveClass('font-montserrat');
    expect(nameHeading).toHaveClass('font-bold');
  });

  test('renders bio description correctly', () => {
    render(<Home />);
    
    const bioDescription = screen.getByRole('heading', { level: 2 });
    expect(bioDescription).toBeInTheDocument();
    expect(bioDescription.textContent).toContain('Computer Science student');
    expect(bioDescription).toHaveClass('text-text');
  });

  test('renders Links component', () => {
    render(<Home />);
    
    const linksComponent = screen.getByTestId('links-component');
    expect(linksComponent).toBeInTheDocument();
  });

  test('renders View Projects button with correct attributes', () => {
    render(<Home />);
    
    const projectsButton = screen.getByText('View Projects');
    expect(projectsButton).toBeInTheDocument();
    expect(projectsButton).toHaveAttribute('href', '#projects');
    expect(projectsButton).toHaveClass('bg-accent');
    expect(projectsButton).toHaveClass('text-white');
    expect(projectsButton).toHaveClass('animate-shadow-pulse');
    expect(projectsButton).toHaveClass('hover:bg-secondary');
  });

  test('section has correct classes', () => {
    render(<Home />);
    
    // Use container query to find section without data-testid
    const { container } = render(<Home />);
    const homeSection = container.querySelector('section');
    expect(homeSection).toHaveAttribute('id', 'home');
    expect(homeSection).toHaveClass('relative');
    expect(homeSection).toHaveClass('flex');
    expect(homeSection).toHaveClass('min-h-screen');
  });

  test('View Projects button links to projects section', () => {
    render(<Home />);
    
    // Get the projects button
    const projectsButton = screen.getByText('View Projects');
    expect(projectsButton).toHaveAttribute('href', '#projects');
  });
});