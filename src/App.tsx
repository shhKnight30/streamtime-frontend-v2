import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/src/components/layout/Navbar';
import Home from '@/src/pages/Home';
import Watch from '@/src/pages/Watch';
import Community from '@/src/pages/Community';
import Upload from '@/src/pages/Upload';
import Dashboard from '@/src/pages/Dashboard';
import Activity from '@/src/pages/Activity';
import History from '@/src/pages/History';
import Likes from '@/src/pages/Likes';
import Comments from '@/src/pages/Comments';
import LiveStudio from '@/src/pages/LiveStudio';
import Login from '@/src/pages/Login';
import Register from '@/src/pages/Register';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:videoId" element={<Watch />} />
          <Route path="/community" element={<Community />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/live" element={<LiveStudio />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/activity/history" element={<History />} />
          <Route path="/activity/likes" element={<Likes />} />
          <Route path="/activity/comments" element={<Comments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}
