// Import the Supabase client
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client instance
const supabaseUrl = 'https://dzbhjsgcqbkitbboijym.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6Ymhqc2djcWJraXRiYm9panltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MjQ1NTgsImV4cCI6MjA1MzQwMDU1OH0.MwMPSfRTeVpsbdg9wTp_Lnb0IeZVCDGW3cMWMF7BZ8g'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to sign up a user
async function signUpUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    alert('Error signing up:'+ error.message);
  } else {
    alert('User signed up successfully:'+ data.message);
  }
}

// Example usage
const email = 'user@example.com'; // Replace with the user's email
const password = 'your-password'; // Replace with the user's password
signUpUser(email, password);