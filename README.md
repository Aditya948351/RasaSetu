<h1 align="center">🌉 RasaSetu – The Bridge of Emotions </h1>

<h3 align="center"><em>Experience your emotions. Reflect. Heal. With content that truly connects.</em></h3>
<p align="center">
  <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/RasaSetu/Images/Emotions.png" alt="Various Emotions Banner" width="800"/>
</p>


<hr/>

  <h3 align="center"><em>For Now Four Emotions - Happy😀, Sad 😔, Fear 😨 and Angry 😤</em></h3>
  
<p align="center">
  🔗 <b>APIs Deployed via Render</b> | <a href="https://github.com/Aditya948351/Emotions_API" target="_blank">GitHub Repo</a><br>
  <a href="https://byte-verse22-2ets9ae7m-kaustubhs-projects-add60962.vercel.app" align="center">Deployment_Link</a>
  <h3 align="center">We've Used UnsplashAPI</h3>
</p>


  

<h2>🧠 Problem Statement</h2>
<blockquote>
Design a platform that recommends content (music, Mood Freshner, quotes, videos) based on the user's emotional state using simple user input and sentiment analysis, with options for journaling and self-expression as emotional therapy.
</blockquote>

<h2>✨ Core Features</h2>

<table>
  <tr><th>Feature</th><th>Description</th></tr>
  <tr><td>😊 Mood Selector</td><td>Pick from visual moods: Calm, Sad, Anxious, Angry, etc.</td></tr>
  <tr><td>🧠 Sentiment Entry</td><td>Type a few lines → Backend runs sentiment analysis (TextBlob / VADER)</td></tr>
  <tr><td>🎵 Curated Content Feed</td><td>Music, quotes, short videos based on detected emotion</td></tr>
  <tr><td>📔 Mood Journal</td><td>Journaling space to write, track and reflect</td></tr>
  <tr><td>🧘 Express Mode</td><td>Toggle breathing animations, meditation links</td></tr>
  <tr><td>💡 Uplift Mode</td><td>Push notifications for motivational quotes (Pro Feature)</td></tr>
</table>

<h2>💸 Subscription Model (Powered by Stripe)</h2>

<table>
  <tr>
    <th>Plan</th>
    <th>Price</th>
    <th>Features</th>
    <th>Stripe Integration Flow</th>
  </tr>

  <tr>
    <td><b>Free</b></td>
    <td>₹0 /month</td>
    <td>
      • Access to 2 moods/day<br>
      • Basic journaling<br>
      • Limited content feed
    </td>
    <td>
      • No payment required<br>
      • Registered via Firebase Auth<br>
      • Can upgrade to paid plan anytime
    </td>
  </tr>

  <tr>
    <td><b>Pro</b></td>
    <td>₹49 /month</td>
    <td>
      • Unlimited mood entries<br>
      • Mood-based music/videos<br>
      • Journaling analytics<br>
      • “Uplift” mode for push motivation
    </td>
    <td>
      • Stripe Checkout (one-click)<br>
      • Auto-billing every 30 days<br>
      • Webhook to update user tier in Firestore<br>
      • Cancel anytime via Stripe Billing Portal
    </td>
  </tr>

  <tr>
    <td><b>Pro+</b></td>
    <td>₹99 /month</td>
    <td>
      • All Pro features<br>
      • Custom mood packs (festive/spiritual)<br>
      • Long-term emotional insights<br>
      • Export journal as PDF<br>
      • Early access to beta features
    </td>
    <td>
      • Stripe Checkout with dynamic pricing<br>
      • Webhook auto-syncs access permissions<br>
      • Prompts upgrade UX inside app<br>
      • Billing emails sent via Stripe
    </td>
  </tr>
</table>


<h2>🛠️ Tech Stack</h2>
## 🛠️ Tech Stack

<ul>
  <li><b>Frontend:</b> 
    <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/refs/heads/RasaSetu/Images/reactVite.jpeg" alt="React Vite" width="16" style="vertical-align: middle;"/> React (Vite)
  </li>
  <li><b>Backend:</b> 
    <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/73570d041e1e630accb414a52113b986f8572ff6/Images/node-js.svg" alt="Node.js" width="16" style="vertical-align: middle;"/> Node.js
  </li>
  <li><b>ML:</b> <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/refs/heads/RasaSetu/Images/python.svg" alt="python" width="16" style="vertical-align: middle;"/> Python,
    Flask, TensorFlow, 
    <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/refs/heads/RasaSetu/Images/deepface.png" alt="DeepFace" width="16" style="vertical-align: middle;"/> DeepFace, 
    <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/refs/heads/RasaSetu/Images/gradio.jpeg" alt="Gradio" width="16" style="vertical-align: middle;"/> Gradio, 
    <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/refs/heads/RasaSetu/Images/opencv.jpeg" alt="OpenCV" width="16" style="vertical-align: middle;"/> OpenCV, 
    <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/refs/heads/RasaSetu/Images/numpy.png" alt="NumPy" width="16" style="vertical-align: middle;"/> NumPy, 
    <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/2c83794814a2237c64d9984aea36c52f5903fb83/Images/pytorch.svg" alt="PyTorch" width="16" style="vertical-align: middle;"/> PyTorch
  </li>
  <li><b>Database:</b> 
    <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/refs/heads/RasaSetu/Images/firebase.png" alt="Firebase" width="16" style="vertical-align: middle;"/> Firebase
  </li>
<!--   <li><b>Deployment:</b> 
    <img src="https://raw.githubusercontent.com/kaustubhpatil322/Byte-Verse/c648d59c4d44d9650fb0996b542400b6e6680566/Images/vercel.svg" alt="Vercel" width="16" style="vertical-align: middle;"/> Vercel
  </li> -->
</ul>

<h2>🌟 Why <span style="color:#A52A2A;"><b>RasaSetu</b></span>?</h2>

<ul>
  <li>🎨 <b>Rooted in Bharatiya Culture</b> – Inspired by the ancient Indian aesthetic philosophy of <b>Rasa (रस)</b>, connecting emotion and art</li>
  
  <li>🧘 <b>Emotion-Centric UI</b> – Calm, meditative colors and culturally mindful layouts for inner peace and clarity</li>
  
  <li>🚀 <b>Hackathon-Ready MVP</b> – Low-code, scalable, and deployable in under 8 hours with Firebase + HTML stack</li>
  
  <li>🏫 <b>Universal Applications</b> – Ideal for Indian schools, mental wellness drives, yoga communities, and corporate HR tools</li>
  
  <li>📿 <b>Optional Spiritual Mode</b> – Optionally integrates mantras, shlokas, and breathing timers for deeper reflection</li>
</ul>


<h2 style="color:#FF5733;">📍 Future Scope</h2>
<ul style="font-size: 16px;">
  <li><span style="color:#4CAF50;">🎤 Voice-Based Emotion Input</span> – Integrating speech analysis for more accurate emotional detection</li>
  
  <li><span style="color:#00BCD4;">📊 Daily Emotional Wellness Streaks</span> – Providing personalized insights based on user data and emotional patterns</li>
  
  <li><span style="color:#FF9800;">🎶 Integration with Spotify/YouTube APIs</span> – Expanding content offering with curated music and videos for emotional well-being</li>
  
  <li><span style="color:#9C27B0;">🇮🇳 Support for Indian Languages</span> – Enabling journaling and emotional input in regional languages like Hindi, Marathi, Tamil, etc.</li>
  
  <li><span style="color:#3F51B5;">🤝 Collaborations & MOUs</span> – Forming partnerships with leading Indian wellness startups such as <b>Mindhouse</b>, <b>InnerHour</b>, and <b>Baazi Games</b> to bring culturally rich emotional wellness tools to a wider audience</li>
</ul>
