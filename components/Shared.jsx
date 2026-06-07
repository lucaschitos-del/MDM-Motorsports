// Shared tokens, components, and utilities
const { useState, useEffect, useRef, useCallback } = React;

const MDM_T = {
  black:         '#0B0B10',
  surfaceDark:   '#14141E',
  surfaceMid:    '#1E1E2E',
  surfaceLight:  '#28283C',
  red:           '#E8001C',
  redDark:       '#B8001A',
  redLight:      '#FF1A33',
  platinum:      '#B8CDD8',
  platinumDark:  '#7A9AAA',
  platinumLight: '#D8E8EE',
  white:         '#FFFFFF',
  offWhite:      '#D8D8E0',
  muted:         '#5A5A72',
  subtle:        '#3A3A52',
  border:        'rgba(255,255,255,0.08)',
  borderMid:     'rgba(255,255,255,0.12)',
  borderStrong:  'rgba(255,255,255,0.18)',
};

function LogoMark({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"
      style={{ width: size, height: size, flexShrink: 0, ...style }}>
      <polygon points="40,4 76,40 40,76 4,40" fill="#E8001C"/>
      <g fill="#FFFFFF">
        <path d="M10 28h6l8 14 8-14h6v24H32V40l-6 10h-2l-6-10v12H10V28z"/>
        <path d="M40 28h10c7 0 11 4.5 11 12s-4 12-11 12H40V28zm5 5v14h4c3.5 0 6-2.5 6-7s-2.5-7-6-7h-4z"/>
      </g>
      <rect x="16" y="57" width="48" height="2" rx="1" fill="#B8CDD8"/>
    </svg>
  );
}

function Logo({ height = 44, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none"
      style={{ height, width: 'auto', ...style }}>
      <g fill="#FFFFFF">
        <path d="M8 16h10l14 28 14-28h10v48H46V36l-10 20h-4L22 36v28H8V16z"/>
        <path d="M62 16h18c14 0 22 9 22 24s-8 24-22 24H62V16zm10 10v28h7c7 0 13-5 13-14s-6-14-13-14h-7z"/>
        <path d="M108 16h10l14 28 14-28h10v48h-10V36l-10 20h-4l-10-20v28h-10V16z"/>
      </g>
      <text x="162" y="44" fontFamily="'Orbitron', sans-serif" fontSize="22" fontWeight="700"
        letterSpacing="6" fill="#B8CDD8" textAnchor="start">MOTORSPORTS</text>
      <rect x="8" y="70" width="304" height="2" fill="#E8001C"/>
    </svg>
  );
}

function RedDivider({ width = 48, style = {} }) {
  return <div style={{ width, height: 2, background: MDM_T.red, flexShrink: 0, ...style }} />;
}

function SectionLabel({ children, style = {} }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600,
      color: MDM_T.red, letterSpacing: '0.2em', textTransform: 'uppercase',
      ...style,
    }}>
      <div style={{ width: 20, height: 1.5, background: MDM_T.red, flexShrink: 0 }} />
      {children}
    </div>
  );
}

function countUp(el, target, suffix = '') {
  if (!el) return;
  const start = performance.now();
  const duration = 1400;
  const frame = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

Object.assign(window, { MDM_T, LogoMark, Logo, RedDivider, SectionLabel, countUp });
