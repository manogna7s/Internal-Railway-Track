import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { AlertTriangle, CheckCircle, Clock, Wrench, TrendingUp, MapPin } from 'lucide-react';

export function Dashboard({ onNavigateToFitting }) {
  const stats = {
    totalFittings: 12547,
    criticalAlerts: 23,
    dueInspections: 156,
    completedMaintenance: 89
  };

  const failureData = [
    { name: 'Rail Clips', failures: 45, total: 2300 },
    { name: 'Bolts', failures: 32, total: 3200 },
    { name: 'Plates', failures: 28, total: 1800 },
    { name: 'Anchors', failures: 15, total: 1500 },
    { name: 'Joints', failures: 12, total: 900 }
  ];

  const ageDistributionData = [
    { name: '0-1 Years', value: 2500, color: '#22c55e' },
    { name: '1-3 Years', value: 3800, color: '#3b82f6' },
    { name: '3-5 Years', value: 2900, color: '#f59e0b' },
    { name: '5+ Years', value: 3347, color: '#ef4444' }
  ];

  const maintenanceTrendData = [
    { month: 'Jan', scheduled: 120, completed: 118, emergency: 8 },
    { month: 'Feb', scheduled: 135, completed: 132, emergency: 12 },
    { month: 'Mar', scheduled: 148, completed: 145, emergency: 6 },
    { month: 'Apr', scheduled: 162, completed: 158, emergency: 15 },
    { month: 'May', scheduled: 171, completed: 169, emergency: 9 },
    { month: 'Jun', scheduled: 156, completed: 154, emergency: 11 }
  ];

  const criticalFittings = [
    { id: 'RF-2301-A45', location: 'KM 245.3, Track 1', risk: 'High', lastInspection: '15 days ago' },
    { id: 'RF-2301-B12', location: 'KM 198.7, Track 2', risk: 'Critical', lastInspection: '22 days ago' },
    { id: 'RF-2301-C78', location: 'KM 312.1, Track 1', risk: 'High', lastInspection: '18 days ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-effect border-white/20 card-hover animate-slide-in-left shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-blue-100">Total Fittings</CardTitle>
            <div className="p-2 bg-gradient-to-br from-green-400 to-green-600 rounded-lg animate-pulse">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {stats.totalFittings.toLocaleString()}
            </div>
            <p className="text-xs text-blue-200/70 font-medium">Across all tracks</p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/20 card-hover animate-slide-in-left shadow-xl" style={{ animationDelay: '0.1s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-blue-100">Critical Alerts</CardTitle>
            <div className="p-2 bg-gradient-to-br from-red-400 to-red-600 rounded-lg animate-pulse">
              <AlertTriangle className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-400">{stats.criticalAlerts}</div>
            <p className="text-xs text-blue-200/70 font-medium">Require immediate attention</p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/20 card-hover animate-slide-in-left shadow-xl" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-blue-100">Due Inspections</CardTitle>
            <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg animate-pulse">
              <Clock className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-400">{stats.dueInspections}</div>
            <p className="text-xs text-blue-200/70 font-medium">This week</p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/20 card-hover animate-slide-in-left shadow-xl" style={{ animationDelay: '0.3s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-blue-100">Maintenance Complete</CardTitle>
            <div className="p-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg animate-pulse">
              <Wrench className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-400">{stats.completedMaintenance}%</div>
            <p className="text-xs text-blue-200/70 font-medium">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Critical Fittings */}
      {/* Failure Analysis BarChart */}
      {/* Age Distribution PieChart */}
      {/* Maintenance Trend LineChart */}
      {/* Critical Fittings List */}
      {/* Risk Zones Progress Bars */}

      {/* ...You can insert JSX charts/cards exactly as in your TS version... */}
    </div>
  );
}
