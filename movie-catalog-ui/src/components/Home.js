import React from 'react'

function Home() {
  const hour = new Date().getHours();

  let greeting = "Hello";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  return (
    <div>
      <h3>Hi 👋</h3>
      <h5>{greeting}</h5>
      <h6>I'm RYMEC Student, Click on above links for exploring workshop</h6>
    </div>
  );
}

export {
    Home
}