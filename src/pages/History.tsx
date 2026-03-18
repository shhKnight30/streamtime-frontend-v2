import React from 'react';
import { Link } from 'react-router-dom';
import { History, Search, Trash2, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const MOCK_HISTORY = [
  {
    id: 'h1',
    videoId: 'v1',
    title: 'Niondbrc Gazo throuth 2023',
    thumbnail: 'https://picsum.photos/seed/v1/640/360',
    owner: 'Wervnrlows',
    watchedAt: '2 hours ago',
    duration: '10:05'
  },
  {
    id: 'h2',
    videoId: 'v2',
    title: 'Drive Ito Marahisl Roating Breasts',
    thumbnail: 'https://picsum.photos/seed/v2/640/360',
    owner: 'StreamTime',
    watchedAt: '5 hours ago',
    duration: '10:05'
  },
  {
    id: 'h3',
    videoId: 'v3',
    title: 'Watchs Itus Your Rito',
    thumbnail: 'https://picsum.photos/seed/v3/640/360',
    owner: 'StreamTime',
    watchedAt: 'Yesterday',
    duration: '10:05'
  }
];

export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
            <History className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Watch History</h1>
            <p className="text-sm text-text-muted">Manage your recently watched videos</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search history..." 
              className="pl-10 pr-4 py-2 bg-bg-elevated border border-border-default rounded-full text-sm focus:outline-none focus:border-accent transition-colors w-full md:w-64"
            />
          </div>
          <button className="p-2 text-text-muted hover:text-red-brand transition-colors" title="Clear all history">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_HISTORY.map((item) => (
          <div key={item.id} className="group flex gap-4 p-3 rounded-2xl hover:bg-bg-elevated transition-colors border border-transparent hover:border-border-subtle">
            <Link to={`/watch/${item.videoId}`} className="relative shrink-0 aspect-video w-40 md:w-56 overflow-hidden rounded-xl bg-bg-elevated">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 rounded text-[10px] font-medium text-white">
                {item.duration}
              </div>
            </Link>
            <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
              <div className="space-y-1">
                <Link to={`/watch/${item.videoId}`}>
                  <h3 className="font-semibold text-text-primary line-clamp-2 group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-sm text-text-secondary">{item.owner}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <Clock className="w-3 h-3" />
                <span>Watched {item.watchedAt}</span>
              </div>
            </div>
            <button className="self-start p-2 opacity-0 group-hover:opacity-100 text-text-muted hover:text-red-brand transition-all">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
