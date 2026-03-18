import React from 'react';
import { History, Heart, MessageSquare, Video, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ACTIVITY_GROUPS = [
  {
    title: 'How you use StreamTime',
    items: [
      { label: 'Watch History', desc: 'Videos you have watched', icon: History, path: '/activity/history', color: 'text-blue-400' },
    ]
  },
  {
    title: 'Interactions',
    items: [
      { label: 'Likes', desc: 'Videos you have liked', icon: Heart, path: '/activity/likes', color: 'text-red-brand' },
      { label: 'Comments', desc: 'Comments you have posted', icon: MessageSquare, path: '/activity/comments', color: 'text-purple-400' },
    ]
  },
  {
    title: 'Your Content',
    items: [
      { label: 'Your Uploads', desc: 'Manage your published videos', icon: Video, path: '/dashboard', color: 'text-green-brand' },
    ]
  }
];

export default function Activity() {
  return (
    <div className="py-8 max-w-2xl mx-auto space-y-10">
      <div className="space-y-1 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Your Activity</h1>
        <p className="text-sm text-text-muted">One place to manage your interactions and content history.</p>
      </div>

      <div className="space-y-8">
        {ACTIVITY_GROUPS.map((group) => (
          <div key={group.title} className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-text-muted px-2">{group.title}</h2>
            <div className="space-y-2">
              {group.items.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.path}
                  className="flex items-center justify-between p-4 bg-bg-surface border border-border-default rounded-xl hover:bg-bg-hover transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">{item.label}</p>
                      <p className="text-xs text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
