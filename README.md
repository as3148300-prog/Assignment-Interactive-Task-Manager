# Task Manager App
 
Ye ek simple Task Manager web app hai jisme login/signup, dark-light theme, task add/edit/delete jaisi cheezein hain. Niche poora breakdown hai ki app me kya-kya hai.
 
## Files
 
- `index.html` – Poora page structure (login screen, task section, hero section)
- `style.css` – Saari styling
- `script.js` – Saara functionality (JavaScript)
## Features
 
### 1. Custom Cursor
Mouse jahan bhi move karo, ek circle (`.circlediv`) usi position pe follow karta hai.
 
### 2. Login / Signup
- Shuru me Sign Up form aata hai (Email, Password, Confirm Password).
- "Already have an account? Log in" pe click karke Login form pe switch ho sakte ho, aur wapas bhi.
- Validation hai: agar email/password khali ho, password aur confirm password match na ho, to alert aata hai.
- Signup ke baad jo email-password daala, wahi credentials login ke time check hote hain.
- Sahi email-password daalne pe login section hide ho jata hai aur task section (hero section) dikhne lagta hai.
### 3. Dark / Light Theme
Top-right wale sun/moon icon pe click karne se poore page ka theme switch hota hai – background, text colors, buttons, sab kuch black/white mode ke hisaab se change ho jate hain.
 
### 4. List vs Work Flow Tabs
Hero section me 2 tabs hain:
- **List** – Tasks ki list dikhata hai.
- **Work Flow** – Ek diagram dikhata hai jisme browser rendering pipeline (HTML → DOM → CSSOM → Render Tree) explain kiya gaya hai.
### 5. Add Task
- "Add task" button click karne se ek popup khulta hai jisme task ka naam aur category daalni hoti hai.
- Task add hone ke baad list me naya card add ho jata hai (sath me check, edit aur delete icons ke saath).
- Popup ko close button, cancel button ya X icon se band kar sakte ho.
### 6. Task List ke Actions
Har task ke saamne 3 icons hote hain:
- ✅ **Check** – Task ko complete mark karta hai (strike-through ho jata hai).
- ✏️ **Edit** – Task ka naam/category dobara edit karne ke liye popup khol deta hai.
- ❌ **Delete** – Task ko list se hata deta hai. Agar koi task na bache to ek empty-state image dikhti hai.
### 7. Sign Out
"Sign out" button click karne se task section hide ho jata hai, login screen wapas aa jati hai, aur saare input fields clear ho jate hain.
 
## Tech Used
 
- HTML, CSS, JavaScript (vanilla – koi framework nahi)
- Remixicon (icons ke liye)
- Google Fonts (custom fonts ke liye)
## Note
 
Ye ek front-end only project hai – koi backend/database nahi hai, sab kuch browser ki memory me hi store hota hai (refresh karne pe data reset ho jayega).