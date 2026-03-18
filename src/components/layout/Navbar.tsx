import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Plus, Bell, Activity, User, LogIn, Video, Radio, MessageSquare } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const location = useLocation();
  const isLoggedIn = true; // Mock login state

  const navItems = [
    { label: 'Videos', path: '/', icon: Video },
    { label: 'Community', path: '/community', icon: MessageSquare },
  ];

  return (
    <nav className="glass-nav h-14 flex items-center px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-8 w-full max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-1 h-5 bg-accent rounded-full" />
          <span className="text-xl font-bold tracking-tight text-text-primary">StreamTime</span>
        </Link>

        {/* Navigation Toggles */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative h-14 flex items-center text-sm font-medium transition-colors",
                  isActive ? "text-text-primary" : "text-text-muted hover:text-text-secondary"
                )}
              >
                {item.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-auto hidden sm:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-accent transition-colors" />
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full bg-bg-elevated border border-border-default rounded-full h-9 pl-10 pr-4 text-sm text-text-primary focus:border-accent focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <div className="relative group">
                <button className="btn-ghost w-9 h-9 flex items-center justify-center bg-bg-elevated border border-border-default">
                  <Plus className="w-5 h-5" />
                </button>
                {/* Dropdown Mock */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-bg-elevated border border-border-default rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-1 z-50">
                  <Link to="/upload" className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-bg-hover rounded-md transition-colors">
                    <Video className="w-4 h-4 text-text-secondary" /> Upload video
                  </Link>
                  <Link to="/dashboard/live" className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-bg-hover rounded-md transition-colors">
                    <Radio className="w-4 h-4 text-red-brand" /> Go Live
                  </Link>
                  <Link to="/community" className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-bg-hover rounded-md transition-colors">
                    <MessageSquare className="w-4 h-4 text-accent" /> Write post
                  </Link>
                </div>
              </div>
              <Link to="/activity" className="btn-ghost w-9 h-9 flex items-center justify-center bg-bg-elevated border border-border-default">
                <Activity className="w-5 h-5" />
              </Link>
              <button className="w-8 h-8 rounded-full overflow-hidden ring-offset-2 ring-offset-bg-base hover:ring-2 ring-white/20 transition-all">
                <img src="https://picsum.photos/seed/user/32/32" alt="Avatar" referrerPolicy="no-referrer" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-text-secondary hover:text-text-primary px-4">Log in</Link>
              <Link to="/register" className="btn-primary py-1.5 text-sm">Get started</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
