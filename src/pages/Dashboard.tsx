import React from 'react';
import { Eye, Users, Video, Heart, Edit2, Trash2, Plus } from 'lucide-react';
import { cn, formatViews } from '@/src/lib/utils';

const STATS = [
  { label: 'Total Views', value: '12.5M', icon: Eye, color: 'text-accent', bg: 'bg-accent/10' },
  { label: 'Subscribers', value: '850K', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { label: 'Videos', value: '124', icon: Video, color: 'text-green-brand', bg: 'bg-green-brand/10' },
  { label: 'Likes', value: '4.2M', icon: Heart, color: 'text-red-brand', bg: 'bg-red-brand/10' },
];

const MOCK_CONTENT = [
  { id: '1', title: 'My Amazing New Video', status: 'Published', date: 'Oct 26, 2023', views: '1.2K', thumb: 'https://picsum.photos/seed/c1/120/68' },
  { id: '2', title: 'Decaines My Amazing New Video', status: 'Draft', date: 'Oct 26, 2023', views: '0', thumb: 'https://picsum.photos/seed/c2/120/68' },
  { id: '3', title: 'The Best in My Amazing New Video', status: 'Published', date: 'Oct 26, 2023', views: '1.2K', thumb: 'https://picsum.photos/seed/c3/120/68' },
  { id: '4', title: 'My Amazing New Video', status: 'Draft', date: 'Oct 26, 2023', views: '0', thumb: 'https://picsum.photos/seed/c4/120/68' },
];

export default function Dashboard() {
  return (
    <div className="py-8 space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Channel Dashboard</h1>
          <p className="text-sm text-text-muted">Overview of your channel's performance.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Upload new
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="card-base flex items-center gap-6">
            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shrink-0", stat.bg)}>
              <stat.icon className={cn("w-7 h-7", stat.color)} />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content Table */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight">Content</h2>
        <div className="bg-bg-surface border border-border-default rounded-2xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-elevated/50 border-b border-border-subtle">
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-text-muted">Video</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-text-muted">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-text-muted">Date</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-text-muted">Views</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-text-muted text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {MOCK_CONTENT.map((video) => (
                <tr key={video.id} className="hover:bg-bg-hover/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-24 aspect-video rounded-md overflow-hidden bg-bg-elevated shrink-0">
                        <img src={video.thumb} alt="" className="w-full h-full object-cover" />
                        <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[8px] text-white">16:9</div>
                      </div>
                      <span className="text-sm font-medium text-text-primary line-clamp-1">{video.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider",
                      video.status === 'Published' ? "bg-green-brand/15 text-green-brand" : "bg-amber-brand/15 text-amber-brand"
                    )}>
                      {video.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">{video.date}</td>
                  <td className="px-6 py-4 text-sm text-text-secondary">{video.views}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="btn-ghost w-8 h-8 flex items-center justify-center hover:text-accent">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="btn-ghost w-8 h-8 flex items-center justify-center hover:text-red-brand">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Network Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight">Your Network</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="card-base p-4 flex flex-col items-center gap-3 text-center">
              <img src={`https://picsum.photos/seed/net${i}/48/48`} alt="" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-sm font-bold text-text-primary">Follower_{i}</p>
                <p className="text-[11px] text-text-muted">102K followers</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
