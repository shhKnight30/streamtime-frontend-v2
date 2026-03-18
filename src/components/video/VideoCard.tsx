import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { formatViews } from '@/src/lib/utils';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    views: number;
    createdAt: string;
    isLive?: boolean;
    viewerCount?: number;
    owner: {
      username: string;
      avatar: string;
    };
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="group flex flex-col gap-3">
      <Link to={`/watch/${video.id}`} className="relative aspect-video w-full overflow-hidden rounded-xl bg-bg-elevated">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Play className="h-6 w-6 fill-white text-white translate-x-0.5" />
          </div>
        </div>

        {/* Badges */}
        {video.isLive ? (
          <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-red-brand px-2 py-0.5 rounded text-[10px] font-bold tracking-wider text-white">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            LIVE
          </div>
        ) : (
          <div className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-[11px] font-medium text-white">
            {video.duration}
          </div>
        )}
      </Link>

      <div className="flex gap-3">
        <Link to={`/channel/${video.owner.username}`} className="shrink-0">
          <img 
            src={video.owner.avatar} 
            alt={video.owner.username}
            className="h-9 w-9 rounded-full object-cover border border-border-subtle"
            referrerPolicy="no-referrer"
          />
        </Link>
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <Link to={`/watch/${video.id}`}>
            <h3 className="line-clamp-2 text-[14px] font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors">
              {video.title}
            </h3>
          </Link>
          <Link to={`/channel/${video.owner.username}`} className="text-[13px] text-text-secondary hover:text-text-primary transition-colors">
            {video.owner.username}
          </Link>
          <p className="text-[12px] text-text-muted">
            {video.isLive ? (
              <span className="text-red-brand font-medium">{formatViews(video.viewerCount || 0)} watching</span>
            ) : (
              `${formatViews(video.views)} views • ${video.createdAt}`
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
