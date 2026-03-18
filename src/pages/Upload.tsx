import React, { useState } from 'react';
import { Upload as UploadIcon, Image as ImageIcon, X, CheckCircle2, Globe, Lock, Link as LinkIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [visibility, setVisibility] = useState<'public' | 'private' | 'unlisted'>('public');

  return (
    <div className="py-8 space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Upload Video</h1>
        <p className="text-sm text-text-muted">Share your amazing content with the StreamTime community</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Media */}
        <div className="space-y-8">
          {/* Video Drop Zone */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
              <UploadIcon className="w-4 h-4 text-accent" /> Video File <span className="text-red-brand">*</span>
            </label>
            <div className={cn(
              "relative aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-4 transition-all group",
              file ? "border-green-brand bg-green-brand/5" : "border-border-default hover:border-accent hover:bg-accent/5"
            )}>
              {file ? (
                <>
                  <CheckCircle2 className="w-12 h-12 text-green-brand" />
                  <div className="text-center">
                    <p className="font-semibold text-text-primary">{file.name}</p>
                    <p className="text-xs text-text-muted">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                  <button 
                    onClick={() => setFile(null)}
                    className="absolute top-4 right-4 p-2 bg-bg-elevated rounded-full hover:bg-bg-hover transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-bg-elevated flex items-center justify-center group-hover:scale-110 transition-transform">
                    <UploadIcon className="w-8 h-8 text-text-muted" />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="font-semibold text-text-secondary">Click or drag video to upload</p>
                    <p className="text-xs text-text-muted">MP4, WebM or OGG (Max 100MB)</p>
                  </div>
                  <input 
                    type="file" 
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </>
              )}
            </div>
          </div>

          {/* Thumbnail */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
              <ImageIcon className="w-4 h-4 text-accent" /> Thumbnail <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <div className="flex gap-6">
              <div className="w-48 aspect-video bg-bg-surface border border-border-default rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-bg-hover transition-colors cursor-pointer group">
                <ImageIcon className="w-6 h-6 text-text-muted group-hover:text-accent transition-colors" />
                <span className="text-xs font-medium text-text-secondary">Upload Image</span>
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-secondary">Thumbnail Guidelines</h4>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-[11px] text-text-muted">
                    <CheckCircle2 className="w-3 h-3 text-green-brand" /> Recommended size: 1280×720px (16:9)
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-text-muted">
                    <CheckCircle2 className="w-3 h-3 text-green-brand" /> File formats: JPEG, PNG, WebP
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-text-muted">
                    <CheckCircle2 className="w-3 h-3 text-green-brand" /> Maximum size: 5MB
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-secondary">Title <span className="text-red-brand">*</span></label>
            <input type="text" placeholder="My Amazing New Video" className="input-base w-full" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-secondary">Description</label>
            <textarea 
              placeholder="Here is a detailed description of my latest video..." 
              className="input-base w-full min-h-[120px] py-3 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-secondary">Category <span className="text-red-brand">*</span></label>
              <select className="input-base w-full appearance-none">
                <option>Gaming</option>
                <option>Education</option>
                <option>Entertainment</option>
                <option>Music</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-secondary">Tags</label>
              <input type="text" placeholder="gaming, tutorial, 4k" className="input-base w-full" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-text-secondary">Visibility <span className="text-red-brand">*</span></label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'public', label: 'Public', icon: Globe, desc: 'Anyone can watch' },
                { id: 'private', label: 'Private', icon: Lock, desc: 'Only you see it' },
                { id: 'unlisted', label: 'Unlisted', icon: LinkIcon, desc: 'Link only' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setVisibility(opt.id as any)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all text-center",
                    visibility === opt.id 
                      ? "border-accent bg-accent/5 ring-1 ring-accent" 
                      : "border-border-default bg-bg-surface hover:bg-bg-hover"
                  )}
                >
                  <opt.icon className={cn("w-5 h-5", visibility === opt.id ? "text-accent" : "text-text-muted")} />
                  <div className="space-y-0.5">
                    <p className={cn("text-xs font-bold", visibility === opt.id ? "text-text-primary" : "text-text-secondary")}>{opt.label}</p>
                    <p className="text-[10px] text-text-muted leading-tight">{opt.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button className="btn-primary w-full h-12 text-base font-bold shadow-lg shadow-accent/20">
              Publish Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
