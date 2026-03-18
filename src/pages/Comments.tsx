import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Trash2, ExternalLink, ThumbsUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const MOCK_COMMENTS = [
  {
    id: 'c1',
    videoId: 'v1',
    videoTitle: 'Niondbrc Gazo throuth 2023',
    content: 'This is an amazing video! Love the content.',
    createdAt: '2 days ago',
    likes: 12,
    replies: 2
  },
  {
    id: 'c2',
    videoId: 'v2',
    videoTitle: 'Drive Ito Marahisl Roating Breasts',
    content: 'Could you explain more about the process in the next video?',
    createdAt: '1 week ago',
    likes: 5,
    replies: 0
  }
];

export default function CommentsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Your Comments</h1>
          <p className="text-sm text-text-muted">Manage your interactions across StreamTime</p>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_COMMENTS.map((comment) => (
          <div key={comment.id} className="group p-4 rounded-2xl bg-bg-elevated/50 border border-border-default hover:border-accent transition-all">
            <div className="flex justify-between items-start gap-4 mb-4">
              <div className="space-y-1">
                <Link to={`/watch/${comment.videoId}`} className="flex items-center gap-2 text-xs font-bold text-accent hover:underline uppercase tracking-widest">
                  <ExternalLink className="w-3 h-3" />
                  {comment.videoTitle}
                </Link>
                <p className="text-sm text-text-primary leading-relaxed">{comment.content}</p>
              </div>
              <button className="p-2 text-text-muted hover:text-red-brand transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-6 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <ThumbsUp className="w-3 h-3" />
                {comment.likes} likes
              </span>
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3" />
                {comment.replies} replies
              </span>
              <span>{comment.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
