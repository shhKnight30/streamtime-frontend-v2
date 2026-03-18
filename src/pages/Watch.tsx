import React, { useState, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share2, Plus, MoreHorizontal, Activity } from 'lucide-react';
import { cn, formatViews } from '@/src/lib/utils';

export default function Watch() {
  const { videoId } = useParams();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Player */}
        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-border-default">
          <video 
            className="w-full h-full" 
            controls 
            poster={`https://picsum.photos/seed/${videoId}/1280/720`}
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            The Last Horizon - Official Trailer (4K)
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-4 py-2">
            <div className="flex items-center gap-4">
              <Link to="/channel/cosmicx" className="flex items-center gap-3">
                <img 
                  src="https://picsum.photos/seed/cosmic/48/48" 
                  alt="CosmicX" 
                  className="w-11 h-11 rounded-full border border-border-subtle"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-semibold text-text-primary">CosmicX</h3>
                  <p className="text-xs text-text-muted">1.2M subscribers</p>
                </div>
              </Link>
              <button 
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={cn(
                  "btn-primary py-2 px-6 text-sm ml-2",
                  isSubscribed ? "bg-bg-elevated text-text-primary border border-border-default hover:bg-bg-hover" : ""
                )}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center bg-bg-elevated border border-border-default rounded-full overflow-hidden">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-bg-hover transition-colors border-r border-border-default",
                    isLiked ? "text-accent" : "text-text-primary"
                  )}
                >
                  <ThumbsUp className={cn("w-4 h-4", isLiked && "fill-accent")} />
                  12K
                </button>
                <button className="px-4 py-2 hover:bg-bg-hover transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>
              <button className="btn-secondary flex items-center gap-2 px-4 py-2 text-sm">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="btn-secondary flex items-center gap-2 px-4 py-2 text-sm">
                <Plus className="w-4 h-4" /> Save
              </button>
              <button className="btn-secondary p-2 rounded-full">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-bg-surface border border-border-default rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
              <span>1.2M views</span>
              <span className="text-text-muted">•</span>
              <span>Mar 15, 2026</span>
            </div>
            <div className={cn(
              "text-sm text-text-secondary leading-relaxed",
              !showFullDescription && "line-clamp-3"
            )}>
              Discover the final frontier and immersive sci-fi frontier... This is a detailed description of the video content. It includes information about the cast, crew, and the production process. We hope you enjoy this official trailer for The Last Horizon.
              <br /><br />
              Follow us on social media:
              - Twitter: @cosmicx
              - Instagram: @cosmicx_official
            </div>
            <button 
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-sm font-semibold text-text-primary hover:text-accent transition-colors"
            >
              {showFullDescription ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>

        {/* Comments */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold">1,242 Comments</h2>
            <button className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              <Activity className="w-4 h-4" /> Sort by
            </button>
          </div>

          <div className="flex gap-4">
            <img src="https://picsum.photos/seed/me/40/40" alt="Me" className="w-10 h-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="w-full bg-transparent border-b border-border-default py-1 text-sm focus:border-accent focus:outline-none transition-colors"
              />
              <div className="flex justify-end gap-2">
                <button className="btn-ghost text-sm px-4">Cancel</button>
                <button className="btn-primary py-1.5 px-4 text-sm">Comment</button>
              </div>
            </div>
          </div>

          {/* Mock Comments */}
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-4">
              <img src={`https://picsum.photos/seed/u${i}/40/40`} alt="User" className="w-10 h-10 rounded-full" />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-text-primary">User_{i}</span>
                  <span className="text-xs text-text-muted">{i} day ago</span>
                </div>
                <p className="text-sm text-text-secondary">This trailer looks absolutely stunning! Can't wait for the release.</p>
                <div className="flex items-center gap-4 pt-1">
                  <button className="flex items-center gap-1 text-xs text-text-muted hover:text-text-primary">
                    <ThumbsUp className="w-3 h-3" /> 42
                  </button>
                  <button className="text-xs text-text-muted hover:text-text-primary">Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar - Up Next */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight">Up Next</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <Link key={i} to={`/watch/next-${i}`} className="flex gap-3 group">
              <div className="relative w-40 aspect-video shrink-0 bg-bg-elevated rounded-lg overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/next${i}/320/180`} 
                  alt="Next" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[10px] text-white">
                  10:05
                </div>
              </div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <h3 className="text-sm font-semibold text-text-primary line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                  The Last Horizon - Official Trailer (4K) Part {i}
                </h3>
                <p className="text-xs text-text-muted">CosmicX</p>
                <p className="text-[11px] text-text-muted">22K views • 5 hours ago</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
