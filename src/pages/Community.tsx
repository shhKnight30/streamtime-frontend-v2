import React, { useState } from 'react';
import { Image, Send, Heart, MessageSquare, Share2, Trash2, MoreHorizontal } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const MOCK_POSTS = [
  {
    id: 'p1',
    author: { name: 'SamSulek', username: 'xavierjiyadhavsp', avatar: 'https://picsum.photos/seed/sam/48/48' },
    content: 'heelooo fam',
    likes: 42,
    comments: 12,
    time: 'a day ago',
    isFollowing: false
  },
  {
    id: 'p2',
    author: { name: 'jinwoo', username: 'serene2204', avatar: 'https://picsum.photos/seed/jin/48/48' },
    content: 'haaaalllooo',
    likes: 124,
    comments: 5,
    time: 'a day ago',
    isFollowing: true
  },
  {
    id: 'p3',
    author: { name: 'CosmicX', username: 'cosmic_official', avatar: 'https://picsum.photos/seed/cosmic/48/48' },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    likes: 89,
    comments: 3,
    time: '15h ago',
    isFollowing: false
  }
];

export default function Community() {
  const [postText, setPostText] = useState('');

  return (
    <div className="py-8 max-w-[680px] mx-auto space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Community</h1>
        <p className="text-sm text-text-muted">See what creators are talking about.</p>
      </div>

      {/* Composer */}
      <div className="bg-bg-surface border border-border-default rounded-2xl p-5 space-y-4">
        <div className="flex gap-4">
          <img src="https://picsum.photos/seed/me/48/48" alt="Me" className="w-12 h-12 rounded-full" />
          <textarea 
            placeholder="What's happening?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 bg-transparent border-none text-lg text-text-primary placeholder:text-text-muted focus:ring-0 resize-none min-h-[80px]"
          />
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
          <button className="btn-ghost text-accent flex items-center gap-2">
            <Image className="w-5 h-5" />
            <span className="text-sm font-medium">Image</span>
          </button>
          <button 
            disabled={!postText.trim()}
            className="btn-primary px-6 py-1.5 text-sm"
          >
            Post
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {MOCK_POSTS.map(post => (
          <div key={post.id} className="bg-bg-surface border border-border-default rounded-2xl p-5 space-y-4 group">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-text-primary">{post.author.name}</h3>
                    <span className="text-sm text-text-muted">@{post.author.username}</span>
                    <span className="text-sm text-text-muted">•</span>
                    <span className="text-sm text-text-muted">{post.time}</span>
                    {post.isFollowing && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">Following</span>
                    )}
                  </div>
                  {!post.isFollowing && (
                    <button className="text-xs font-bold text-accent hover:underline mt-0.5">Follow</button>
                  )}
                </div>
              </div>
              <button className="btn-ghost opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[15px] text-text-secondary leading-relaxed pl-16">
              {post.content}
            </p>

            <div className="flex items-center gap-8 pl-16 pt-2">
              <button className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
