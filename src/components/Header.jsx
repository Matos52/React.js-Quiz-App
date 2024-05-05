import logoImage from '../assets/quiz-logo.png';
import React from 'react';

export default function Header() {
  return (
    <header>
      <img src={logoImage} alt='Logo Image' />
      <h1>ReactQuiz</h1>
    </header>
  );
}
