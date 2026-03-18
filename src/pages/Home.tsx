import React, { useState } from 'react';
import VideoCard from '@/src/components/video/VideoCard';
import { cn } from '@/src/lib/utils';

const MOCK_LIVE = [
  {
    id: 'l1',
    title: 'LIVE Watching .... - Live Stream',
    thumbnail: 'https://picsum.photos/seed/live1/640/360',
    duration: 'LIVE',
    views: 0,
    viewerCount: 1200,
    createdAt: 'Now',
    isLive: true,
    owner: { username: 'Channelzox', avatar: 'https://picsum.photos/seed/u1/40/40' }
  },
  {
    id: 'l2',
    title: 'LIVE STREAM - Gameonean',
    thumbnail: 'https://picsum.photos/seed/live2/640/360',
    duration: 'LIVE',
    views: 0,
    viewerCount: 2300,
    createdAt: 'Now',
    isLive: true,
    owner: { username: 'Channetom', avatar: 'https://picsum.photos/seed/u2/40/40' }
  },
  {
    id: 'l3',
    title: 'LIVE Watching 1 - Live Stream',
    thumbnail: 'https://picsum.photos/seed/live3/640/360',
    duration: 'LIVE',
    views: 0,
    viewerCount: 3300,
    createdAt: 'Now',
    isLive: true,
    owner: { username: 'Chosiltomane', avatar: 'https://picsum.photos/seed/u3/40/40' }
  },
  {
    id: 'l4',
    title: 'LIVE STREAM - Uncetittermam',
    thumbnail: 'https://picsum.photos/seed/live4/640/360',
    duration: 'LIVE',
    views: 0,
    viewerCount: 1300,
    createdAt: 'Now',
    isLive: true,
    owner: { username: 'Petarlvatrana', avatar: 'https://picsum.photos/seed/u4/40/40' }
  },
];

const MOCK_VIDEOS = [
  {
    id: 'v1',
    title: 'Niondbrc Gazo throuth 2023',
    thumbnail: 'https://picsum.photos/seed/v1/640/360',
    duration: '10:05',
    views: 7200,
    createdAt: '4 hours ago',
    owner: { username: 'Wervnrlows', avatar: 'https://picsum.photos/seed/u5/40/40' }
  },
  {
    id: 'v2',
    title: 'Drive Ito Marahisl Roating Breasts',
    thumbnail: 'https://picsum.photos/seed/v2/640/360',
    duration: '10:05',
    views: 92000,
    createdAt: '2 hours ago',
    owner: { username: 'StreamTime', avatar: 'https://picsum.photos/seed/u6/40/40' }
  },
  {
    id: 'v3',
    title: 'Watchs Itus Your Rito',
    thumbnail: 'https://picsum.photos/seed/v3/640/360',
    duration: '10:05',
    views: 3300,
    createdAt: '4 hours ago',
    owner: { username: 'StreamTime', avatar: 'https://picsum.photos/seed/u7/40/40' }
  },
  {
    id: 'v4',
    title: 'Alinexnr and Doramier at 2020',
    thumbnail: 'https://picsum.photos/seed/v4/640/360',
    duration: '10:05',
    views: 83000,
    createdAt: '4 hours ago',
    owner: { username: 'StreamTime', avatar: 'https://picsum.photos/seed/u8/40/40' }
  },
  {
    id: 'v5',
    title: 'The Last Horizon - Official Trailer (4K)',
    thumbnail: 'https://picsum.photos/seed/v5/640/360',
    duration: '0:06',
    views: 22,
    createdAt: '5 hours ago',
    owner: { username: 'CosmicX', avatar: 'https://picsum.photos/seed/u9/40/40' }
  },
  {
    id: 'v6',
    title: 'The Last Horizon - Official Trailer (4K)',
    thumbnail: 'https://picsum.photos/seed/v6/640/360',
    duration: '0:10',
    views: 1,
    createdAt: '5 hours ago',
    owner: { username: 'aishwary@123', avatar: 'https://picsum.photos/seed/u10/40/40' }
  },
  {
    id: 'v7',
    title: 'The Last Horizon - Official Trailer (4K)',
    thumbnail: 'https://picsum.photos/seed/v7/640/360',
    duration: '0:56',
    views: 6,
    createdAt: '6 hours ago',
    owner: { username: 'serene2204', avatar: 'https://picsum.photos/seed/u11/40/40' }
  },
];

export default function Home() {
  const [feed, setFeed] = useState<'global' | 'following'>('global');

  return (
    <div className="py-8 space-y-12">
      {/* Live Now Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-brand rounded-full animate-pulse" />
          <h2 className="text-xs font-bold tracking-[0.06em] uppercase text-text-secondary">Live Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {MOCK_LIVE.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Recommended Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Recommended for you</h1>
            <p className="text-sm text-text-muted">Discover new content</p>
          </div>
          <div className="flex items-center gap-1 bg-bg-elevated p-1 rounded-full border border-border-default">
            <button 
              onClick={() => setFeed('global')}
              className={cn(
                "px-4 py-1.5 text-xs font-medium rounded-full transition-all",
                feed === 'global' ? "bg-accent text-white shadow-lg" : "text-text-muted hover:text-text-secondary"
              )}
            >
              Global
            </button>
            <button 
              onClick={() => setFeed('following')}
              className={cn(
                "px-4 py-1.5 text-xs font-medium rounded-full transition-all",
                feed === 'following' ? "bg-accent text-white shadow-lg" : "text-text-muted hover:text-text-secondary"
              )}
            >
              Following
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {MOCK_VIDEOS.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </div>
  );
}
