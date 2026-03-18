import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Play, Share2, Trash2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const MOCK_LIKES = [
  {
    id: 'l1',
    videoId: 'v1',
    title: 'Niondbrc Gazo throuth 2023',
    thumbnail: 'https://picsum.photos/seed/v1/640/360',
    owner: 'Wervnrlows',
    likedAt: '2 days ago',
    duration: '10:05',
    views: '1.2M'
  },
  {
    id: 'l2',
    videoId: 'v2',
    title: 'Drive Ito Marahisl Roating Breasts',
    thumbnail: 'https://picsum.photos/seed/v2/640/360',
    owner: 'StreamTime',
    likedAt: '1 week ago',
    duration: '10:05',
    views: '92K'
  }
];

export default function LikesPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-brand/10 flex items-center justify-center">
            <Heart className="w-6 h-6 text-red-brand fill-red-brand" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Liked Videos</h1>
            <p className="text-sm text-text-muted">{MOCK_LIKES.length} videos</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
            <Play className="w-4 h-4 fill-white" />
            Play All
          </button>
          <button className="p-2 text-text-muted hover:text-text-primary transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {MOCK_LIKES.map((item, index) => (
          <div key={item.id} className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-bg-elevated transition-all border border-transparent hover:border-border-subtle">
            <span className="w-6 text-center text-sm font-bold text-text-muted group-hover:text-accent transition-colors">
              {index + 1}
            </span>
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
            <div className="flex flex-col justify-center py-1 flex-1 min-w-0">
              <div className="space-y-1">
                <Link to={`/watch/${item.videoId}`}>
                  <h3 className="font-semibold text-text-primary line-clamp-2 group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span>{item.owner}</span>
                  <span className="text-text-muted">•</span>
                  <span>{item.views} views</span>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-2">Liked {item.likedAt}</p>
            </div>
            <button className="p-2 opacity-0 group-hover:opacity-100 text-text-muted hover:text-red-brand transition-all">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
