import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  ArrowUpRight, 
  RotateCcw, 
  User, 
  Compass, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Mail 
} from 'lucide-react';
import { PERSONAL_INFO, SOFTWARE_TOOLS, DESIGNING_SKILLS, CERTIFICATES } from '../data/portfolioData';
import assistantMascotImg from '../assets/images/hello_hooded_cat_1790410352019.jpg';

interface PortfolioAssistantProps {
  onNavigate: (sectionId: string) => void;
}

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  time: string;
  actionSection?: string;
  actionLabel?: string;
  showMenuAfter?: boolean;
}

// Words that must NEVER be treated as a visitor's name
const NON_NAME_WORDS = new Set([
  'hi', 'hello', 'hey', 'namaste', 'yo', 'sup', 'hola', 'greetings',
  'no', 'nope', 'nah', 'none', 'skip', 'pass', 'nevermind', 'never', 'nothing', 'anonymous', 'guest',
  'about', 'who', 'what', 'where', 'when', 'why', 'how', 'which', 'whom',
  'can', 'could', 'would', 'will', 'should', 'is', 'are', 'am', 'do', 'does', 'did',
  'tell', 'show', 'give', 'explain', 'share', 'list', 'please', 'help', 'menu', 'options', 'back',
  'skills', 'skill', 'tools', 'tool', 'education', 'study', 'college', 'school', 'certificates',
  'certificate', 'certifications', 'project', 'projects', 'work', 'gallery', 'contact', 'email',
  'phone', 'hire', 'talk', 'reach', 'manoj', 'portfolio', 'resume', 'cv', 'bcom', 'degree',
  'ok', 'okay', 'yes', 'yeah', 'sure', 'fine', 'good', 'cool', 'thanks', 'thank', 'nice', 'great',
  'looking', 'interested', 'recruiter', 'student', 'visitor', 'friend', 'human', 'bot', 'assistant',
  'pandu', 'facebook', 'meta', 'google', 'ads', 'marketing', 'digital', 'info', 'information',
  'just', 'here', 'testing', 'check', 'view', 'see', 'explore'
]);

const formatName = (str: string): string => {
  return str
    .trim()
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
};

const extractExplicitName = (text: string): string | null => {
  const clean = text.trim();

  // 1. "By the way, I'm Rahul", "Btw I am Rahul", "By the way, my name is Rahul"
  const btwMatch = clean.match(/(?:by the way,?|btw,?)\s*(?:i['’]?m|i am|my name is|this is|call me|myself)\s+([a-zA-Z]{2,20}(?:\s+[a-zA-Z]{2,20})?)/i);
  if (btwMatch && btwMatch[1]) {
    const candidate = btwMatch[1].trim();
    const firstWord = candidate.split(/\s+/)[0].toLowerCase();
    if (!NON_NAME_WORDS.has(firstWord)) {
      return formatName(candidate);
    }
  }

  // 2. "My name is Rahul", "Call me Rahul", "Myself Rahul", "Change my name to Rahul"
  const directMatch = clean.match(/(?:my name is|call me|myself|change my name to)\s+([a-zA-Z]{2,20}(?:\s+[a-zA-Z]{2,20})?)/i);
  if (directMatch && directMatch[1]) {
    const candidate = directMatch[1].trim();
    const firstWord = candidate.split(/\s+/)[0].toLowerCase();
    if (!NON_NAME_WORDS.has(firstWord)) {
      return formatName(candidate);
    }
  }

  // 3. "I'm Rahul", "I am Rahul"
  const imMatch = clean.match(/^(?:hey,?|hello,?|hi,?)?\s*(?:i['’]?m|i am)\s+([a-zA-Z]{2,20}(?:\s+[a-zA-Z]{2,20})?)(?:[.,!].*)?$/i);
  if (imMatch && imMatch[1]) {
    const candidate = imMatch[1].trim();
    const words = candidate.split(/\s+/);
    const firstWord = words[0].toLowerCase();
    if (!NON_NAME_WORDS.has(firstWord) && words.length <= 2) {
      return formatName(candidate);
    }
  }

  return null;
};

const isDeclineName = (text: string): boolean => {
  const clean = text.trim().toLowerCase().replace(/[.,!]/g, '');
  return /^(no|nope|nah|skip|pass|none|nevermind|nothing|anonymous|guest|no thanks|prefer not to say|idk|i dont want to|i don't want to|why|why do you ask)$/i.test(clean);
};

const isPureGreeting = (text: string): boolean => {
  const clean = text.trim().toLowerCase().replace(/[.,!]/g, '');
  return /^(hi|hello|hey|namaste|yo|sup|hola|good morning|good afternoon|good evening|gm|gn)$/i.test(clean);
};

const isStandaloneName = (text: string): boolean => {
  const clean = text.trim();

  // Must not have question mark or punctuation that indicates query
  if (clean.includes('?') || clean.includes('/') || clean.includes('@')) return false;

  // Must only consist of 1 or 2 alphabetic words
  if (!/^[a-zA-Z]{2,20}(?:\s+[a-zA-Z]{2,20})?$/.test(clean)) return false;

  const words = clean.toLowerCase().split(/\s+/);
  for (const word of words) {
    if (NON_NAME_WORDS.has(word)) return false;
  }

  const lower = clean.toLowerCase();
  if (
    lower.includes('about') ||
    lower.includes('manoj') ||
    lower.includes('skill') ||
    lower.includes('tool') ||
    lower.includes('education') ||
    lower.includes('certif') ||
    lower.includes('contact') ||
    lower.includes('project') ||
    lower.includes('work')
  ) {
    return false;
  }

  return true;
};

interface QueryResult {
  replyText: string;
  targetSection?: string;
  actionLabel?: string;
}

const checkQueryIntent = (input: string, currentVisitorName?: string): QueryResult | null => {
  const lower = input.toLowerCase();

  // 1. About
  if (
    lower.includes('about') || 
    lower.includes('who is') || 
    lower.includes('bio') || 
    lower.includes('manoj') || 
    lower.includes('tell me about') ||
    lower.includes('overview')
  ) {
    return {
      replyText: `Sure! Here's a quick overview of Manoj:\n\nManoj Chetri is a B.Com student exploring Digital Marketing, Business Growth, and Technology. He focuses on practical experience through hands-on projects, content creation, and digital experiments.`,
      targetSection: 'about',
      actionLabel: 'Scroll to About Manoj',
    };
  }

  // 2. Education
  if (
    lower.includes('study') || 
    lower.includes('studied') || 
    lower.includes('education') || 
    lower.includes('college') || 
    lower.includes('school') || 
    lower.includes('degree') || 
    lower.includes('b.com') || 
    lower.includes('bcom') || 
    lower.includes('pandu')
  ) {
    return {
      replyText: `Manoj's academic education:\n• Currently: Pursuing B.Com at Pandu College\n• 12th: Pandu College (Completed)\n• 10th: Grace Educational Institute School (Completed)`,
      targetSection: 'education',
      actionLabel: 'Scroll to Education Section',
    };
  }

  // 3. Skills & Tools
  if (
    lower.includes('skill') || 
    lower.includes('tool') || 
    lower.includes('excel') || 
    lower.includes('canva') || 
    lower.includes('meta business') || 
    lower.includes('software') ||
    lower.includes('tech')
  ) {
    return {
      replyText: `Manoj's core skills and toolkit include:\n• Skills: ${DESIGNING_SKILLS.join(', ')}\n• Tools: ${SOFTWARE_TOOLS.map(t => t.name).join(', ')}.\n\nWould you like to explore another section?`,
      targetSection: 'skills',
      actionLabel: 'View Skills & Tools Section',
    };
  }

  // 4. Certificates & Credentials
  if (
    lower.includes('certif') || 
    lower.includes('credential') || 
    lower.includes('google ads') || 
    lower.includes('blueprint') ||
    lower.includes('course')
  ) {
    return {
      replyText: `Manoj holds verified certifications including:\n• Google: Fundamentals of Digital Marketing (#${CERTIFICATES[0]?.credentialId})\n• Google Skillshop: Google Ads Search Certification (#${CERTIFICATES[1]?.credentialId})\n• Meta: Meta Blueprint (Social Advertising)\n• Computer Applications Course`,
      targetSection: 'certificates',
      actionLabel: 'Scroll to Certificates Section',
    };
  }

  // 5. Projects & Practical Builds
  if (
    lower.includes('project') || 
    lower.includes('portfolio website') || 
    lower.includes('build') ||
    lower.includes('cafe') || 
    lower.includes('guwahati')
  ) {
    return {
      replyText: `Manoj has built two practical AI-assisted web projects:\n1. My Personal Portfolio (built with Google AI Studio)\n2. Guwahati Café Guide (live café discovery guide at affordable-caf-s-in-guwahati.ai.studio)\n\nBoth projects were built while experimenting with web development and practical digital skills.`,
      targetSection: 'projects',
      actionLabel: 'Scroll to Projects Section',
    };
  }

  // 6. Contact / Hire / Email
  if (
    lower.includes('contact') || 
    lower.includes('email') || 
    lower.includes('reach') || 
    lower.includes('hire') || 
    lower.includes('phone') || 
    lower.includes('instagram') || 
    lower.includes('linkedin') || 
    lower.includes('talk') ||
    lower.includes('connect') ||
    lower.includes('collab')
  ) {
    return {
      replyText: `You can get in touch with Manoj directly:\n• Email: ${PERSONAL_INFO.email}\n• Instagram: @${PERSONAL_INFO.instagram}\n• LinkedIn: ${PERSONAL_INFO.linkedin}\nHe is open for freelance projects, digital marketing experiments, and business collaborations.`,
      targetSection: 'contact',
      actionLabel: 'Scroll to Contact Section',
    };
  }

  // 6. Gallery / Photos / Moments / Cafe
  if (
    lower.includes('gallery') || 
    lower.includes('photo') || 
    lower.includes('picture') || 
    lower.includes('moment') || 
    lower.includes('cafe') || 
    lower.includes('nature') || 
    lower.includes('trip')
  ) {
    return {
      replyText: `Manoj's visual gallery includes personal snapshots, cafe moments, scenic nature views in Assam and Delhi, and fitness sessions!`,
      targetSection: 'gallery',
      actionLabel: 'Scroll to Gallery & Moments',
    };
  }

  // 7. Menu / Options / Help / Back
  if (
    lower.includes('menu') || 
    lower.includes('help') || 
    lower.includes('option') || 
    lower.includes('back')
  ) {
    return {
      replyText: currentVisitorName 
        ? `Here are the options, ${currentVisitorName}! What would you like to explore?` 
        : `Here are the options! What would you like to explore?`,
    };
  }

  return null;
};

export const PortfolioAssistant: React.FC<PortfolioAssistantProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visitorName, setVisitorName] = useState<string>('');
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Initialize from sessionStorage if visitor previously provided name in this browser session
  useEffect(() => {
    try {
      const storedName = sessionStorage.getItem('manoj_visitor_name');
      if (storedName && storedName.trim()) {
        setVisitorName(storedName);
        setMessages([
          {
            id: 'init-1',
            sender: 'assistant',
            text: `Welcome back, ${storedName}! 👋\nWhat would you like to explore?`,
            time: getCurrentTime(),
            showMenuAfter: true,
          }
        ]);
        return;
      }
    } catch {
      // Session storage unavailable
    }

    // Default initial greeting: name is asked politely but remains 100% optional
    setMessages([
      {
        id: 'step1-greeting',
        sender: 'assistant',
        text: "Hey! 👋 Welcome to Manoj's portfolio.\nBefore we begin, what's your name?",
        time: getCurrentTime(),
      }
    ]);
  }, []);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  const quickMenuOptions = [
    { label: 'About Manoj', sectionId: 'about', icon: User },
    { label: 'Education', sectionId: 'education', icon: GraduationCap },
    { label: 'Skills', sectionId: 'skills', icon: Compass },
    { label: 'Certificates', sectionId: 'certificates', icon: Award },
    { label: 'Projects', sectionId: 'projects', icon: Briefcase },
    { label: 'Contact', sectionId: 'contact', icon: Mail },
  ];

  const handleResetSession = () => {
    try {
      sessionStorage.removeItem('manoj_visitor_name');
    } catch {
      // Ignore
    }
    setVisitorName('');
    setMessages([
      {
        id: `reset-greeting-${Date.now()}`,
        sender: 'assistant',
        text: "Hey! 👋 Welcome to Manoj's portfolio.\nBefore we begin, what's your name?",
        time: getCurrentTime(),
      }
    ]);
  };

  const handleSectionQuery = (optionLabel: string, sectionId: string) => {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: optionLabel,
      time: getCurrentTime(),
    };

    let replyText = '';
    let actionLabel = '';
    const targetSection = sectionId;

    switch (sectionId) {
      case 'about':
        replyText = `Sure! Here's a quick overview of Manoj:\n\nManoj Chetri is a B.Com student exploring Digital Marketing, Business Growth, and Technology. He focuses on practical experience through hands-on projects, content creation, and digital experiments.`;
        actionLabel = 'Scroll to About Manoj';
        break;

      case 'education':
        replyText = `Manoj's academic education:\n• Currently: Pursuing B.Com at Pandu College\n• 12th: Pandu College (Completed)\n• 10th: Grace Educational Institute School (Completed)`;
        actionLabel = 'Scroll to Education Section';
        break;

      case 'skills':
        replyText = `Manoj's core skills and toolkit include:\n• Skills: ${DESIGNING_SKILLS.join(', ')}\n• Tools: ${SOFTWARE_TOOLS.map(t => t.name).join(', ')}.\n\nWould you like to explore another section?`;
        actionLabel = 'View Skills & Tools Section';
        break;

      case 'certificates':
        replyText = `Manoj holds verified certifications including:\n• Google: Fundamentals of Digital Marketing (#${CERTIFICATES[0]?.credentialId})\n• Google Skillshop: Google Ads Search Certification (#${CERTIFICATES[1]?.credentialId})\n• Meta: Meta Blueprint (Social Advertising)\n• Computer Applications Course`;
        actionLabel = 'Scroll to Certificates Section';
        break;

      case 'contact':
        replyText = `You can get in touch with Manoj directly:\n• Email: ${PERSONAL_INFO.email}\n• Instagram: @${PERSONAL_INFO.instagram}\n• LinkedIn: ${PERSONAL_INFO.linkedin}\nHe is open for freelance projects, digital marketing experiments, and business collaborations.`;
        actionLabel = 'Scroll to Contact Section';
        break;

      default:
        replyText = `Here is information on ${optionLabel} from Manoj's portfolio.`;
        actionLabel = `Go to ${optionLabel}`;
        break;
    }

    const replyMsg: Message = {
      id: `asst-${Date.now() + 1}`,
      sender: 'assistant',
      text: replyText,
      time: getCurrentTime(),
      actionSection: targetSection,
      actionLabel,
      showMenuAfter: true,
    };

    setMessages((prev) => [...prev, userMsg, replyMsg]);
    setInputText('');

    // Smoothly scroll to the section
    onNavigate(targetSection);
  };

  const handleIncomingMessage = (input: string) => {
    const raw = input.trim();
    if (!raw) return;

    // 1. Record user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: raw,
      time: getCurrentTime(),
    };

    // 2. Check if user naturally or explicitly introduces their name ("By the way, I'm Rahul", "My name is Rahul", etc.)
    const explicitName = extractExplicitName(raw);
    if (explicitName) {
      setVisitorName(explicitName);
      try {
        sessionStorage.setItem('manoj_visitor_name', explicitName);
      } catch {
        // Ignore
      }

      // Check if there is also a question or query inside the same message (e.g. "I'm Rahul. Tell me about Manoj")
      const queryResult = checkQueryIntent(raw, explicitName);
      if (queryResult) {
        const replyMsg: Message = {
          id: `asst-${Date.now() + 1}`,
          sender: 'assistant',
          text: `Nice to meet you, ${explicitName}! 👋\n\n${queryResult.replyText}`,
          time: getCurrentTime(),
          actionSection: queryResult.targetSection,
          actionLabel: queryResult.actionLabel,
          showMenuAfter: true,
        };
        setMessages((prev) => [...prev, userMsg, replyMsg]);
        setInputText('');
        if (queryResult.targetSection) {
          onNavigate(queryResult.targetSection);
        }
        return;
      }

      // Plain name introduction
      const replyMsg: Message = {
        id: `asst-${Date.now() + 1}`,
        sender: 'assistant',
        text: `Nice to meet you, ${explicitName}! 👋\nWhat would you like to explore?`,
        time: getCurrentTime(),
        showMenuAfter: true,
      };
      setMessages((prev) => [...prev, userMsg, replyMsg]);
      setInputText('');
      return;
    }

    // 3. If visitorName is NOT yet collected:
    if (!visitorName) {
      // Check if visitor is declining to give a name ("no", "skip", "pass", "no thanks", etc.)
      if (isDeclineName(raw)) {
        const replyMsg: Message = {
          id: `asst-${Date.now() + 1}`,
          sender: 'assistant',
          text: `No problem at all! 👋\nWhat would you like to explore?`,
          time: getCurrentTime(),
          showMenuAfter: true,
        };
        setMessages((prev) => [...prev, userMsg, replyMsg]);
        setInputText('');
        return;
      }

      // Check if visitor replied with just a greeting ("hi", "hello", "hey")
      if (isPureGreeting(raw)) {
        const replyMsg: Message = {
          id: `asst-${Date.now() + 1}`,
          sender: 'assistant',
          text: `Hello! 👋 Welcome to Manoj's portfolio.\nWhat would you like to explore?`,
          time: getCurrentTime(),
          showMenuAfter: true,
        };
        setMessages((prev) => [...prev, userMsg, replyMsg]);
        setInputText('');
        return;
      }

      // Check if visitor typed a clear standalone name (e.g. "Rahul", "Rahul Sharma")
      if (isStandaloneName(raw)) {
        const cleanName = formatName(raw);
        setVisitorName(cleanName);
        try {
          sessionStorage.setItem('manoj_visitor_name', cleanName);
        } catch {
          // Ignore
        }

        const replyMsg: Message = {
          id: `asst-${Date.now() + 1}`,
          sender: 'assistant',
          text: `Nice to meet you, ${cleanName}! 👋\nWhat would you like to explore?`,
          time: getCurrentTime(),
          showMenuAfter: true,
        };
        setMessages((prev) => [...prev, userMsg, replyMsg]);
        setInputText('');
        return;
      }
    }

    // 4. Regular question or command handling (never blocks, never treats questions as names, never overwrites visitorName)
    const queryResult = checkQueryIntent(raw, visitorName);
    if (queryResult) {
      const replyMsg: Message = {
        id: `asst-${Date.now() + 1}`,
        sender: 'assistant',
        text: queryResult.replyText,
        time: getCurrentTime(),
        actionSection: queryResult.targetSection,
        actionLabel: queryResult.actionLabel,
        showMenuAfter: true,
      };
      setMessages((prev) => [...prev, userMsg, replyMsg]);
      setInputText('');
      if (queryResult.targetSection) {
        onNavigate(queryResult.targetSection);
      }
      return;
    }

    // 5. Fallback grounded response for other portfolio inquiries
    const replyMsg: Message = {
      id: `asst-${Date.now() + 1}`,
      sender: 'assistant',
      text: visitorName
        ? `I answer questions strictly based on Manoj's portfolio, ${visitorName}! You can ask about his bio, education, skills, certificates, or contact info.\n\nWhat would you like to explore?`
        : `I answer questions strictly based on Manoj's portfolio! You can ask about his bio, education, skills, certificates, or contact info.\n\nWhat would you like to explore?`,
      time: getCurrentTime(),
      showMenuAfter: true,
    };
    setMessages((prev) => [...prev, userMsg, replyMsg]);
    setInputText('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    handleIncomingMessage(inputText);
  };

  return (
    <>
      {/* 1. FIXED FLOATING CAT MASCOT TRIGGER (Always visible on mobile, tablet & desktop at bottom-right) */}
      {!isOpen && (
        <div 
          id="assistant-mascot-fixed-trigger"
          style={{ position: 'fixed', zIndex: 9999, display: 'block', visibility: 'visible', opacity: 1, pointerEvents: 'auto' }}
          className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 md:right-6 md:bottom-6 lg:right-8 lg:bottom-8 select-none"
        >
          {/* Entire Cat Mascot is Clickable */}
          <button
            type="button"
            id="cat-mascot-trigger-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Open Manoj's Assistant"
            style={{ display: 'flex', visibility: 'visible', opacity: 1, pointerEvents: 'auto', cursor: 'pointer' }}
            className="group flex flex-col items-center cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95 text-center"
          >
            {/* Playful Handwritten Label with Curved Arrow */}
            <div className="flex flex-col items-center select-none pointer-events-none mb-0.5">
              <div className="flex items-baseline gap-0.5 sm:gap-1 font-script leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span className="text-[#BE123C] text-sm xs:text-base sm:text-lg md:text-xl font-bold rotate-[-5deg] tracking-wide">
                  Manoj’s
                </span>
                <span className="text-white text-xs xs:text-sm sm:text-base md:text-lg font-bold rotate-[2deg] tracking-wide">
                  Assistant
                </span>
              </div>

              {/* Small curved burgundy arrow pointing toward the cat */}
              <svg 
                className="w-6 h-3 xs:w-7 xs:h-4 sm:w-8 sm:h-5 md:w-9 md:h-5 text-[#BE123C] mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" 
                viewBox="0 0 55 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M10 5C22 3 40 8 38 23" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeDasharray="4 3" 
                />
                <path 
                  d="M31 18L38 24L44 16" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>

            {/* Cat Mascot Image with Clean Cutout & Subtle Burgundy Glow */}
            <div className="relative">
              {/* Subtle ambient burgundy pulse behind the cat */}
              <div className="absolute inset-0 bg-[#8B001F]/30 blur-xl rounded-full scale-90 group-hover:scale-115 group-hover:bg-[#BE123C]/50 transition-all duration-300 pointer-events-none" />

              <img
                src={assistantMascotImg}
                alt="Manoj's Assistant Mascot"
                referrerPolicy="no-referrer"
                className="relative w-14 xs:w-16 sm:w-20 md:w-24 lg:w-26 h-auto object-contain rounded-xl sm:rounded-2xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] transition-all duration-300 group-hover:drop-shadow-[0_15px_30px_rgba(190,18,60,0.4)]"
              />

              {/* Small interactive speech hint on hover */}
              <div className="absolute -bottom-1 sm:-bottom-1.5 left-1/2 -translate-x-1/2 px-1.5 xs:px-2 sm:px-2.5 py-0.5 rounded-full bg-[#8B001F] text-white border border-[#BE123C]/60 text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-wider uppercase shadow-xl whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
                <span>Ask Me! 💬</span>
              </div>
            </div>
          </button>
        </div>
      )}

      {/* 2. CHAT POPUP WINDOW (Attached to VIEWPORT at bottom-right, full fit on mobile & tablet) */}
      {isOpen && (
        <div 
          id="portfolio-assistant-window"
          style={{ position: 'fixed', zIndex: 9999 }}
          className="fixed bottom-2 right-2 sm:bottom-5 sm:right-5 md:bottom-7 md:right-7 w-[calc(100vw-1rem)] sm:w-[380px] max-w-[400px] h-[calc(100vh-1rem)] sm:h-[520px] max-h-[580px] bg-[#0d0a0b] border border-[#8B001F]/40 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(139,0,31,0.25)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-label="Manoj's Assistant Chat Window"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-[#150d10] border-b border-[#8B001F]/30 select-none">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-[#BE123C]/60 bg-black shadow-sm">
                <img 
                  src={assistantMascotImg} 
                  alt="Manoj's Cat Assistant" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-black" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
                  <span>Manoj's Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#BE123C]" />
                </h3>
                <p className="text-[10px] text-neutral-400 font-mono tracking-wider">
                  {visitorName ? `ASSISTING ${visitorName.toUpperCase()}` : 'PORTFOLIO GUIDE • ONLINE'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {(visitorName || messages.length > 1) && (
                <button
                  onClick={handleResetSession}
                  title="Reset conversation / Change name"
                  aria-label="Restart conversation"
                  className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                id="assistant-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close Assistant"
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-[13px] bg-gradient-to-b from-[#0d0a0b] to-[#070708]">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
                >
                  <div className={`flex items-end gap-2 max-w-[90%] sm:max-w-[85%] ${isAssistant ? 'flex-row' : 'flex-row-reverse'}`}>
                    {isAssistant && (
                      <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-[#BE123C]/50 shadow-xs mb-1 bg-black">
                        <img 
                          src={assistantMascotImg} 
                          alt="Manoj's Assistant" 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line ${
                        isAssistant
                          ? 'bg-[#161214] border border-[#8B001F]/20 text-neutral-200 rounded-tl-sm'
                          : 'bg-[#8B001F] text-white font-medium rounded-tr-sm shadow-md border border-[#BE123C]/30'
                      }`}
                    >
                      {msg.text}

                      {/* Interactive Action Button (e.g. Scroll to Section) */}
                      {isAssistant && msg.actionSection && (
                        <div className="mt-2.5 pt-2 border-t border-white/10">
                          <button
                            onClick={() => onNavigate(msg.actionSection!)}
                            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#8B001F]/20 hover:bg-[#8B001F]/40 text-[#F43F5E] border border-[#BE123C]/40 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                          >
                            <span>{msg.actionLabel || 'Go to Section'}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <span className={`text-[9px] text-neutral-500 font-mono mt-1 px-1 ${isAssistant ? 'ml-8' : ''}`}>
                    {msg.time}
                  </span>

                  {/* Step 3: Quick Action Navigation Buttons */}
                  {isAssistant && msg.showMenuAfter && (
                    <div className="w-full mt-3 pt-2 border-t border-white/5 space-y-1.5">
                      <span className="text-[10px] font-mono tracking-wider text-neutral-400 block mb-2 uppercase">
                        Quick Explore:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {quickMenuOptions.map((opt) => {
                          const Icon = opt.icon;
                          return (
                            <button
                              key={opt.label}
                              onClick={() => handleSectionQuery(opt.label, opt.sectionId)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs bg-neutral-900/80 hover:bg-[#8B001F] text-neutral-300 hover:text-white border border-white/10 hover:border-[#BE123C] transition-all cursor-pointer font-medium"
                            >
                              <Icon className="w-3 h-3 text-[#BE123C] group-hover:text-white" />
                              <span>{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Bar / Input Field */}
          <div className="p-3 bg-[#150d10] border-t border-[#8B001F]/30">
            {messages.length > 1 && (
              <div className="flex items-center justify-between pb-2 px-1">
                <button
                  type="button"
                  onClick={() => {
                    const replyMsg: Message = {
                      id: `asst-${Date.now()}`,
                      sender: 'assistant',
                      text: visitorName
                        ? `Here are the options, ${visitorName}! What would you like to explore?`
                        : "Here are the options! What would you like to explore?",
                      time: getCurrentTime(),
                      showMenuAfter: true,
                    };
                    setMessages((prev) => [...prev, replyMsg]);
                  }}
                  className="text-[11px] font-mono tracking-wide text-[#BE123C] hover:text-[#F43F5E] transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Back to menu</span>
                </button>
                <span className="text-[9px] text-neutral-500 font-mono">
                  Grounded on portfolio data
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  visitorName 
                    ? 'Ask about Manoj, skills, certificates...' 
                    : 'Enter your name or ask a question...'
                }
                className="flex-1 bg-black/60 border border-white/15 focus:border-[#BE123C] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#BE123C] transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                aria-label="Send message"
                className="p-2 sm:px-3 sm:py-2 bg-[#8B001F] hover:bg-[#A11D33] disabled:opacity-40 disabled:hover:bg-[#8B001F] text-white font-bold rounded-xl transition-all flex items-center justify-center cursor-pointer disabled:cursor-not-allowed shadow-sm border border-[#BE123C]/30"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
