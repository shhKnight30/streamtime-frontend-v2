import React, { useState } from 'react';
import { Mic, Video, Settings, Radio, Users, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function LiveStudio() {
  const [isLive, setIsLive] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);

  return (
    <div className="py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Live Studio Control Room</h1>
          <div className="flex items-center gap-3">
            {isLive && (
              <div className="flex items-center gap-2 bg-red-brand/10 text-red-brand px-3 py-1 rounded-full text-xs font-bold">
                <div className="w-2 h-2 bg-red-brand rounded-full animate-pulse" />
                LIVE
              </div>
            )}
            <p className="text-sm text-text-muted">Setup your stream and go live to your community.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Preview Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-border-default shadow-2xl">
            {cameraOn ? (
              <img 
                src="https://picsum.photos/seed/live-preview/1280/720" 
                alt="Preview" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-bg-elevated border-4 border-accent/20 flex items-center justify-center">
                  <Users className="w-12 h-12 text-accent" />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-text-muted">Camera Off</p>
              </div>
            )}

            {/* Controls Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-xl p-3 rounded-full border border-white/10">
              <button 
                onClick={() => setMicOn(!micOn)}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                  micOn ? "bg-white/10 text-white hover:bg-white/20" : "bg-red-brand text-white"
                )}
              >
                <Mic className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCameraOn(!cameraOn)}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                  cameraOn ? "bg-white/10 text-white hover:bg-white/20" : "bg-red-brand text-white"
                )}
              >
                <Video className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-all">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card-base p-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">Audience Engagement</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-[10px] text-text-muted uppercase">Current Viewers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-[10px] text-text-muted uppercase">Likes</p>
                </div>
              </div>
            </div>
            <div className="card-base p-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">Stream Health</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-green-brand">Excellent</p>
                  <p className="text-[10px] text-text-muted uppercase">Status</p>
                </div>
                <Activity className="w-5 h-5 text-green-brand" />
              </div>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="space-y-6">
          <div className="card-base space-y-6">
            <h2 className="text-lg font-bold border-b border-border-subtle pb-4">Stream Settings</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Stream Title</label>
                <input type="text" placeholder="Enter stream title..." className="input-base w-full" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Category</label>
                <select className="input-base w-full appearance-none">
                  <option>Gaming</option>
                  <option>Just Chatting</option>
                  <option>Music</option>
                  <option>Creative</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Stream Key</label>
                <div className="relative">
                  <input type="password" value="••••••••••••••••" readOnly className="input-base w-full pr-10" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary">
                    <Users className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsLive(!isLive)}
              className={cn(
                "w-full h-14 rounded-xl text-lg font-bold transition-all shadow-xl",
                isLive 
                  ? "bg-red-brand hover:bg-red-brand/90 text-white" 
                  : "bg-accent hover:bg-accent-hover text-white shadow-accent/20"
              )}
            >
              {isLive ? 'END STREAM' : 'GO LIVE'}
            </button>
          </div>

          <div className="card-base space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">Live Chat</h3>
            <div className="h-48 bg-bg-elevated/50 rounded-lg p-3 overflow-y-auto space-y-2">
              <p className="text-[11px] text-text-muted text-center italic">Chat messages will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
