# LifeSync Pro - Design Guidelines

## Design Approach

**Reference-Based Landing Page** + **System-Based Dashboard**
- Landing page draws inspiration from Linear (bold typography, gradients), Notion (clean cards), and Stripe (professional restraint)
- Dashboard follows shadcn/ui design system for consistency and rapid development
- Goal: Convert visitors while delivering a professional, trustworthy platform experience

## Typography

**Font Stack:**
- Headlines: Inter, weights 600-700
- Body: Inter, weight 400-500
- Code/Data: JetBrains Mono, weight 400-600

**Hierarchy:**
- Hero headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section headers: text-3xl md:text-4xl, font-semibold
- Feature cards: text-xl font-semibold (title), text-base (description)
- Body text: text-base md:text-lg
- CTA buttons: text-base md:text-lg font-semibold
- Fine print: text-sm

## Layout System

**Spacing Primitives:** Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Card padding: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8
- Container: max-w-7xl mx-auto px-4 md:px-6

**Grid System:**
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Pricing: grid-cols-1 md:grid-cols-3 (flex on mobile)

## Landing Page Structure

**1. Hero Section (100vh on desktop, auto on mobile)**
- Full-viewport hero with gradient background overlay
- Centered content with large headline, subheadline, dual CTAs
- Large background image showing professionals working/productivity
- CTA buttons with backdrop-blur-md bg-white/10 treatment
- Social proof below CTAs: "Trusted by 10,000+ professionals"

**2. Features Grid**
- Three-column grid showcasing core capabilities
- Each feature: Icon (lucide-react, size-10), title, description, subtle border
- Icons in gradient accent treatment
- Asymmetric layout: vary card heights for visual interest

**3. Product Showcase**
- Two-column alternating layout
- Left: Dashboard screenshot/mockup, Right: Feature description (then flip)
- 3-4 showcase items highlighting finance tracking, project management, analytics
- Screenshots should show actual dashboard UI with real data

**4. Testimonials**
- Three-column grid with customer cards
- Each card: Avatar, name, role/company, quote, 5-star rating
- Subtle shadow, rounded corners (rounded-xl)
- Mix of individual and company testimonials

**5. Pricing Section**
- Three tiers: Basic ($29), Pro ($79), Enterprise ($199)
- Center tier highlighted (scale-105, shadow-xl, border accent)
- Feature lists with checkmarks, clear CTA buttons per tier
- "Most Popular" badge on Pro tier
- Annual/Monthly toggle

**6. About/Values**
- Two-column: Team photo left, mission statement right
- Stats row: Users, Projects Managed, Money Saved (large numbers)

**7. Newsletter Section**
- Centered, single-column with gradient background
- Email input + CTA button inline
- Promise: "Weekly productivity tips, no spam"

**8. Contact Form**
- Two-column: Form left (name, email, message), contact info right
- Contact info: Email, social links, office hours
- Submit button primary accent

**9. Footer**
- Four-column grid: Product links, Company, Resources, Social
- Newsletter signup repeated
- Legal links (Privacy, Terms) at bottom

## Dashboard Structure

**Navigation:**
- Left sidebar: Logo, nav items (Dashboard, Finances, Projects, Side Hustles, Analytics, Settings)
- Top bar: Search, notifications, user menu
- Collapsible on mobile (hamburger menu)

**Dashboard Layout:**
- Stats cards row (4 cards): Revenue, Active Projects, Goals Completed, Time Saved
- Two-column main area: Charts left, recent activity right
- Quick actions floating button bottom-right

**Subscription Management:**
- Current plan card with upgrade/downgrade options
- Payment history table
- Billing settings form

## Component Library

**Buttons:**
- Primary: Gradient background, white text, rounded-lg, px-6 py-3
- Secondary: Border, transparent bg, hover fill
- Ghost: No border, hover background

**Cards:**
- Base: rounded-xl, border, p-6, shadow-sm, hover:shadow-md transition
- Gradient cards for CTAs: subtle gradient overlay

**Forms:**
- Input fields: rounded-lg, border, px-4 py-2, focus:ring-2 focus:border-primary
- Labels: text-sm font-medium mb-2
- Error states: text-destructive below field

**Modals:**
- Centered, max-w-md, backdrop-blur, rounded-xl
- Close button top-right
- Action buttons bottom-right

**Navigation:**
- Smooth scroll on landing page
- Active state indicators on dashboard nav
- Mobile: Slide-in drawer navigation

## Images

**Hero Section:**
- Large, high-quality image of diverse professionals collaborating at modern workspace
- Overlay with gradient (from black/20% to transparent) for text readability
- Image should convey productivity, focus, modern tools

**Product Screenshots:**
- Dashboard mockups showing finance charts, project kanban boards, analytics graphs
- Use actual component designs, not generic placeholders
- Light mode screenshots with data-rich visualizations

**Testimonial Avatars:**
- Professional headshots in circular frames
- Diverse representation across testimonials

**About Section:**
- Team photo showing collaborative, modern workspace
- Optional: Founder headshot for credibility

**No images needed for:** Features (use icons), Pricing, Newsletter, Footer

## Visual Treatments

**Gradients:**
- Hero background: gradient from deep blue to teal
- CTA buttons: gradient from orange to amber
- Section accents: subtle gradients on hover states

**Animations (minimal, strategic):**
- Hero: Fade-in on load (0.6s)
- Cards: Hover lift (translateY(-4px))
- CTAs: Subtle scale on hover (scale-105)
- NO scroll animations - keep it fast and clean

**Borders & Shadows:**
- Subtle borders: border/10
- Card shadows: shadow-sm default, shadow-lg on hover
- Pricing cards: shadow-xl for highlighted tier

## Accessibility

- Focus states: ring-2 ring-primary on all interactive elements
- Color contrast: Minimum WCAG AA compliance
- Alt text on all images
- Semantic HTML throughout
- Keyboard navigation support on all interactive elements