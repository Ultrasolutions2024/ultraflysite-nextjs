// src/app/not-found.js

import { redirect } from 'next/navigation';

export default function NotFound() {
  // Redirect to the layout or any page you want
  redirect('/'); // You can change this to '/layout' or any other path

  return null; // No need to return any UI since we're redirecting
}
