function MenuBar() {
  var menuBar = document.getElementById("MenuBar");
  if (menuBar.style.height === "0px") {
    menuBar.style.height = "200px";
  } else {
    menuBar.style.height = "0px";
  }
}
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    themeSwitch.classList.remove('dark-mode');
    themeSwitch.classList.add('light-mode');
    themeSwitch.textContent = '✺ Light Mode';
  } else {
    body.classList.add('dark-mode');
    themeSwitch.classList.remove('light-mode');
    themeSwitch.classList.add('dark-mode');
    themeSwitch.textContent = 'Dark Mode';
  }
});


// Sign up Authenticathion Code
const supabaseUrl = 'https://dzbhjsgcqbkitbboijym.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6Ymhqc2djcWJraXRiYm9panltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MjQ1NTgsImV4cCI6MjA1MzQwMDU1OH0.MwMPSfRTeVpsbdg9wTp_Lnb0IeZVCDGW3cMWMF7BZ8g';

const supabase = createClient(supabaseUrl, supabaseKey);

async function signUp(username, email, password) {
    try {
        const { user, session, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            throw error;
        }

        // Handle success: You might want to store the user data in your database
        console.log(user);
        console.log(session);
    } catch (error) {
        console.error("Error signing up:", error);
    }
}
