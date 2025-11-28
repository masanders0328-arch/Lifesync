import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Home, 
  Wallet, 
  FolderKanban, 
  Briefcase, 
  BarChart3, 
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Clock,
  Target,
  Plus,
  Bell,
  User,
  LogOut,
  ChevronRight,
  CheckCircle2,
  Circle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const stats = [
  {
    title: "Total Revenue",
    value: "$12,450",
    change: "+12.5%",
    isPositive: true,
    icon: Wallet,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Active Projects",
    value: "8",
    change: "+2",
    isPositive: true,
    icon: FolderKanban,
    color: "from-primary to-blue-600",
  },
  {
    title: "Goals Completed",
    value: "24/30",
    change: "80%",
    isPositive: true,
    icon: Target,
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Time Saved",
    value: "48h",
    change: "This month",
    isPositive: true,
    icon: Clock,
    color: "from-orange-500 to-amber-600",
  },
];

const recentTasks = [
  { id: 1, title: "Complete Q4 budget review", status: "completed", project: "Finance" },
  { id: 2, title: "Design new landing page", status: "in-progress", project: "Side Hustle" },
  { id: 3, title: "Client meeting prep", status: "pending", project: "Consulting" },
  { id: 4, title: "Update project timeline", status: "in-progress", project: "Marketing" },
  { id: 5, title: "Review analytics report", status: "pending", project: "Finance" },
];

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Wallet, label: "Finances", href: "/dashboard/finances", active: false },
  { icon: FolderKanban, label: "Projects", href: "/dashboard/projects", active: false },
  { icon: Briefcase, label: "Side Hustles", href: "/dashboard/hustles", active: false },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics", active: false },
  { icon: Settings, label: "Settings", href: "/dashboard/settings", active: false },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background flex">
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 bg-sidebar border-r border-sidebar-border">
        <div className="flex items-center gap-2 px-6 h-16 border-b border-sidebar-border">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-sidebar-foreground">LifeSync Pro</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 ${
                  item.active 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                }`}
                data-testid={`button-nav-${item.label.toLowerCase()}`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
            <CardContent className="p-4">
              <h4 className="font-semibold text-sm mb-1">Pro Plan</h4>
              <p className="text-xs text-muted-foreground mb-3">Unlock all features</p>
              <Button size="sm" className="w-full" data-testid="button-upgrade">
                Upgrade Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </aside>

      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-40 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between h-full px-4 md:px-6">
            <div className="flex items-center gap-4 lg:hidden">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="hidden lg:block">
              <h1 className="text-lg font-semibold">Welcome back!</h1>
              <p className="text-sm text-muted-foreground">Here's what's happening today</p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative" data-testid="button-notifications">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] text-destructive-foreground flex items-center justify-center">
                  3
                </span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2" data-testid="button-user-menu">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-blue-500 text-white text-sm">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline text-sm font-medium">John Doe</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <Link href="/">
                    <DropdownMenuItem>
                      <LogOut className="w-4 h-4 mr-2" />
                      Log out
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-stat-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={stat.isPositive ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}
                    >
                      {stat.isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                      {stat.change}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-1" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-stat-title-${index}`}>
                    {stat.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card data-testid="card-revenue-chart">
                <CardHeader className="flex flex-row items-center justify-between gap-2">
                  <div>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Your earnings this year</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View Report
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-gradient-to-t from-primary to-blue-400 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-tasks">
                <CardHeader className="flex flex-row items-center justify-between gap-2">
                  <div>
                    <CardTitle>Recent Tasks</CardTitle>
                    <CardDescription>Your latest activities</CardDescription>
                  </div>
                  <Button size="sm" data-testid="button-add-task">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Task
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTasks.map((task) => (
                      <div 
                        key={task.id} 
                        className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        data-testid={`task-item-${task.id}`}
                      >
                        {task.status === 'completed' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate ${task.status === 'completed' ? 'line-through text-muted-foreground' : ''}`}>
                            {task.title}
                          </p>
                          <p className="text-xs text-muted-foreground">{task.project}</p>
                        </div>
                        <Badge 
                          variant="secondary"
                          className={
                            task.status === 'completed' 
                              ? 'bg-green-500/10 text-green-600' 
                              : task.status === 'in-progress'
                              ? 'bg-blue-500/10 text-blue-600'
                              : 'bg-gray-500/10 text-gray-600'
                          }
                        >
                          {task.status === 'completed' ? 'Done' : task.status === 'in-progress' ? 'In Progress' : 'Pending'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card data-testid="card-goals">
                <CardHeader>
                  <CardTitle>Monthly Goals</CardTitle>
                  <CardDescription>Track your progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Savings Target</span>
                      <span className="text-sm text-muted-foreground">$2,400 / $3,000</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Projects Completed</span>
                      <span className="text-sm text-muted-foreground">6 / 8</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Client Meetings</span>
                      <span className="text-sm text-muted-foreground">12 / 15</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Learning Hours</span>
                      <span className="text-sm text-muted-foreground">18 / 20</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-quick-actions">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-3" data-testid="button-add-expense">
                    <Wallet className="w-4 h-4" />
                    Add Expense
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3" data-testid="button-new-project">
                    <FolderKanban className="w-4 h-4" />
                    New Project
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3" data-testid="button-set-goal">
                    <Target className="w-4 h-4" />
                    Set New Goal
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3" data-testid="button-view-analytics">
                    <BarChart3 className="w-4 h-4" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
